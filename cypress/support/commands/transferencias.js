Cypress.Commands.add('transferValue', (originAccount, destinationAccount, value) => {
    cy.selectComboboxOption('conta-origem', originAccount)
    cy.selectComboboxOption('conta-destino', destinationAccount)
    cy.get('#valor').click().type(value)
    cy.contains('button', 'Transferir').click()
})