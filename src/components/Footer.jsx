import React from 'react'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineArrowRight, } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-[#222222] rounded-xl lg:grid grid-cols-2'>
      {/* left side */}

      <div className='p-4 lg:flex items-center justify-center gap-4'>

          <div className='text-left mt-10'>
            <h3 className='font-bold text-xl text-white'>
              About Us
            </h3>
            <p className='max-w-[280px] mt-8 text-base text-white font-semibold'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta dignissimos quo nesciunt odio obcaecati recusandae corporis itaque rerum doloremque?
            </p>
          </div>

          <div className='text-left mt-10'>

            <h3 className='font-bold text-xl text-white'>
              Contact Us
            </h3>

            <p className='max-w-[280px] mt-8 text-base text-white font-semibold'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>

            <p className='text-base mt-6 text-yellow-400 font-bold'>
              012-6532-568-9746
            </p>
            <p className='text-base mt-4 text-yellow-400 font-bold'>
              012-6532-568-9746
            </p>

          </div>

      </div>

      {/* right side  */}
      <div className='p-4 lg:mt-10'>

        <div className='items-center'>
          <h3 className='font-bold text-xl text-white'>
            Newsletter
          </h3>

          <p className='mt-8 text-base text-white font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className='mt-8 flex items-center'>
            <input type="email" placeholder='Your email address' className='p-2 rounded-2xl w-3/5 text-gray-600' />
            <AiOutlineArrowRight className='rounded-2xl text-yellow-500 text-3xl bg-white' />
          </div>

        </div>

      </div>

      <div className='text-center mt-16 lg:text-left my-auto px-10 py-4'>
        <p className='text-white font-normal'>
          Copyright &copy;2023 All rights reserved |
        </p>
      </div>

      <div className='mt-6 pb-6 flex justify-center gap-4'>
        <AiOutlineFacebook className='bg-black text-white text-3xl' />
        <AiOutlineInstagram className='bg-black text-white text-3xl' />
        <AiOutlineTwitter className='bg-black text-white text-3xl' />
        <AiOutlineMail className='bg-black text-white text-3xl' />
      </div>

    </div>
  )
}

export default Footer