describe('Transfers', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('credentials').then((credentials) => {
      cy.get('#username').click().type(credentials.valid.username)
      cy.get('#senha').click().type(credentials.valid.password)
    })
    cy.contains('button', 'Entrar').click()
  })

  it('Should transfer when submitting valid data and values', () => {
    cy.get('label[for="conta-origem"]').parent().as('origin-account-field')
    cy.get('@origin-account-field').click()
    cy.get('@origin-account-field').contains('João da Silva').click()

    cy.get('label[for="conta-destino"]').parent().as('destination-account-field')
    cy.get('@destination-account-field').click()
    cy.get('@destination-account-field').contains('Maria Oliveira').click()

    cy.get('#valor').click().type('12')

    cy.contains('button', 'Transferir').click()

    cy.get('.toast').should('have.text', 'Transferência realizada!')
  })
})