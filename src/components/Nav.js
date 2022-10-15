import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
      <>
          <ul>
              <li>
              <NavLink to="/products" className="nav-link">Products</NavLink>
              </li>
              <li>
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>         
                <li>
                <NavLink to="/cart" className="nav-link">Products</NavLink>
                </li>
         </ul>
          
      </>
      
  )
}

export default Nav