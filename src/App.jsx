import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import About from './components/About'
import Listing from './components/Listing'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Listing />
    </>
  )
}

export default App
