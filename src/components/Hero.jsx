import React from 'react'
import svgb from '../assets/grid.svg'
import play from '../assets/play.png'


const Hero = () => {
  return (
    <>
      <section id='Hero'>
        <img src={svgb} alt="svg" className='svgb' />


        <div className="hero1">
            <div className="hero1a">
                {/* Div1 */}
                <div className='div1'>
                <h1 className='relators'>Expert Realtors<br />Dedicated to your<div className='flex'><div className='slice'></div><span className='success'>Success</span></div></h1>
                <p className='passion'>With a passion for helping you find your dream home, we're <br />commited to providing expert guidance and personlized<br />service throughout your property journey.</p>
                </div>


                {/* Div2 */}

                <div className="div2">
                    <button className='started'>Get Started</button>
                    <div className="videos">
                        <div className="video1"><img src={play} alt="play-button" className='play-button' /></div>
                        <p className='demo'>Watch Demo</p>
                    </div>
                </div>



                {/* Div 3 */}

                <div className="div3">
                    <div className="div3a">
                        <p>5k+</p>
                        <p>Happy Customer</p>
                    </div>
                    <div className="div3b">
                        <p>7k+</p>
                        <p>Property Sales</p>
                    </div>
                    <div className="div3c">
                        <p>50+</p>
                        <p>Sales</p>
                    </div>
                </div>


            </div>
            <div className="hero1b"></div>
        </div>
        <div className="hero2">

        </div>
      </section>
    </>
  )
}

export default Hero
