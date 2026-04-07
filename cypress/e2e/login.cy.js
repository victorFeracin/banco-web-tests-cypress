describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('/')
  })

  it('Login with valid data should allow access to the system', () => {
    //Act
    cy.loginWithValidCredentials()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  }),

  it('Login with invalid data should display an error message', () => {
    //Act
    cy.loginWithInvalidCredentials()

    //Assert
    cy.verifyToastMessage('Erro no login. Tente novamente.')
  })
})