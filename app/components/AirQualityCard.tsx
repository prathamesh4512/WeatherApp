import React from 'react';
import VerticalMeter from './VerticalMeter';

type Props = {
    title:string;
    humidity:number;
}

const AirQualityCard = ({title,humidity}: Props) => {
  return (
    <div className='bg-white rounded-xl p-4 flex flex-col gap-4 '>
        <span className='text-gray-400 text-sm'>{title}</span>
        <div className='flex justify-between h-[70px] items-center'>
            <h1 className='text-5xl relative' >{humidity}</h1>
            <VerticalMeter value={2*(100-humidity)}/>
        </div>
        <span className='text-sm'>Unhealthy</span>
    </div>
  )
}

export default AirQualityCard
