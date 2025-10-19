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
                <div className="sectionb"></div>
                <div className="sectionc"></div>
                <div className="sectiond"></div>
            </div>
            <div className="footer-part2"></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
