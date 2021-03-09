import React, { useEffect } from 'react'
import Section from './components/sections'
import NavBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'

import { BrowserRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
  // Set the view height for the CSS var
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    )
  }, [])

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Header />
        <Section type="hero" />
        <Section type="menus" />
        <Section type="about" />
        <Section type="contact" />
        <Footer />
      </Router>
    </div>
  )
}

export default App
