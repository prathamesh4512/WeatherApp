import React from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type Props = {
    title:string;
    sunSet:string;
    sunRise:string;
}

const SunDetailsCard = ({title,sunSet,sunRise}: Props) => {
  return (
    <div className='bg-white rounded-xl p-4 flex flex-col justify-between '>
    <span className='text-gray-400 text-sm'>{title}</span>
    <div className='flex flex-col justify-between h-[80px] mb-6'>
        <div className='flex items-center gap-4'>
            <div className='w-[26px] rounded-full h-[26px] bg-yellow-400 flex items-center justify-center'>
            <FaArrowUp color='#fff'/>
            </div>
           <span className='text-md relative' >{sunSet}</span>
        </div>
        <div className='flex items-center gap-4'>
            <div className='w-[26px] rounded-full h-[26px] bg-yellow-400 flex items-center justify-center'>
            <FaArrowDown color='#fff'/>
            </div>
           <span className='text-md relative' >{sunRise}</span>
        </div>
    </div>
</div>
  )
}

export default SunDetailsCard