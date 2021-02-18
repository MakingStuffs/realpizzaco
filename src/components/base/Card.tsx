import React from 'react'
import './card.style.scss'

const Card: React.FC = ({ children }) => {
  return <div className="card-container">{children}</div>
}

export default Card
