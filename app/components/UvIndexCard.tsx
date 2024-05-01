import React from 'react';
import { Progress } from 'antd';

type Props = {
    title:string;

}

const UvIndexCard = ({title}: Props) => {
  return (
        <div className='bg-white rounded-xl p-4 flex flex-col gap-4 '>
        <span className='text-gray-400 text-sm'>{title}</span>
        <span className='text-sm'>Normal</span>
        <Progress
          type="dashboard"
          steps={4}
          percent={50}
          format={(p)=>p||0/10}
          trailColor="rgba(0, 0, 0, 0.06)"
          strokeColor="gold"
          strokeWidth={20}
          size={100}
        />
    </div>
  )
}

export default UvIndexCard
