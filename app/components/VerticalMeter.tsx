import React from 'react'

type Props = {
    value:number
}

const VerticalMeter = ({value=10}: Props) => {
  return (
    <div className='border border-gray-400 rounded-xl p-1 h-[70px] w-[30px] relative'>
        <div className='rounded-full bg-blue-700 w-[20px] h-[20px]' style={{marginTop:`${value}%`}}></div>
    </div>
  )
}

export default VerticalMeter