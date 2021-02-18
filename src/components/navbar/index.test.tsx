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
    const element = container.querySelector('nav')
    expect(element).toBeInTheDocument()
  })
})
