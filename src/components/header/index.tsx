import React from 'react'
import Logo from '../../assets/images/logo-full.png'
import './style.scss'

const Header: React.FC = () => {
  return (
    <header>
      <img src={Logo} alt="Real Pizza Co logo" />
    </header>
  )
}

export default Header
