import React from 'react'
import image1 from '../assets/const5.avif'
import { AiOutlineProfile, } from 'react-icons/ai'

const Unique = (props) => {
  return (
    <div className='p-4 my-4 border-2 border-black rounded-2xl shadow-2xl'>

      <div className='flex justify-start gap-2 items-center p-2'>
        {props.icon}
        <h5 className='font-bold text-xl text-gray-700 p-4'>
          {props.header}
        </h5>
      </div>

      <p className='p-4 text-base text-gray-500 font-semibold md:max-w-md m-auto'>
        {props.text}
      </p>

    </div>
  )
}

const AboutUs = () => {
  return (
    <div>
      {/* header */}
      <div className='text-center my-20'>
        <h2 className='font-bold text-2xl p-4'>
          About Us
        </h2>

        <p className='text-base font-semibold md:max-w-md m-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptas rem. Impedit ut, distinctio facilis pariatur vel a consectetur dignissimos neque odio.
        </p>
      </div>

      {/* members */}
      <div>
        <div className='text-center my-20'>
          <h3 className='font-bold text-xl p-4'>
            Meet Our Expert Members
          </h3>

          <p className='text-base font-semibold md:max-w-md m-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptas rem. Impedit ut, distinctio facilis pariatur vel a consectetur dignissimos neque odio.
          </p>
        </div>
      </div>

      <div className='p-2 md:flex justify-between gap-2 px-8'>

        <div className='rounded-2xl shadow-2xl my-10 p-10'>
          <img src={image1} alt="" className='w-[260px] h-[260px]' />
        </div>

        <div className='rounded-2xl shadow-2xl my-10 p-10'>
          <img src={image1} alt="" className='w-[260px] h-[260px]' />
        </div>

        <div className='rounded-2xl shadow-2xl my-10 p-10'>
          <img src={image1} alt="" className='w-[260px] h-[260px]' />
        </div>

      </div>

      {/* special */}
      <div>

        <div className='text-center my-20'>

          <h4 className='font-bold text-xl p-4'>
            Some Features That Make Us Unique
          </h4>

          <p className='text-base font-semibold md:max-w-md m-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aspernatur deleniti inventore nulla dolores praesentium reiciendis earum.
          </p>
        </div>

        <div className='p-4 md:grid grid-cols-3 gap-2'>
          <Unique
            icon={<AiOutlineProfile className='text-2xl' />}
            header={'Expert Technicians'}
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus quas dicta exercitationem ea a molestiae obcaecati? Facere unde dolor, maiores esse nostrum dolore officia ipsum cupiditate vitae id deleniti.'}
          />

          <Unique
            icon={<AiOutlineProfile className='text-2xl' />}
            header={'Professional Service'}
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus quas dicta exercitationem ea a molestiae obcaecati? Facere unde dolor, maiores esse nostrum dolore officia ipsum cupiditate vitae id deleniti.'}
          />

          <Unique
            icon={<AiOutlineProfile className='text-2xl' />}
            header={'Great Support'}
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus quas dicta exercitationem ea a molestiae obcaecati? Facere unde dolor, maiores esse nostrum dolore officia ipsum cupiditate vitae id deleniti.'}
          />

          <Unique
            icon={<AiOutlineProfile className='text-2xl' />}
            header={'Technical Skills'}
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus quas dicta exercitationem ea a molestiae obcaecati? Facere unde dolor, maiores esse nostrum dolore officia ipsum cupiditate vitae id deleniti.'}
          />

          <Unique
            icon={<AiOutlineProfile className='text-2xl' />}
            header={'Highly Recommemded'}
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus quas dicta exercitationem ea a molestiae obcaecati? Facere unde dolor, maiores esse nostrum dolore officia ipsum cupiditate vitae id deleniti.'}
          />

          <Unique
            icon={<AiOutlineProfile className='text-2xl' />}
            header={'Positive Reviews'}
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus quas dicta exercitationem ea a molestiae obcaecati? Facere unde dolor, maiores esse nostrum dolore officia ipsum cupiditate vitae id deleniti.'}
          />
        </div>

      </div>

    </div>
  )
}

export default AboutUs