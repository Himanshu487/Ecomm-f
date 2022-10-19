import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Nav.css';
import { FiShoppingCart } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {

  const NavSty = styled.nav`
  font-size:20px;
  padding-left:10px
  `;

  return (
      <>
      <NavSty>
        <div className='nav-bar-b'>
        <ul>
          <li>
            <NavLink to="/" className="nav-link"><HiHome/>Home
              {/* <img src={} /> */}
            </NavLink>
          </li>
        </ul>
        <ul className='alig-navb'>
              <li>
              <NavLink to="/products" className="nav-link">Products</NavLink>
              </li>
              <li>
              <NavLink to="/contact" className="nav-link"><IoMdContact/>Contact</NavLink>
              </li>         
              <li>
              <NavLink to="/Home" className="nav-link">Home</NavLink>    
              </li>
              <li>
              <NavLink to="/cart" className="nav-link"><FiShoppingCart/></NavLink>  
            </li>
          </ul>

          <ul className='hambur'>
          <li className='li-hambur'>
               <GiHamburgerMenu/>
            </li>
            </ul>
          {/* <ul className='alig-navb active'>
            
          </ul> */}

          </div>
         </NavSty>

      </>
      
  )
}

export default Nav