import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutSection from './index'

describe('<AboutSection />', () => {
  test('has correct heading', () => {
    render(<AboutSection />)
    const element = screen.getByText('About Us')
    expect(element).toBeInTheDocument()
  })

  test('has a card', () => {
    const { container } = render(<AboutSection />)
    const element = container.querySelector('.card-container')
    expect(element).toBeInTheDocument()
  })

  test('has an image', () => {
    const { container } = render(<AboutSection />)
    const element = container.querySelector('.about-image img')
    expect(element).toBeInTheDocument()
  })
})
