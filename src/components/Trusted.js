import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import styled from 'styled-components';

const Trusted = () => {
  return (
      <>
          <Wrapper className='main-cont'>
              
              <div className='cont-1'>
                      <TbTruckDelivery className="icon-font" />
                  <p>Super Fast and Free Delivery</p>
              </div>

              <div className='cont-2'>
                  <div className='ship-cont'>
                  <MdSecurity className="icon-font" />
                      <p>Non-contact Shipping</p>
                  </div>
                  <div className='ship-gurantee'>
                  <GiReceiveMoney className="icon-font"/>
                      <p>Money-back guaranteed</p>
                  </div>
              </div>

              <div className='cont-payment'>
                <RiSecurePaymentLine className="icon-font"/>
                  <p>Super Secure Payment system</p>
              </div>
      </Wrapper>
      </>
  )
}

const Wrapper = styled.section`

display:flex;
justify-content:center;

.cont-1,.cont-2 .ship-cont,.cont-2 .ship-gurantee,.cont-payment{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:azure;

}
.cont-1,cont-2,.cont-payment{
    height: 18rem;
    border: 1px solid;
}
.ship-cont,.ship-gurantee{
   height:50%;
   border:1px solid #000;
}
.icon-font{
  font-size:3rem;
}
`;

export default Trusted