import 'cypress-file-upload';

Cypress.Commands.add('createPhone', (content) => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:4002/phones',
      body: content
    })
    cy.visit('http://localhost:3000/admin')
  })

Cypress.Commands.add('addValueInput', (content) => {
    cy.get('[name=name]').type(content.name)
    cy.get('[name=manufacturer]').type(content.manufacturer)
    cy.get('textarea').type(content.description)
    cy.get('[name=color]').type(content.color)
    cy.get('[name=price]').type(content.price)
    cy.get('[name=screen]').type(content.screen)
    cy.get('[name=processor]').type(content.processor)
    cy.get('[name=ram]').type(content.ram)
  })