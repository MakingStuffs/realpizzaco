import React from 'react'
import UberEats from '../../assets/images/uber-eats-logo.png'
import Deliveroo from '../../assets/images/deliveroo-logo.png'
import RealPizzaCo from '../../assets/images/logo-full.png'

const Logos: React.FC = () => {
  return (
    <div className="logo-section">
      <img src={RealPizzaCo} width="200" />
      <div className="break"></div>
      <img src={UberEats} width="75" height="75" />
      <img src={Deliveroo} width="75" height="75" />
    </div>
  )
}

export default Logos
