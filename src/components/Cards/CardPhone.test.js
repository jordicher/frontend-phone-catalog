import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'

import CardPhone from './CardPhone'

import { phone } from '../../helpers/test'

describe('<CardPhone/>', () => {
  test('renders content', () => {
    const component = render(<CardPhone phone={phone} />)

    component.getByText(phone.name)
    component.getByText(`${phone.price} €`)
  })

  test('clicking the div calls event handler once', () => {
    const mockHandler = jest.fn()

    const component = render(
      <CardPhone phone={phone} handleClickOpenMobile={mockHandler} />
    )

    const div = component.container.querySelector('div')
    fireEvent.click(div)

    expect(mockHandler).toHaveBeenCalledTimes(1)    
  })
})
