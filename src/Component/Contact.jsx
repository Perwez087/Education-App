import React, { useEffect } from 'react'
import Button from '../layout/Button'
import img from "../assets/contact.svg"
import Aos from 'aos'

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:1200})
  })
  return (
    <div className='flex flex-col justify-center items-center md:mx-32 mx-5 gap-4' data-aos="fade-up-right">
      <h1 className='md:text-4xl text-2xl font-bold text-center'>Contact <span className='text-green-400'>Us</span></h1>

        <div className='flex flex-col md:flex-row justify-between w-full'>
         <form className='w-full md:w-2/4 space-y-5 mt-4'>
            <div className='flex flex-col'>
            <label htmlFor='name'>Your Name</label>
            <input className='py-3 px-4 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all' placeholder='enter your name' type='text' name='name'/>
            </div>

            <div className='flex flex-col'>
            <label htmlFor='name'>Your Email</label>
            <input className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all' placeholder='enter your email' type='text' name='email'/>
            </div>

            <div className='flex flex-col'>
            <label htmlFor='name'>Your Number</label>
            <input className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all' placeholder='enter your number' type='text' name='number'/>
            </div>

           <div className='flex justify-center flex-row'>
           <Button title="Send Message"/>
           </div>
         </form>

        <div className='w-full md:w-2/5'>
         <img src={img} alt='img'/>
        </div>
        </div>
      </div>
  )
}

export default Contact