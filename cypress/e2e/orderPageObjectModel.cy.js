///<reference types = "cypress"/>

import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import RegistrationPage from '../support/pages/RegistrationPage';
import AccountPage from '../support/pages/AccountPage';
import ProductPage from '../support/pages/ProductPage';
import CheckoutPage from '../support/pages/CheckoutPage';

user.email = faker.internet.email({ provider: 'gmail.com' });

describe('template spec', () => {
  it('passes', () => {
    HomePage.visit();

    cy.log('Registration and login new user');

    HomePage.getHeaderLoginButton().click();
    LoginPage.getRegisterLoginField().type(user.name);
    LoginPage.getRegisterPasswordField().type(user.email);
    LoginPage.getRegisterAccountButton().click();
    RegistrationPage.fillRegistrationFields(user);
    RegistrationPage.getCreateAccountButton().click();
    AccountPage.getAccountApproveText().should('contain', 'Account Created!');

    cy.log('Find product and add to cart');

    ProductPage.getHeaderProductButton().click();
    ProductPage.getSearchProductField().type('Blue Top');
    ProductPage.getSearchProductButton().click();
    ProductPage.getAddtocartButton().eq(0).click();
    ProductPage.getProductStatusField().should('contain', 'Added!');
    ProductPage.getContinueShoping().click({ force: true });
    ProductPage.getHeaderCartButton().contains('Cart').click({ force: true });
    ProductPage.getProductDetailsField().should('contain', 'Blue Top');
    ProductPage.getProductQantityField().should('contain', '1');
    ProductPage.getCheckoutButton().click();

    cy.log('Purchase product');

    CheckoutPage.getDeliveryAddress()
      .should('contain', user.first_name)
      .and('contain', user.last_name)
      .and('contain', user.address)
      .and('contain', user.city)
      .and('contain', user.state)
      .and('contain', 'United States')
      .and('contain', user.zipcode)
      .and('contain', user.mobilephone);

    CheckoutPage.getPlaceOrderButton().contains('Place Order').click();
    CheckoutPage.fillCardFields();
    CheckoutPage.getSubmitButton().click();

    AccountPage.getOrderStatusField().should('contain', 'Order Placed!').and('contain', 'Congratulations! Your order has been confirmed!');
  });
});
