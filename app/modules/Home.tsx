import React from 'react'
import HumidityCard from '../components/HumidityCard'

const Home = () => {
  return (
    <div className='bg-gray-300 p-10'>
      <div className='rounded-3xl overflow-hidden flex'>
      <div className='bg-white p-8 flex flex-col gap-6'>
          <input type="search" placeholder='Search for places'/>
          <img src="" alt="" />
          <h1 className='text-7xl font-light relative'>12
            <sup className='text-4xl absolute top-[2px]'>&deg;C</sup>
          </h1>
          <h4>Monday, <span>16:00</span></h4>
          <hr />
          <div className='flex flex-col gap-2'>
          <div>
            <img src="" alt="" />
           <span className='text-sm'>Mostly Cloudy</span>
          </div>
          <div>
            <img src="" alt="" />
            <span className='text-sm'>Rain - 30%</span>
          </div>
          </div>
       
          <div className='relative'>
          <img src="" alt="" />
            <span className='text-white absolute'> New York, Ny, USA</span>
          </div>
      </div>
      <div className='bg-gray-100 h-[200px] p-8'>
        <nav className='flex justify-between'>
          <div>
            <button>
              Today
            </button>
            <button>
              Week
            </button>
          </div>

          <div>
          <div>
            <button>
              &deg;C
            </button>
            <button>
              &deg;F
            </button>
          </div>
          <img src="" alt="" className='avatar' />
          </div>

        </nav>
      </div>
      </div>
   
    </div>
  )
}

export default Home