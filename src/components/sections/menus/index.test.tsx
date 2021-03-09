import React from 'react'
import { render, screen } from '@testing-library/react'
import Menus from './index'

describe('<Menus />', () => {
  test('has correct heading', () => {
    render(<Menus />)
    const element = screen.getByText('Menus')
    expect(element).toBeInTheDocument()
  })

  test('has a card', () => {
    const { container } = render(<Menus />)
    const element = container.querySelector('.card-container')
    expect(element).toBeInTheDocument()
  })

  test('has an image', () => {
    const { container } = render(<Menus />)
    const element = container.querySelector('.menu-image img')
    expect(element).toBeInTheDocument()
  })

  test('has buttons', () => {
    const { container } = render(<Menus />)
    const element = container.querySelector('.menu-navigation')
    expect(element).toBeInTheDocument()
  })

  test('has items', () => {
    const { container } = render(<Menus />)
    const element = container.querySelector('.menu-item__name')
    expect(element).toBeInTheDocument()
  })
})
