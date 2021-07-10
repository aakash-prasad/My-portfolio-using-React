import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import web from '../src/Images/home.jpg'
import Common from './Common'

const Home = () =>{
  return(
   <>
   <Common heading='Grow Your business with' 
   imgSrc={web} 
   visit="/Services" 
   btnName="Get Started"
   text="We are a team of proffesional developers" />
   </>
  );
}

export default Home;