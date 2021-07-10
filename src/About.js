import React from 'react'
import Common from './Common'
import web from '../src/Images/aboutImage.jpg'

const About = () =>{
  return(
    <>
    <Common heading='Vision and Mision ' 
      imgSrc={web} 
      visit="/Contact" 
      btnName="Contact Now" 
      text = "I believe technology can bring a revolution in our country. I would love to be a very small part of this revolution by providing digital solution at a very affordable rates" />
    </>
  );
}

export default About;