import React from 'react'
import grid from "../assets/grid.svg"
import pic2 from "../assets/pic2.jpeg"
import asterisk from "../assets/asterisk.png"
import tick from "../assets/check-mark.png"

const About = () => {
  return (
    <>
      <section id='about'>
        <div className="about-container">
            <img src={grid} alt="grid-svg" className='grid-svg' />
            <img src={asterisk} alt="asterisk" className='staro' />

            <div className="awal">
                <img src={pic2} alt="down-image" />
            </div>
            <div className="akhir">
                <p className='akhir1'>About Us</p>
                <h1 className='akhir2'>Your Trusted Partner<br />In Real Estate</h1>
                <div className="strive1">
                    <div className="tick"><img src={tick} alt="tick" className='tick' /></div>
                    <p className='tick-text'>At we strive we define real estate services and<br />make your property dream a reality.</p>
                </div>
                <div className="strive2">
                    <div className="tick"><img src={tick} alt="tick" className='tick' /></div>
                    <p className='tick-text'>Lets unlocked the endless possibilities that the real<br />estate market has to offer.</p>
                </div>
                <button className='readmore'>Read More</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
