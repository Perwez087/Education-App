import React from 'react'
import CoursesCard from '../layout/CoursesCard'
import img1 from "../assets/web-dev.svg"
import img2 from "../assets/App-dev.svg"
import img3 from "../assets/graphic.svg"
import img4 from "../assets/digital.svg"

const Courses = () => {
  return (
    <div className='flex flex-col item-center md:px-32 px-5 my-10'>
       <h1 className='md:text-4xl font-bold text-center'>Our <span className='text-green-400'>Courses</span></h1>

       <div className='flex flex-wrap justify-center gap-6 mt-6'>

        <CoursesCard img={img1} title="Web Development" para="Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management."/>

        <CoursesCard img={img2} title="App Development" para="Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones."/>

        <CoursesCard img={img3} title="Graphic Designer" para="Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones."/>

        <CoursesCard img={img4} title="Digital Marketing" para="Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services."/>
       </div>
    </div>
  )
}

export default Courses
