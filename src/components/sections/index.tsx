import React from 'react'

const Section: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'about':
      return <p id="about">About</p>
    case 'contact':
      return <p id="contact">Contact</p>
    case 'hero':
      return <p>Hero</p>
    case 'menus':
      return <p id="menus">Menus</p>
    default:
      return null
  }
}

export default Section
