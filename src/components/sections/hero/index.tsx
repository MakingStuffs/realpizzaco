import React from 'react'
import './style.scss'
import image from '../../../assets/images/pizza-image.jpg'

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-content">
        <p>Our pizza is the best and is delivered to your home</p>
      </div>
    </div>
  )
}

export default HeroSection
