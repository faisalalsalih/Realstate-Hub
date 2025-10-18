import React from 'react'
import asterisk from "../assets/asterisk.png"
import cover from "../assets/grid.svg"

const Clients = () => {
  return (
    <>
      <section id='clients'>
        <div className="testimonials">
            <img src={asterisk} alt="asterisk" className='absolute-asterisk' />
            <img src={cover} alt="cover" className='cover' />
            <div className="clients1">
                <h6>Our Testimonials</h6>
                <h1>What Our Client Say About Us</h1>
                <p>Testimonials from satisfied customer cen be powerfull tools to build<br />trust and credibility for your real estate website.</p>
            </div>
            <div className="clients2"></div>
            <div className="clients3"></div>
        </div>
      </section>
    </>
  )
}

export default Clients
