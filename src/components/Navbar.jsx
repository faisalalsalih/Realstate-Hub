import React from 'react'
import building from '../assets/buildings.png'

const Navbar = () => {
  return (
    <>
      <nav id='navbar'>
        <div className="navbar1">
            <img src={building} alt="navbar-button" className='navimage' />
            <h2 className='taste'>R.Estate</h2>
        </div>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Feature</li>
            <li>Property</li>
            <li>Blog</li>
        </ul>
        <button>Contact Us</button>
      </nav>
    </>
  )
}

export default Navbar
