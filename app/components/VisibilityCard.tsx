import React from 'react';
import VerticalMeter from './VerticalMeter';

type Props = {
    title:string;
    visibility:number;
}

const VisibilityCard = ({title,visibility}: Props) => {
  return (
    <div className='bg-white rounded-xl p-4 flex flex-col gap-4'>
        <span className='text-gray-400 text-sm'>{title}</span>
        <div className='flex justify-between h-[70px] items-center'>
            <h1 className='text-5xl relative' >{visibility}<span className='text-sm'>Km</span></h1>
        </div>
        <span className='text-sm'>Average</span>
    </div>
  )
}

export default VisibilityCard
