import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Nav.css';

const Nav = () => {

  const NavSty = styled.nav`
  font-size:20px;
  padding-left:10px
  `;

  return (
      <>
      <NavSty>
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              {/* <img src={} /> */}
            </NavLink>
          </li>
           </ul>
          <ul className='alig-navb'>
              <li>
              <NavLink to="/products" className="nav-link">Products</NavLink>
              </li>
              <li>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>         
                <li>
            <NavLink to="/cart" className="nav-link">Products</NavLink>
            
          </li>
          <li>
            <NavLink to="/cart" className="nav-link">Products</NavLink>
            
                </li>
         </ul>
         </NavSty>

      </>
      
  )
}

export default Nav