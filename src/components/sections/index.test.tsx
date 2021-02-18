import React from 'react'
import { render, screen } from '@testing-library/react'
import Section from './index'

describe('<Section />', () => {
  test('renders hero section', () => {
    render(<Section type="hero" />)
    const element = screen.getByText('Hero')
    expect(element).toBeInTheDocument()
  })
})
