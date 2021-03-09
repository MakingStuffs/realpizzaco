import React from 'react'
import Card from '../../base/Card'
import Title from '../../base/Title'
import image from '../../../assets/images/chicken-tikka-pizza.jpg'
import './style.scss'

const AboutSection: React.FC = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-image">
        <img src={image} alt="Decorational image of pizza" />
      </div>
      <div className="about-section__content">
        <Title content="About Us" />
        <Card>
          <p>
            Launched in Autumn 2020, Real Pizza Company is the newest addition
            to the MLG family.
          </p>
          <p>
            During tricky times, we have made it our aim to be able to provide
            our hardworking local businesses, within North West London, with our
            freshly prepared breakfasts & Lunches.
          </p>
          <p>
            We have since been excited to announce that our Brunches & handmade
            Pizza are now available for Delivery via UberEATS
          </p>
        </Card>
      </div>
    </div>
  )
}

export default AboutSection
