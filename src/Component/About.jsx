import React, { useEffect } from 'react'
import img from "../assets/about.svg";
import { Link } from 'react-scroll';
import Button from '../layout/Button';
import Aos from 'aos';
const About = () => {
  useEffect(()=>{
    Aos.init({duration:1200})
  })
  return (
    <div className='pb-4 flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
      <div className='w-full md:w-2/4' data-aos="fade-up">
       <img src={img} alt='img'/>
      </div>

      <div className='md:w-2/4 text-center' data-aos="fade-up-left">
         <h1 className='md:text-4xl font-bold'>About <span className='text-green-400'>Us?</span></h1>
         
         <p className='mt-4 text-gray-400 text-lg'>eStudy is your gateway to a world of limitless learning possibilities. With our cutting-edge
            eLearning platform, you can explore a vast library of courses, from academic subject to practical 
            skills, all designed to help you achieve your goals.</p>

         <Link to='about' spy={true} smooth={true} duration={500}>
          <Button title="About Us"/>
         </Link>   
      </div>
    </div>
  )
}

export default About
