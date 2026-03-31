describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('http://localhost:4000')
  })

  it('Login with valid data should allow access to the system', () => {
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  }),

  it('Login with invalid data should display an error message', () => {
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('errortest')
    cy.contains('button', 'Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})