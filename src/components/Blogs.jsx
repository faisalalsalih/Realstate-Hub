import React from 'react'
import photo1 from "../assets/house1g.jpeg"
import photo2 from "../assets/house2g.jpeg"
import photo3 from "../assets/house3g.jpeg"
import tim from "../assets/Tim Cook.jpeg"
import Zach from "../assets/Zach.jpeg"
import jack from "../assets/jack.jpeg"

const Blogs = () => {
  return (
    <>
      <section id='blogs'>

        <div className="blogs">
            <div className="blogs1">
                <div className="blogs1a">
                    <h6>Our Blogs</h6>
                    <h1>Browse Our Blogs</h1>
                    <p>Welcome to Our real estate blogs, where we delve into a world of insights,<br />tips, and inspiration for both buyers and sellers</p>
                </div>
                <button className='gato'>View all posts</button>
            </div>
            <div className="blogs2">
                {/* po1 */}
                <div className="po1">
                    <div className="photo-div">
                        <img src={photo1} alt="photo-div1" />
                    </div>
                    <h6>Plead a Style</h6>
                    <h3>Your Guide to buying your first Home</h3>
                    <div className="hatta">
                        <div className="batta"><img src={tim} alt="tim-cook" /></div>
                        <div className="satta">
                            <h3>Tim Cook</h3>
                            <h6>23-july-2023</h6>
                        </div>
                    </div>
                </div>
                {/* po2 */}
                <div className="po2">
                    <div className="photo-div">
                        <img src={photo2} alt="photo-div1" />
                    </div>
                    <h6>Plead a Style</h6>
                    <h3>Beauty Trends: whats Hot and whats not</h3>
                    <div className="hatta">
                        <div className="batta"><img src={jack} alt="tim-cook" /></div>
                        <div className="satta">
                            <h3>Jack</h3>
                            <h6>23-April-2024</h6>
                        </div>
                    </div>
                </div>
                {/* po3 */}
                <div className="po3">
                    <div className="photo-div">
                        <img src={photo3} alt="photo-div1" />
                    </div>
                    <h6>Plead a Style</h6>
                    <h3>The top 11 most magnificent Houses around the world</h3>
                    <div className="hatta">
                        <div className="batta"><img src={Zach} alt="tim-cook" /></div>
                        <div className="satta">
                            <h3>Zach</h3>
                            <h6>23-july-2025</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
