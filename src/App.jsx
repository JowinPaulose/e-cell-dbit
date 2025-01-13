import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Core from './Components/Core'
import Gallery from './Components/Gallery'
import Events from './Components/Events'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Events/>
      <Core/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
