import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Nav = () => {

  const [bg, setBg] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    })
  });

  return (
    <div className={`${bg && ' shadow-xl p-2 w-full fixed z-10 transition-all duration-300 bg-white h-[90px]'}`}>
      <div className='p-2'>
        <nav className='flex md:flex justify-between items-center h-[72px] px-2'>

          {/* left -side */}
          <div>
            <p className='text-center text-lg font-extrabold'>Eddy-Oluwaseyi <br /> Ventures LTD.</p>
          </div>

          {/* right side bigger screen */}

          <ul className='flex justify-between gap-8 text-lg font-semibold'>

          {/* close button */}
            <AiOutlineClose onClick={() => setIsOpen(false)} className='text-2xl absolute top-6 left-6 md:hidden lg:hidden'/>
            
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Servives</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          {/* right side for mobile */}
          <div className=''>
            <AiOutlineMenu onClick={() => setIsOpen(true)} className='text-2xl sm:hidden md:hidden lg:hidden' />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav

{/* <ul className={`${isOpen ? 'right-0' : 'right-full'} fixed rounded-xl top-0 w-4/5 h-screen bg-yellow-400 flex flex-col justify-center items-center space-y-8 md:flex relativegap-8 text-lg font-semibold`}> */}