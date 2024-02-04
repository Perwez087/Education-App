import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {AiOutlineMenu} from "react-icons/ai"
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isToggle,setToggle] = useState(false);

    const navHandler=()=>{
        setToggle(!isToggle)
    }
  return (
    <div className='sticky top-0 flex justify-between p-5 md:px-32 shadow-md bg-white z-10'>
      <div>
       <Link to='/' className='font-bold text-2xl p-1 cursor-pointer hover:text-green-400 transition-all duration-300'>
         eStudy
       </Link>
      </div>
      <nav className='hidden md:flex gap-4 cursor-pointer font-medium text-lg'>
       <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        Home
       </Link>
       <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        About
       </Link>
       <Link to='courses' spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        Course
       </Link>
       <Link to='reviews' spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        Reviews
       </Link>
       <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        Contact
       </Link>
      </nav>
      <div className='md:hidden flex mt-2' onClick={navHandler}>
        {!isToggle ? <AiOutlineMenu size={22}/> : <RxCross1 size={22}/> }
      </div>

      <div className={`${isToggle ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col items-center absolute left-0 top-20 h-fit w-full bg-white p-4 pb-8 gap-4 transition duration-300`}>
      <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        Home
       </Link>
       <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        About
       </Link>
       <Link to='courses' spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        Course
       </Link>
       <Link to='reviews' spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        Reviews
       </Link>
       <Link to='contact' spy={true} smooth={true} duration={500} className='hover:text-green-400 transition-all duration-300'>
        Contact
       </Link>
      </div>
    </div>
  )
}

export default Navbar
