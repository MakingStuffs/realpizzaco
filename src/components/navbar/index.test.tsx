import React from 'react'
import { render } from '@testing-library/react'
import NavBar from './index'
import { HashRouter as Router } from 'react-router-dom'

describe('<NavBar />', () => {
  test('navbar is rendered', () => {
    const { container } = render(
      <Router>
        <NavBar />
      </Router>
    )
    const element = container.querySelector('.main-navigation')
    expect(element).toBeInTheDocument()
  })

  test('navbar has logo', () => {
    const { container } = render(
      <Router>
        <NavBar />
      </Router>
    )
    const element = container.querySelector('.main-navigation img.logo')
    expect(element).toBeInTheDocument()
  })

  test('navbar has links', () => {
    const { container } = render(
      <Router>
        <NavBar />
      </Router>
    )
    const element = container.querySelector('.main-navigation ul.links')
    expect(element).toBeInTheDocument()
  })
})
