import React from 'react'
import { render } from '@testing-library/react'
import OpenHours from './OpenHours'

describe('<OpenHours />', () => {
  test('open hours are rendered', () => {
    const { container } = render(<OpenHours />)
    const element = container.querySelector('.open-hours-section')
    expect(element).toBeInTheDocument()
  })
})
