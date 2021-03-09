import React from 'react'
import Title from '../base/Title'

const OpenHours: React.FC = () => {
  return (
    <div className="open-hours-section">
      <Title content="Open Hours" />
      <div className="open-hours__container">
        <p>Monday - Sunday</p>
        <p>12pm - 9pm</p>
      </div>
    </div>
  )
}

export default OpenHours
