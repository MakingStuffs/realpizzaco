import React from 'react'
import { render } from '@testing-library/react'
import HeroSection from './index'

describe('<HeroSection />', () => {
  let element: HTMLElement

  beforeEach(() => {
    render(<HeroSection />)
    const { container } = render(<HeroSection />)
    if (container) {
      element = container.querySelector('.hero-section') as HTMLElement
    }
  })

  test('renders on page', () => {
    expect(element).toBeInTheDocument()
  })

  test('renders the content', () => {
    const content = element.querySelector('.hero-content')
    expect(content).toBeInTheDocument()
  })
})
