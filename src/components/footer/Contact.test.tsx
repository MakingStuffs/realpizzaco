import React from 'react'
import { render } from '@testing-library/react'
import Contact from './Contact'

describe('<Contact />', () => {
  test('map is rendered', () => {
    const { container } = render(<Contact />)
    const element = container.querySelector('.contact-section__map')
    expect(element).toBeInTheDocument()
  })
  test('details are rendered', () => {
    const { container } = render(<Contact />)
    const element = container.querySelector('.contact-section__content')
    expect(element).toBeInTheDocument()
  })
})
