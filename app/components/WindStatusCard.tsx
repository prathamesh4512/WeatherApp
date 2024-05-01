import React from 'react';
import { FaRegCompass } from "react-icons/fa";

type props = {
    title:string;
    windSpeed:number;
}

const WindStatusCard = ({title,windSpeed}:props) => {
  return (
    <div className='bg-white rounded-xl p-4 flex flex-col justify-between '>
    <span className='text-gray-400 text-sm'>{title}</span>
    <div className='flex justify-between h-[70px] items-center'>
        <h1 className='text-5xl relative' >{windSpeed}<span className='text-sm'>Km/h</span></h1>
    </div>
    <div className='flex items-center gap-2'>
    <FaRegCompass color='blue' size={20} />
    <span className='text-sm'>WSW</span>
    </div>

</div>
  )
}

export default WindStatusCard