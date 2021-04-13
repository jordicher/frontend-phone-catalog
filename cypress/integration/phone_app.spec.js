const validPhone = {
  name: 'Apple iPhone 11 ',
  manufacturer: 'Apple',
  description:
    'Finding the best price for the Apple iPhone 11 is no easy task. Here you will find where to buy the Apple iPhone 11 at the best price. Prices are continuously tracked in over 140 stores so that you can find a reputable dealer with the best price',
  color: 'Black',
  price: 569,
  screen: '6.1 inch LCD IPS',
  processor: 'Apple A13 Bionic',
  ram: 4
}

const notValidPhone = {
  name: '1',
  manufacturer:
    'Finding the best price for the Apple iPhone 11 is no easy task. Here you will find where to buy the Apple iPhone 11 at the best price. Prices are continuously tracked in over 140 stores so that you can find a reputable dealer with the best price',
  description:
    'Finding the best price for the Apple iPhone 11 is no easy task. Here you will find where to buy the Apple iPhone 11 at the best price. Prices are continuously tracked in over 140 stores so that you can find a reputable dealer with the best price. Finding the best price for the Apple iPhone 11 is no easy task. Here you will find where to buy the Apple iPhone 11 at the best price. Finding the best price for the Apple iPhone 11 is no easy task. ',
  color: 'p',
  price: 'a',
  screen: '6.',
  processor:
    'Finding the best price for the Apple iPhone 11 is no easy task. Here you will find where to buy the Apple iPhone 11 at the best price. Prices are continuously tracked in over 140 stores so that you can find a reputable dealer with the best price',
  ram: 'a'
}

describe('Phone App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.request('POST', 'http://localhost:4002/phone/testing/reset')
  })

  it('frontpage can be opened', () => {
    cy.contains('PHONES')
  })
})

describe('Create phone', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/admin')
    cy.request('POST', 'http://localhost:4002/phone/testing/reset')
  })

  it('valid phone can be created with not a img', () => {
    cy.addValueInput(validPhone)
    cy.get('form').submit()
    cy.contains(validPhone.name)
    /* cy.get('#uploaded-files').contains('evening.png') */
  })

  it('valid phone can be created with a img', () => {
    const filepath = 'images/iphone_se.png'
    cy.addValueInput(validPhone)
    cy.get('[name="checkFile"]').click()
    cy.get('input[type="file"]').attachFile(filepath)
    cy.get('form').submit()
    cy.contains(validPhone.name)  
  })

  it('not a valid can not be created', () => {
    cy.addValueInput(notValidPhone)
    cy.get('form').submit()

    cy.contains('Min length is 3')
    cy.contains('Required')
    cy.contains('Min length is 2')
    cy.contains('Max length is 50')
    cy.contains('Max length is 60')
    cy.contains('Max length is 400')
  })
})

describe('Read Phone', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:4002/phone/testing/reset')
    cy.createPhone(validPhone)
    cy.visit('http://localhost:3000/')
  })

  it('The phone is in the catalog', () => {
    cy.contains(validPhone.name)
  })

  it('The phone can be opened', () => {
    cy.contains(validPhone.name).click()
    cy.contains(validPhone.description)
  })
})

describe('Upload Phone', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:4002/phone/testing/reset')
    cy.visit('http://localhost:3000/admin')
    cy.createPhone(validPhone)
  })

  it('Click the edit button, and the values ​​are in the form', () => {
    cy.contains('Edit').click()
    cy.get('[name=name]').should('have.value', validPhone.name)
  })

  it('Valid phone can be updated', () => {
    cy.contains('Edit').click()
    cy.get('[name=name]').type('test')
    cy.get('form').submit()
    cy.contains(validPhone.name + 'test')
  })

  it('not a valid phone can not be updated', () => {
    cy.contains('Edit').click()
    cy.get('[name=name]').clear().type(notValidPhone.name)
    cy.get('form').submit()

    cy.contains('Min length is 3')
  })
})

describe('Delete a phone', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:4002/phone/testing/reset')
    cy.createPhone(validPhone)
    cy.visit('http://localhost:3000/admin')
  })

  it('Phone can be deleted', () => {
    cy.contains(validPhone.name)
    cy.contains('Delete').click()
    cy.contains('There are no records to display')
  })

})
