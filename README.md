# Banco Web Tests - Cypress

## 📋 Project Objective

This project demonstrates automated testing with Cypress for [banco-api](https://github.com/victorFeracin/banco-api). It showcases best practices for end-to-end testing of a banking web application using Cypress, including login functionality and money transfers.

## 🏗️ Project Components

### Dependencies
- **Cypress**: Testing framework for web applications
- **cypress-mochawesome-reporter**: HTML report generation for test results

### Project Structure
```
cypress/
├── e2e/                      # Test specifications
│   ├── login.cy.js           # Login functionality tests
│   └── transferencias.cy.js  # Transfer functionality tests
├── fixtures/                 # Test data
│   └── credentials.json      # Login credentials for testing
├── reports/                  # Generated test reports
│   └── html/                 # HTML reports with screenshots
├── support/                  # Custom commands and configurations
│   ├── commands.js           # Main commands file
│   ├── e2e.js                # E2E test configuration
│   └── commands/             # Custom command modules
│       ├── common.js         # Shared utility commands
│       ├── login.js          # Login-specific commands
│       └── transferencias.js # Transfer-specific commands
└── cypress.config.js         # General test environment configurations
```

### External Dependencies
This project requires two external services to be running:
- **API**: [banco-api](https://github.com/victorFeracin/banco-api) - Backend API server (http://localhost:3000)
- **Web Application**: [banco-web](https://github.com/juliodelimas/banco-web) - Frontend web application (runs on http://localhost:4000)

## 🚀 Installation and Execution Guide

### Prerequisites
- Node.js
- npm or yarn
- Git
- Clone and execute the [API](https://github.com/victorFeracin/banco-api) and the [web application](https://github.com/juliodelimas/banco-web)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/victorFeracin/banco-web-tests-cypress.git
   cd banco-web-tests-cypress
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the required services**
   - Start the API server (banco-api) on its default port
   - Start the web application (banco-web) on its default port

4. **Run the tests**

   **Headless mode (CI/CD):**
   ```bash
   npm run test
   ```

   **Headed mode (visual debugging):**
   ```bash
   npm run cy:headed
   ```

   **Interactive mode (Cypress Test Runner):**
   ```bash
   npm run cy:open
   ```

## 📊 Test Reports

Test results are automatically generated using the cypress-mochawesome-reporter. After running tests, view the HTML report at:
```
cypress/reports/html/index.html
```

The report includes:
- Test execution summary
- Detailed test results
- Screenshots for failed tests
- Execution timeline

## 🧪 Tests

### Login Tests (`login.cy.js`)
Tests the authentication functionality of the banking application.

### Transfer Tests (`transferencias.cy.js`)
Tests the money transfer functionality between accounts.

## 🔧 Custom Commands

### Common Commands (`commands/common.js`)

#### `cy.verifyToastMessage(text)`
Verifies that a toast notification appears with the specified text.
```javascript
cy.verifyToastMessage('Transferência realizada!')
```

#### `cy.selectComboboxOption(labelFor, option)`
Selects an option from a combobox by clicking on the label and then the option.
```javascript
cy.selectComboboxOption('conta-origem', 'João da Silva')
```

### Login Commands (`commands/login.js`)

#### `cy.loginWithValidCredentials()`
Performs login using valid credentials from the fixtures file.
```javascript
cy.loginWithValidCredentials()
```

#### `cy.loginWithInvalidCredentials()`
Performs login using invalid credentials from the fixtures file.
```javascript
cy.loginWithInvalidCredentials()
```

### Transfer Commands (`commands/transferencias.js`)

#### `cy.transferValue(originAccount, destinationAccount, value)`
Performs a money transfer between two accounts.
```javascript
cy.transferValue('João da Silva', 'Maria Oliveira', '500.00')
```

## 📝 Test Data

Test credentials are stored in `cypress/fixtures/credentials.json`:
```json
{
  "valid": {
    "username": "julio.lima",
    "password": "123456"
  },
  "invalid": {
    "username": "julio.lima",
    "password": "654321"
  }
}
```