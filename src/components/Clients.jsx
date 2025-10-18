import React, { useEffect } from 'react'
import asterisk from "../assets/asterisk.png"
import cover from "../assets/grid.svg"
import { useState } from 'react'
import star from "../assets/star.png"
import Audience1 from '../assets/Audience1.jpeg'
import Audience2 from '../assets/Audience2.jpeg'
import Audience3 from '../assets/Audience3.jpeg'
import Audience4 from '../assets/Audience4.jpeg'
import Audience5 from '../assets/Audience5.jpeg'
import Audience6 from '../assets/Audience6.jpeg'
import arrowleft from "../assets/left-arrow.png"
import arrowright from "../assets/right-arrow.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"



const Clients = () => {

    const [state, Setstate] = useState(false);


    
        useGSAP(() => {
            gsap.from(".clients2a, .clients2b, .clients2c", {
                y:-10,
                duration: 0.2,
                stagger:0.2,
                ease: "power2.out",
                opacity:0
            })
        }, [state])

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
            <div className="clients2">
                {
                    !state && (
                        <>
                        <div className="clients2a">
                            <div className="bob">
                                <img src={star} alt="stars-img" className='stars-collection' />
                                <p>Working with was a an absolute<br />Pleasure from start to finish.Their<br />Team of beyond to help us find our<br />dream home.</p>
                            </div>
                            <div className="bobo">
                                <div className="pager"><img src={Audience1} alt="Audience-pics" /></div>
                                <div className="datacee">
                                    <h2>Lilyan Danclark</h2>
                                    <h6>Happy Customer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="clients2b">
                            <div className="bob">
                                <img src={star} alt="stars-img" className='stars-collection' />
                                <p>Working with was a an absolute<br />Pleasure from start to finish.Their<br />Team of beyond to help us find our<br />dream home.</p>
                            </div>
                            <div className="bobo">
                                <div className="pager"><img src={Audience2} alt="Audience-pics" /></div>
                                <div className="datacee">
                                    <h2>Ralph Edwards</h2>
                                    <h6>Happy Customer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="clients2c">
                            <div className="bob">
                                <img src={star} alt="stars-img" className='stars-collection' />
                                <p>Working with was a an absolute<br />Pleasure from start to finish.Their<br />Team of beyond to help us find our<br />dream home.</p>
                            </div>
                            <div className="bobo">
                                <div className="pager"><img src={Audience3} alt="Audience-pics" /></div>
                                <div className="datacee">
                                    <h2>Jenny Wilson</h2>
                                    <h6>Happy Customer</h6>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                }

                {
                    state && (
                        <>
                        <div className="clients2a">
                            <div className="bob">
                                <img src={star} alt="stars-img" className='stars-collection' />
                                <p>Working with was a an absolute<br />Pleasure from start to finish.Their<br />Team of beyond to help us find our<br />dream home.</p>
                            </div>
                            <div className="bobo">
                                <div className="pager"><img src={Audience4} alt="Audience-pics" /></div>
                                <div className="datacee">
                                    <h2>David R.</h2>
                                    <h6>Best Customer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="clients2b">
                            <div className="bob">
                                <img src={star} alt="stars-img" className='stars-collection' />
                                <p>Working with was a an absolute<br />Pleasure from start to finish.Their<br />Team of beyond to help us find our<br />dream home.</p>
                            </div>
                            <div className="bobo">
                                <div className="pager"><img src={Audience5} alt="Audience-pics" /></div>
                                <div className="datacee">
                                    <h2>Jerry</h2>
                                    <h6>Happy Customer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="clients2c">
                            <div className="bob">
                                <img src={star} alt="stars-img" className='stars-collection' />
                                <p>Working with was a an absolute<br />Pleasure from start to finish.Their<br />Team of beyond to help us find our<br />dream home.</p>
                            </div>
                            <div className="bobo">
                                <div className="pager"><img src={Audience6} alt="Audience-pics" /></div>
                                <div className="datacee">
                                    <h2>IshowSpeed</h2>
                                    <h6>Old Customer</h6>
                                </div>
                            </div>
                        </div>
                        
                        </>
                    )
                }
            </div>
            <div className="clients3">
                <div className={`button-left ${!state ? 'disabled': ''}`} onClick={() => Setstate(false)}><img src={arrowleft} alt="arrowleft" /></div>
                <div className={`button-right ${state ? 'disabled': ''}`} onClick={() => Setstate(true)}><img src={arrowright} alt="arrowright" /></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Clients
