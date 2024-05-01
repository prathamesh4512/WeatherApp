import React from 'react'

type Props = {
    day:string;
    setDay:Function,
    tempType:string;
    setTempType:Function;
}

const Navbar = ({day,setDay,tempType,setTempType}: Props) => {
  return (
    <nav className="flex justify-between">
    <div className="flex gap-4">
      <button
        className={
          day == "day"
            ? "font-semibold border-b-2 border-black"
            : "font-medium text-gray-400"
        }
        onClick={() => setDay("day")}
      >
        Today
      </button>
      <button
        className={
          day == "week"
            ? "font-semibold border-b-2 border-black"
            : "font-medium text-gray-400"
        }
        onClick={() => setDay("week")}
      >
        Week
      </button>
    </div>

    <div>
      <div className="flex gap-4">
        <button
          className={`rounded-full  py-[2px] px-[4px] pr-[6px] font-medium ${
            tempType === "celsius"
              ? "text-white bg-black"
              : " bg-white text-black"
          }`}
          onClick={() => setTempType("celsius")}
        >
          &deg;C
        </button>
        <button
          className={`rounded-full py-[2px] px-[4px] pr-[6px] font-medium ${
            tempType === "fahrenheit"
              ? "text-white bg-black"
              : " bg-white text-black"
          }`}
          onClick={() => setTempType("fahrenheit")}
        >
          &deg;F
        </button>
      </div>
      <img src="" alt="" className="avatar" />
    </div>
  </nav>
  )
}

export default Navbar