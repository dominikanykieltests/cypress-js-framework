export default class BasePage {
  constructor() {
    this.baseUrl = Cypress.env('baseUrl');
    this.url = ''
  }

  goTo(path = '/') {
    cy.visit(`${this.baseUrl}${path}`)
    cy.url().should('include', this.url)
  }
}
