import React from 'react'
import Services from './Services'
import image1 from '../assets/const3.avif'
import image2 from '../assets/const4.avif'
import image3 from '../assets/const6.avif'

const About = () => {
  return (
    <div>

      <div className='text-center my-20'>
        <h2 className='text-2xl font-bold p-4'>
          Our Offered Services
        </h2>
        <p className='text-base font-semibold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className='text-center p-4 md:flex gap-4'>
        <Services imagelink={image1} header={'Building Drawings'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
        <Services imagelink={image2} header={'Painting Constructions'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
        <Services imagelink={image3} header={'Repairing Constructions'} paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
      </div>

    </div>
  )
}

export default About