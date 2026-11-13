///<reference types = "cypress"/>
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';

user.email = faker.internet.email({ provider: 'gmail.com' });

describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.log('Registration and login new user');

    cy.get('.fa.fa-lock').click();
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();

    cy.get('#id_gender1').check();
    cy.get('#name').should('have.value', user.name);
    cy.get('#email').should('have.value', user.email);
    cy.get('#password').type(user.password);
    cy.get('#first_name').type(user.first_name);
    cy.get('#last_name').type(user.last_name);
    cy.get('#address1').type(user.address);
    cy.get('#country').select('United States');
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zipcode);
    cy.get('#mobile_number').type(user.mobilephone);
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!');

    cy.log('Find product and add to cart');

    cy.get('a[href="/products"]').click();
    cy.get('#search_product', { timeout: 10000 }).type('Blue Top');
    cy.get('.fa.fa-search').click();
    cy.get('.btn.btn-default.add-to-cart').eq(0).click();
    cy.get('.modal-title.w-100').should('contain', 'Added!');

    cy.get('[data-dismiss="modal"]').click({ force: true });
    cy.get('.shop-menu').contains('Cart').click({ force: true });
    cy.get('[href="/product_details/1"]', { timeout: 10000 }).should('contain', 'Blue Top');
    cy.get('button.disabled').should('contain', '1');
    cy.get('.btn.btn-default.check_out').click();

    cy.log('Purchase product');

    cy.get('.address.item.box', { timeout: 10000 })
      .should('contain', user.first_name)
      .and('contain', user.last_name)
      .and('contain', user.address)
      .and('contain', user.city)
      .and('contain', user.state)
      .and('contain', 'United States')
      .and('contain', user.zipcode)
      .and('contain', user.mobilephone);
    cy.get('.btn.btn-default.check_out').contains('Place Order').click();

    cy.get('[name="name_on_card"]').type('vlad');
    cy.get('[name="card_number"]').type('4111111111111111');
    cy.get('[name="cvc"]').type('555');
    cy.get('[name="expiry_month"]').type('12');
    cy.get('[name="expiry_year"]').type('2030');

    cy.get('#submit').click();

    cy.get('[data-qa="order-placed"]').should('contain', 'Order Placed!');
    cy.get('p[style]').should('contain', 'Congratulations! Your order has been confirmed!');
  });
});
