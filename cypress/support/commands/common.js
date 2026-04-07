Cypress.Commands.add('verifyToastMessage', (text) => {
  cy.get('.toast').should('have.text', text)
})

Cypress.Commands.add('selectComboboxOption', (labelFor, option) => {
    cy.get(`label[for=${labelFor}]`).parent().as(`${labelFor}-field`)
    cy.get(`@${labelFor}-field`).click()
    cy.get(`@${labelFor}-field`).contains(option).click()
})