import React from 'react'

type Props = {
    day:string;
    min:number;
    max:number;
    iconName:string;
}

const TempCard = ({day,min,max,iconName}: Props) => {
  return (
    <div className='bg-white rounded-xl p-4 text-center'>
        <span>{day}</span>
        <img src={`https://openweathermap.org/img/wn/${iconName}@2x.png`} alt="icon" />
        <div className='flex justify-center gap-2'>
            <span>{max}<sup>&deg;</sup></span>
            <span className='text-gray-400'>{min}<sup>&deg;</sup></span>
        </div>
    </div>
  )
}

export default TempCard