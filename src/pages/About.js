import React from 'react'
import HeroSection from '../components/HeroSection'
const About = () => {
  
  const data = {
    name: "thapa store",
  };

  return (
    <div>
    <HeroSection myData={data} />
    </div>
  )
}

export default About