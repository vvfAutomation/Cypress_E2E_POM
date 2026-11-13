import BasePage from './BasePage';

class CheckoutPage extends BasePage {
  constructor() {
    super();
    this.elements.deliveryAddressField = '.address.item.box';
    this.elements.placeOrderButton = '.btn.btn-default.check_out';
    this.elements.cardNameField = '[name="name_on_card"]';
    this.elements.cardNumberField = '[name="card_number"]';
    this.elements.cardCvcField = '[name="cvc"]';
    this.elements.cardExpiryMonthField = '[name="expiry_month"]';
    this.elements.cardExpiryYearField = '[name="expiry_year"]';
    this.elements.submitButton = '#submit';
  }

  getDeliveryAddress() {
    return cy.get(this.elements.deliveryAddressField, { timeout: 10000 });
  }

  getPlaceOrderButton() {
    return cy.get(this.elements.placeOrderButton);
  }

  getCardNameField() {
    return cy.get(this.elements.cardNameField);
  }

  getCardNumberField() {
    return cy.get(this.elements.cardNumberField);
  }

  getCardCvcField() {
    return cy.get(this.elements.cardCvcField);
  }

  getCardExpMonthField() {
    return cy.get(this.elements.cardExpiryMonthField);
  }

  getCardExpYearField() {
    return cy.get(this.elements.cardExpiryYearField);
  }

  getSubmitButton() {
    return cy.get(this.elements.submitButton);
  }

  fillCardFields() {
    this.getCardNameField().type('vlad');
    this.getCardNumberField().type('4111111111111111');
    this.getCardCvcField().type('555');
    this.getCardExpMonthField().type('12');
    this.getCardExpYearField().type('2030');
  }
}
export default new CheckoutPage();
