import React from 'react'
import home1 from "../assets/homie1.jpeg"
import home2 from "../assets/homie2.jpeg"
import home3 from "../assets/homie3.jpeg"
import heart from "../assets/heart.png"
import bath from "../assets/bathtub.png"
import bed from "../assets/bed.png"
import fourarrows from "../assets/four-arrows.png"

const Listing = () => {
  return (
    <>
      <section className='listing'>
        <div className="listing1">
            <div className="think">
                <h1>Listing we think you'll Love</h1>
                <p>Welcome to our exquisite collection of prpoperties that defines luxury living at its finest.<br />We have created the best properties for you. </p>
            </div>
            <button className='shamatong'>View All Listing</button>
        </div>
        <div className="listing2">
            {/* SHATO 1 */}
            <div className="shato1">
                <img src={home1} alt="shato-img" className='shato-img' />
                <div className="dollar">
                    <h6>$95400</h6>
                    <div className="dill"><img src={heart} alt="heart-image" /></div>
                </div>
                <div><h1 className='maison'>Theole sur Mer maison a<br />Vendre</h1></div>
                <div className="row"></div>
                <div className="logo-container">
                    <div className="logo-container1">
                        <img src={bath} alt="bath-tub" className='bath' />
                        <p>6 Baths</p>
                    </div>
                    <div className="logo-container2">
                        <img src={bed} alt="rooms" className='bed' />
                        <p>7 rooms</p>
                    </div>
                    <div className="logo-container3">
                        <img src={fourarrows} alt="rooms" className='arrow' />
                        <p>1200 Sq</p>
                    </div>
                </div>
            </div>
            {/* SHATO 2 */}
            <div className="shato2">
                <img src={home2} alt="shato-img" className='shato-img' />
                <div className="dollar">
                    <h6>$64800</h6>
                    <div className="dill"><img src={heart} alt="heart-image" /></div>
                </div>
                <div><h1 className='maison'>Plonger dans le charm de la<br />Province</h1></div>
                <div className="row"></div>
                <div className="logo-container">
                    <div className="logo-container1">
                        <img src={bath} alt="bath-tub" className='bath' />
                        <p>6 Baths</p>
                    </div>
                    <div className="logo-container2">
                        <img src={bed} alt="rooms" className='bed' />
                        <p>7 rooms</p>
                    </div>
                    <div className="logo-container3">
                        <img src={fourarrows} alt="rooms" className='arrow' />
                        <p>1200 Sq</p>
                    </div>
                </div>
            </div>
            {/* SHATO 3 */}
            <div className="shato3">
                <img src={home3} alt="shato-img" className='shato-img' />
                <div className="dollar">
                    <h6>$85200</h6>
                    <div className="dill"><img src={heart} alt="heart-image" /></div>
                </div>
                <div><h1 className='maison'>Theole sur Mer maison a<br />Vendre</h1></div>
                <div className="row"></div>
                <div className="logo-container">
                    <div className="logo-container1">
                        <img src={bath} alt="bath-tub" className='bath' />
                        <p>6 Baths</p>
                    </div>
                    <div className="logo-container2">
                        <img src={bed} alt="rooms" className='bed' />
                        <p>7 rooms</p>
                    </div>
                    <div className="logo-container3">
                        <img src={fourarrows} alt="rooms" className='arrow' />
                        <p>1200 Sq</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Listing
