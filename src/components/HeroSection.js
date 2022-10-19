import React from 'react'
import styled from 'styled-components';

const HeroSection = () => {
    // {myData}

    // const name={myData}

  return (
      <>
          <Boxsty>
              {/* <div className='container'> */}
              <div className='box'>
                  <div className='alig-box'>
                      <p>Welcome to</p>
                      <h1>Charlie's 
                      {/* {name} */}
                      </h1>
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                  </div>
              </div>

              <figure>
                  <img className='img-eshop' src='images/1.jpg'></img>
            </figure>
          {/* </div> */}
          </Boxsty>

      </>
  )
}

const Boxsty = styled.section`

display:flex;
align-items:flex-start;
justify-content:center;

.box{
    width:50%;
    .alig-box{
   
    }
}
.img-eshop{
    width:35rem;
}
`;

export default HeroSection;