import React from 'react'
import svgb from '../assets/grid.svg'
import play from '../assets/play.png'
import heroImage from '../assets/pic2.jpeg'
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.jpeg'
import family from '../assets/parental-control.png'
import heart from '../assets/like.png'
import video from '../assets/property.mp4'
import { useState, useRef, useEffect } from 'react'

const Hero = () => {

  const [isplaying, setisplaying] = useState(false);

  const videoRef = useRef(null);


  const handleplay = () => {
    videoRef.current.play();
    setisplaying(true);
  }


  useEffect(() => {
    const video = videoRef.current;
    const handleended = () => setisplaying(false);

    if(video){
      video.addEventListener('ended', handleended);
    }

    return () => {
      if(video){
        video.removeEventListener('ended', handleended);
      }
    };
  }, []);



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

          {/* Hero1b is started from here */}
          <div className="hero1b">
            <div className='hero-image'>
              <img src={heroImage} alt="hero-image" className='photo-2' />
              {/* Container 1 */}
              <div className="container">
                <div className="img-container">
                  <img src={p1} className='persons' alt="p-1" />
                  <img src={p2} className='persons' alt="p-2" />
                  <img src={p3} className='persons' alt="p-3" />
                  <img src={p4} className='persons' alt="p-4" />
                </div>
                <p className='reviews'>Check <br />Reviews</p>
              </div>


              {/* Container 2 */}
              <div className="container2">
                <div className='video-container'>
                  <video src={video} controls={false} ref={videoRef} />
                  {!isplaying && (
                    <div className="playbutton" onClick={handleplay}>
                      <img src={play} />
                    </div>
                  )}

                </div>
                <div className="family">
                  <div className="family-dev">
                    <img src={family} alt="family" className='parental' />
                    <p className='famil'>Family</p>
                  </div>
                  <div className="heart">
                    <img src={heart} alt="heart-icon" className='hearto' />
                  </div>
                </div>
                <p className='family-text'>326 Vince St 261,Seattle,<br />WA 85141</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero2">

        </div>
      </section>
    </>
  )
}

export default Hero
