describe('orange hrm tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    sectionTitleTopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredencialAlert: ".oxd-alert"
  }

  it('login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField) .type('Admin')
    cy.get(selectorsList.passwordField) .type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopbar).contains('Dashboard')
  })
  it('login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField) .type('admin')
    cy.get(selectorsList.passwordField) .type('admin1')
    cy.get(selectorsList.loginButton).click() 
    cy.get(selectorsList.wrongCredencialAlert)
  })
  
})