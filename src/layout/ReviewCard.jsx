import Aos from 'aos'
import React, { useEffect } from 'react'

const ReviewCard = ({desc,img}) => {
  useEffect(()=>{
    Aos.init({duration:1200})
  })
  return (
    <div className='flex flex-col justify-between items-center md:w-3/5 bg-white p-5 hover:shadow-lg cursor-pointer rounded-lg' data-aos="fade-up-left">
      <div>
        <p>{desc}</p>
      </div>
      <div className='flex md:flex-row flex-col justify-center items-center mt-4'>
        <img src={img} alt='img' className='w-2/5 rounded-full'/>
      </div>
    </div>
  )
}

export default ReviewCard