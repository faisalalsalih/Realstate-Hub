import React from 'react'
import asterisk from "../assets/asterisk.png"
import screenover from "../assets/grid.svg"
import arrow from "../assets/arrow.png"

const Fun = () => {
  return (
    <>
      <section id='fun'>
        <div className="balogai">
            <img src={asterisk} alt="grido" className='grido' />
            <img src={screenover} alt="screen-over"  className='screenover'/>
            <div className="fullka">
                <div className="burga">
                    <h1>Get A Fit Lifestyle<br />Easily And Fun Here.</h1>
                </div>
                <div className="burgi">
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Fun
