describe('Transfers', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.loginWithValidCredentials()
  })

  it('Should transfer when submitting valid data and values', () => {
    //Act
    cy.transferValue('João da Silva', 'Maria Oliveira', '12')

    //Assert
    cy.verifyToastMessage('Transferência realizada!')
  }),

  it('Should show an error message when trying to transfer values above 5000 without token', () => {
    //Act
    cy.transferValue('João da Silva', 'Maria Oliveira', '5000.01')

    //Assert
    cy.verifyToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
  })
})