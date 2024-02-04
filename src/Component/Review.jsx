import React from 'react'
import ReviewCard from '../layout/ReviewCard'
import img1 from "../assets/pic1.png"
import img2 from "../assets/pic2.png"
import img3 from "../assets/pic3.png"

const Review = () => {
  return (
    <div className='flex flex-col item-center md:px-32 px-5 my-10'>
       <h1 className='md:text-4xl font-bold text-center'>Our <span className='text-green-400'>Reviews</span></h1>

      <div className='flex md:flex-row flex-col justify-center gap-6 item-center mt-6'>

      <ReviewCard desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." img={img1}/>

      <ReviewCard desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." img={img2}/>

      <ReviewCard desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." img={img3}/>

      </div>
    </div>
  )
}

export default Review