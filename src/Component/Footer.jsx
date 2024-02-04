import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
    <div className='md:flex md:justify-around bg-white min-h-14 items-center'>
      <nav className='flex md:flex-row py-4 flex-col gap-4 font-semibold text-lg cursor-pointer px-4 md:px-0'>
        <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
            Home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
            About
        </Link>
        <Link to="course" spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
            Course
        </Link>
        <Link to="reviews" spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
            Reviews
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
            Contact
        </Link>
      </nav>
      <div className='font-bold text-xl md:px-0 px-4 mb-2 cursor-pointer'>
        <Link to="/">
          eStudy
        </Link>
      </div>
    </div>
    <div><h2 className='text-center text-sm md:text-lg pb-2 mt-4 font-semibold'>&copy;copyright developed by Perwez Alam | All rights reserved</h2></div>
    </>
  )
}
export default Footer
