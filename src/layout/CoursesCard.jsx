import Aos from 'aos'
import React, { useEffect } from 'react'
const CoursesCard = ({img,title,para}) => {
  useEffect(()=>{
    Aos.init({duration:1200})
  })
  return (
    <div className='flex flex-col justify-between items-center bg-white border-2 border-gray-400 md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300' data-aos="fade-up">
      <div className='w-3/5'>
        <img src={img} alt='img'/>
      </div>
      <div>
        <h3 className='text-center text-lg font-semibold'>{title}</h3>
        <p className='text-center'>{para}</p>
      </div>
    </div>
  )
}

export default CoursesCard
