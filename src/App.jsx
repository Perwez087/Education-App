import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Courses from './Component/Courses'
import Review from './Component/Review'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
     <Navbar/> 
     <Home/>
     <About/>
     <Courses/>
     <Review/>
     <Contact/>
     <Footer/>
     
    </div>
  )
}

export default App
