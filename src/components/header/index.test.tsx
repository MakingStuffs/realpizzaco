import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './index'

describe('<Header />', () => {
  test('header element is rendered', () => {
    render(<Header />)
    const element = screen.getByAltText('Real Pizza Co logo')
    expect(element).toBeInTheDocument()
  })
})
