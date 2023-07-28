import React from 'react'
import image1 from '../assets/const5.avif'

const Latestprojects = () => {
  return (
    <div>

      <div className='text-center my-20'>
        <h2 className='text-2xl font-bold p-4'>
          Our Latest Projects
        </h2>

        <p className='text-base font-semibold'>
          We are in extreme love with eco-friendly system
        </p>
      </div>

      <div className='p-2 md:flex gap-2'>

        <div className='rounded-2xl shadow-2xl my-10 p-10'>
          <img src={image1} alt="" className='w-[360px] h-[360px]' />
        </div>

        <div className='rounded-2xl shadow-2xl my-10 p-10'>
          <img src={image1} alt="" className='w-[360px] h-[360px]' />
        </div>

        <div className='rounded-2xl shadow-2xl my-10 p-10'>
          <img src={image1} alt="" className='w-[360px] h-[360px]' />
        </div>

      </div>
    </div>
  )
}

export default Latestprojects