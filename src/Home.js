import React from 'react'
// import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';

const Home = () => {
  const data = {
    name: "charlie Ecommerce",
  };
  // we have to get this data there in the herosection
  return (
    <>
     
      <HeroSection myData={data} />
      <Trusted/>
      </>
  ) 
}

// const Wrapper = styled.section`
// background-color:${({theme})=>theme.colors.bg};
// width:20rem;
// height:20rem;
// `;
 
export default Home; 