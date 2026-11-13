import BasePage from './BasePage';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.elements.registerLoginField = '[data-qa="signup-name"]';
    this.elements.registerPasswordField = '[data-qa="signup-email"]';
    this.elements.registerAccountButton = '[data-qa="signup-button"]';
  }

  getRegisterLoginField() {
    return cy.get(this.elements.registerLoginField);
  }

  getRegisterPasswordField() {
    return cy.get(this.elements.registerPasswordField);
  }

  getRegisterAccountButton() {
    return cy.get(this.elements.registerAccountButton);
  }
}
export default new LoginPage();
