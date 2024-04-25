import React from 'react'

type Props = {
    day:string;
    min:string;
    max:string;
}

const DayTempCard = ({day,min,max}: Props) => {
  return (
    <div>
        <span>{day}</span>
        <img src="" alt="" />
        <div className='flex'>
            <span>{max}</span>
            <span>{min}</span>
        </div>
    </div>
  )
}

export default DayTempCard