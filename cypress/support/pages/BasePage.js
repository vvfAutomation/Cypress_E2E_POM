export default class BasePage {
  constructor() {
    this.elements = {};
    this.elements.headerLoginButton = ".fa.fa-lock";
    this.elements.headerProductButton = 'a[href="/products"]';
    this.elements.headerCartButton = ".shop-menu";
  }

  getHeaderLoginButton() {
    return cy.get(this.elements.headerLoginButton);
  }

  getHeaderProductButton() {
    return cy.get(this.elements.headerProductButton);
  }

  getHeaderCartButton() {
    return cy.get(this.elements.headerCartButton);
  }
}
