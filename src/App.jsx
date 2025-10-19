import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import About from './components/About'
import Listing from './components/Listing'
import Clients from "./components/Clients"
import Blogs from './components/Blogs'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Listing />
      <Clients />
      <Blogs />
    </>
  )
}

export default App
