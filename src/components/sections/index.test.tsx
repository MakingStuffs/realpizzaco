import React from 'react'
import { render } from '@testing-library/react'
import Section from './index'

describe('<Section />', () => {
  test('renders hero section', () => {
    const { container } = render(<Section type="hero" />)
    const element = container.querySelector('.hero-section')
    expect(element).toBeInTheDocument()
  })
})
