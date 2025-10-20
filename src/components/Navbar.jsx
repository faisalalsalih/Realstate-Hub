import React, { useEffect, useRef, useState } from 'react'
import building from '../assets/buildings.png'
import menu from "../assets/app.png"
import Sidebar from './Sidebar';
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Navbar = () => {

  const [sidebar, setsidebar] = useState(false);


  useGSAP(() => {
    gsap.from("#sidebar", {
      opacity:0,
      duration:0.5,
      delay:0.1
    })
  }, [sidebar])

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
        <img src={menu} alt="menu-img" className='menu-img' loading='lazy' onClick={() => setsidebar(!sidebar)} />
      </nav>
      {sidebar && <Sidebar onClose={() => setsidebar(!sidebar)} />}
    </>
  )
}

export default Navbar
