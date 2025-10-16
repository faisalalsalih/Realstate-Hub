import React from 'react'
import grid from "../assets/grid.svg"


const About = () => {
  return (
    <>
      <section id='about'>
        <div className="about-container">
            <img src={grid} alt="grid-svg" className='grid-svg' />
        </div>
      </section>
    </>
  )
}

export default About
