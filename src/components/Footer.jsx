import React from 'react'
import building from '../assets/buildings.png'
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import whatsapp from "../assets/whatsapp.png"
import facebook from "../assets/facebook.png"

const Footer = () => {
  return (
    <>
      <footer id='footer'>
        <div className="footer-div">
            <div className="footer-part1">
                <div className="sectiona">
                    <div className="logowa">
                        <img src={building} alt="building" className='building' />
                        <h6>R. Estate</h6>
                    </div>
                    <p className='para'>With a commitment to excellence,we're<br />here to guide you through every step of<br />your realestate journey.</p>
                    <div className="social-media">
                        <img src={facebook} alt="social-media-icons" className='social-media-icons' />
                        <img src={whatsapp} alt="social-media-icons" className='social-media-icons' />
                        <img src={twitter} alt="social-media-icons" className='social-media-icons' />
                        <img src={instagram} alt="social-media-icons" className='social-media-icons' />
                    </div>
                </div>
                <div className="sectionb">
                    <h3>Explore</h3>
                    <ul>
                        <li>Sell Your Home</li>
                        <li>Buy A Home</li>
                    </ul>
                </div>
                <div className="sectionc">
                    <h3>Services</h3>
                    <ul>
                        <li>About us</li>
                        <li>Property</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="sectiond">
                    <h3>Contact us</h3>
                    <ul>
                        <li>+934 7657 876</li>
                        <li>random@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-part2"></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
