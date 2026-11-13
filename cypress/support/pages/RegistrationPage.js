import BasePage from "./BasePage";

class RegistrationPage extends BasePage {
  constructor() {
    super();
    this.elements.sexCheckBox = "#id_gender1";
    this.elements.nameField = "#name";
    this.elements.emailField = "#email";
    this.elements.passwordField = "#password";
    this.elements.firstNameField = "#first_name";
    this.elements.lastNameField = "#last_name";
    this.elements.address1Field = "#address1";
    this.elements.countryField = "#country";
    this.elements.stateField = "#state";   
    this.elements.cityField = "#city";
    this.elements.zipcodeField = "#zipcode";
    this.elements.mobileNumberField = "#mobile_number";
    this.elements.createAccountButton = '[data-qa="create-account"]'
  }

  getSexCheckBox() {
    return cy.get(this.elements.sexCheckBox, { timeout: 10000 });
  }

  getNameField() {
    return cy.get(this.elements.nameField);
  }

  getEmailField() {
    return cy.get(this.elements.emailField);
  }

  getPasswordField() {
    return cy.get(this.elements.passwordField);
  }
  getFirstNameField() {
    return cy.get(this.elements.firstNameField);
  }
  getLastNameField() {
    return cy.get(this.elements.lastNameField);
  }
  getAddress1Field() {
    return cy.get(this.elements.address1Field);
  }
  getCountryField() {
    return cy.get(this.elements.countryField);
  }
  getStateField() {
    return cy.get(this.elements.stateField);
  }
  getCityField() {
    return cy.get(this.elements.cityField);
  }
  getZipcodeField() {
    return cy.get(this.elements.zipcodeField);
  }
  getMobileNumberField() {
    return cy.get(this.elements.mobileNumberField);
  }
  getCreateAccountButton() {
    return cy.get(this.elements.createAccountButton);
  }

 fillRegistrationFields(user){

  this.getSexCheckBox().check();
  this.getNameField().should("have.value", user.name);
  this.getEmailField().should("have.value", user.email);
  this.getPasswordField().type(user.password);
  this.getFirstNameField().type(user.first_name);
  this.getLastNameField().type(user.last_name);
  this.getAddress1Field().type(user.address);
  this.getCountryField().select("United States");
  this.getStateField().type(user.state);
  this.getCityField().type(user.city);
  this.getZipcodeField().type(user.zipcode);
  this.getMobileNumberField().type(user.mobilephone);  
}
}
export default new RegistrationPage();
