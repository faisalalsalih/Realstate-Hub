import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import About from './components/About'
import Listing from './components/Listing'
import Clients from "./components/Clients"
import Blogs from './components/Blogs'
import Fun from './components/Fun'
import Footer from './components/Footer'


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
      <Fun />
      <Footer />
    </>
  )
}

export default App
