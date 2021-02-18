import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './style.scss'
import logo from '../../assets/images/logo-full.png'

const NavBar: React.FC = () => {
  return (
    <nav className="main-navigation">
      <img className="logo" src={logo} />
      <ul className="links">
        <li>
          <HashLink to="#menus" title="">
            Menu
          </HashLink>
        </li>
        <li>
          <HashLink to="#about" title="">
            About
          </HashLink>
        </li>
        <li>
          <HashLink to="#contact" title="">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
