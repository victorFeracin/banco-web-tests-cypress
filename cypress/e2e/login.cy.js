describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('/')
  })

  it('Login with valid data should allow access to the system', () => {
    //Act
    cy.fixture('credentials').then((credentials) => {
      cy.get('#username').click().type(credentials.valid.username)
      cy.get('#senha').click().type(credentials.valid.password)
    })
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  }),

  it('Login with invalid data should display an error message', () => {
    //Act
    cy.fixture('credentials').then((credentials) => {
      cy.get('#username').click().type(credentials.invalid.username)
      cy.get('#senha').click().type(credentials.invalid.password)
    })
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})