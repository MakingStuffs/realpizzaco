import React from 'react'
import { render } from '@testing-library/react'
import Logos from './Logos'

describe('<Logos />', () => {
  test('logos are rendered', () => {
    const { container } = render(<Logos />)
    const element = container.querySelector('.logo-section')
    expect(element).toBeInTheDocument()
  })
})
