import React from 'react'
import UberEats from '../../assets/images/uber-eats-logo.png'
import Deliveroo from '../../assets/images/deliveroo-logo.png'
import RealPizzaCo from '../../assets/images/logo-full.png'

const Logos: React.FC = () => {
  return (
    <div className="logo-section">
      <img src={RealPizzaCo} width="200" />
      <div className="break"></div>
      <a
        title="Find us on Uber Eats"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.ubereats.com/gb/london/food-delivery/real-pizza-co/7xk_YxIeTFy7f-3W9BqFvA"
      >
        <img src={UberEats} width="75" height="75" />
      </a>
      <img src={Deliveroo} width="75" height="75" />
    </div>
  )
}

export default Logos
