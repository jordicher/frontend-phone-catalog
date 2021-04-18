import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import IndexNavbar from './IndexNavbar'

import { MemoryRouter, Route } from 'react-router-dom'


describe('<IndexNavbar/>', () => {
  test('renders content', () => {
    const component = render(
      <MemoryRouter>
        <IndexNavbar />
      </MemoryRouter>      
    )

    component.getByText('PHONES')
  })

  test('links are ok', () => {
    let testLocation;

    const component = render(
      <MemoryRouter>
        <IndexNavbar />
        <Route      
        render={({location }) => {       
          testLocation = location;          
        }}
      />
      </MemoryRouter>      
    )

    const linkCrud = component.getByTitle('Click me to go to the admin page')    
    fireEvent.click(linkCrud)
    expect(testLocation.pathname).toBe("/admin");
    
    const linkHome = component.getByTitle('Click me to go to the main page')    
    fireEvent.click(linkHome)
    expect(testLocation.pathname).toBe("/");
   
  })
})
