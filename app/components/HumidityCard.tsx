import React from 'react'

type Props = {
    title:string;

}

const HumidityCard = ({title}: Props) => {
  return (
    <div className='bg-white rounded-xl p-4 flex flex-col gap-4'>
        <span>{title}</span>
        <div className='flex justify-between h-[70px] items-center'>
            <h1 className='text-5xl relative' >12 <sup className='text-xl absolute top-[2px]'>%</sup></h1>
            <div className='border border-gray-400 rounded-xl p-1 h-[70px]'>
                <div className='rounded-full bg-blue-700 w-[20px] h-[20px]'></div>
            </div>
        </div>
        <span>Normal</span>
    </div>
  )
}

export default HumidityCard
