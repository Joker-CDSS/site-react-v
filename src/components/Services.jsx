import React from 'react'

const Services = (props) => {
  return (
    <div className='rounded-2xl shadow-2xl my-10 p-10'>
      <div>
        <img src={props.imagelink} alt="service-img" className='w-[120px] h-[120px] m-auto rounded-full' />
      </div>

      <h3 className='text-2xl font-bold m-2'>
        {props.header}
      </h3>

      <p className='text-base font-semibold m-2'>
        {props.paragraph}
      </p>
    </div>
  )
}

export default Services