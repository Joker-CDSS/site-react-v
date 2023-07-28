import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

const Hero = () => {
  return (

    <div className='bg-hero-image bg-no-repeat w-screen bg-center bg-cover'>

      <div className='text-center p-20 self-center md:p-60'>
        <h2 className='text-white text-2xl font-bold md:text-5xl'>Build Your <span className='bg-yellow-500 text-black font-bold rounded p-1'>Dream</span></h2>

        <p className='text-white font-semibold text-base my-8 leading-5 max-w-sm mx-auto md:max-w-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus, veniam perferendis nam quas aut, ullam beatae animi odio vitae aliquid ad quisquam incidunt atque blanditiis quaerat velit nihil! Sequi!</p>

        <div className='flex justify-center items-center gap-2'>
          <button className='bg-yellow-500 font-bold rounded text-base p-2'>Discover How Below </button>
          <BsFillArrowDownCircleFill className='text-3xl bg-yellow-500 rounded-md' />
        </div>

      </div>

    </div>

  )
}

export default Hero