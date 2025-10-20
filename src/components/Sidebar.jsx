import React from 'react'
import cross from "../assets/cross.png"

const Sidebar = ({ onClose }) => {
  return (
    <>
      <aside id='sidebar'>
        <div className="sidebar1">
            <h1>R.Estate</h1>
            <img src={cross} alt="cross" className='cross-img' onClick={onClose} />
        </div>
        <div className="sidebar2">
            <div className="side1"><h1>Home</h1></div>
            <div className="side1"><h1>About</h1></div>
            <div className="side1"><h1>Services</h1></div>
            <div className="side1"><h1>Features</h1></div>
            <div className="side1"><h1>Blogs</h1></div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
