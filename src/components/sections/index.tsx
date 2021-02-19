import React from 'react'
import HeroSection from './hero'
import MenuSection from './menus'
import AboutSection from './about'

const Section: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'about':
      return <AboutSection />
    case 'hero':
      return <HeroSection />
    case 'menus':
      return <MenuSection />
    default:
      return null
  }
}

export default Section
