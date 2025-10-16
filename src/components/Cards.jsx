import React from 'react'
import house from "../assets/house.png"
import handshake from "../assets/handshake.png"
import Home from '../assets/home.png'

const Cards = () => {
  return (
    <>
      <section id='cards'>
        <div className="cards1">
            <h6>Our Features</h6>
            <h2>Our Special Feature</h2>
            <p>At we pride on offering a comprehensive <br />suite of top-notch real estate services.</p>
        </div>

        <div className="cards2">
            <div className="card1">
                <div className="logitech"><img src={house} alt="card-logo1" /></div>
                <h2 className='buy'>Buy a Home</h2>
                <p className='rento'>Renting a home provides flexibility and <br />convenience, and we are here to assist<br />you in finding rental property.</p>
            </div>
            <div className="card2">
                <div className="logitech"><img src={Home} alt="card-logo1" /></div>
                <h2 className='buy'>Rent a Home</h2>
                <p className='rento'>Renting a home provides flexibility and <br />convenience, and we are here to assist<br />you in finding rental property.</p>
            </div>
            <div className="card3">
                <div className="logitech"><img src={handshake} alt="card-logo1" /></div>
                <h2 className='buy'>Sell a House</h2>
                <p className='rento'>Renting a home provides flexibility and <br />convenience, and we are here to assist<br />you in finding rental property.</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Cards
