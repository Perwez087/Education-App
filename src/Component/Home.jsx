import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Button from "../layout/Button";
import img from "../assets/hero.svg"
import Aos from "aos";
import "aos/dist/aos.css"

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:1200})
  })
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className="md:w-2/4 text-center" data-aos="fade-up-right">
        <h1 className="md:text-5xl font-bold leading-tight">Knowledge with</h1>
        <span className="md:text-5xl font-bold text-green-400">eStudy</span>
       
        <p className="text-gray-400 text-lg mt-5 text-start" data-aos="fade-up-left">
            eStudy is your gateway to a world of limitless learning possibilities. With our cutting-edge
            eLearning platform, you can explore a vast library of courses, from academic subject to practical 
            skills, all designed to help you achieve your goals.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500} data-aos="fade-right">
            <Button title="Contact Us"/>
        </Link>
      </div>

      <div className="w-full md:w-2/4" data-aos="fade-up">
        <img src={img} alt="img"/>
      </div>
    </div>
  );
};

export default Home;
