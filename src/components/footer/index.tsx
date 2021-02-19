import React from 'react'
import Logos from './Logos'
import OpenHours from './OpenHours'
import Contact from './Contact'
import './style.scss'

const Footer: React.FC = () => {
  return (
    <footer>
      <Contact />
      <OpenHours />
      <Logos />
    </footer>
  )
}

export default Footer
