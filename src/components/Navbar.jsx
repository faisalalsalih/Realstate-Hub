import React from 'react'
import building from '../assets/buildings.png'
import menu from "../assets/app.png"

const Navbar = () => {
  return (
    <>
      <nav id='navbar'>
        <div className="navbar1">
            <img src={building} alt="navbar-button" className='navimage' loading='lazy' />
            <h2 className='taste'>R.Estate</h2>
        </div>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Feature</li>
            <li>Property</li>
            <li>Blog</li>
        </ul>
        <button className='nav-button'>Contact Us</button>
        <img src={menu} alt="menu-img" className='menu-img' loading='lazy' />
      </nav>
    </>
  )
}

export default Navbar
