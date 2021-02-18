import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from './Title'

describe('<Title />', () => {
  test('renders on screen', () => {
    render(<Title content="Test Title" />)
    const element = screen.getByText('Test Title')
    expect(element).toBeInTheDocument()
  })
})
