import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'

import Footer from './Footer'

describe('<Footer/>', () => {
    test('renders content', () => {
        const component = render(<Footer/>)

        component.getByText('Jordi Armengol Cherto')
    })
})

