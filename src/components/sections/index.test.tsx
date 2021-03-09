import React from 'react'
import { render } from '@testing-library/react'
import Section from './index'

describe('<Section />', () => {
  test('renders hero section', () => {
    const { container } = render(<Section type="hero" />)
    const element = container.querySelector('.hero-section')
    expect(element).toBeInTheDocument()
  })

  test('renders menus section', () => {
    const { container } = render(<Section type="menus" />)
    const element = container.querySelector('.menu-section')
    expect(element).toBeInTheDocument()
  })

  test('renders about section', () => {
    const { container } = render(<Section type="about" />)
    const element = container.querySelector('.about-section')
    expect(element).toBeInTheDocument()
  })
})
