import React from 'react'
import { render } from '@testing-library/react'
import Footer from './index'

describe('<Footer />', () => {
  test('footer renders on page', () => {
    const { container } = render(<Footer />)
    const element = container.querySelector('footer')
    expect(element).toBeInTheDocument()
  })
})
