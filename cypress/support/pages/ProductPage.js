import BasePage from './BasePage';

class ProductPage extends BasePage {
  constructor() {
    super();
    this.elements.searchProductField = '#search_product';
    this.elements.searchProductButton = '.fa.fa-search';
    this.elements.addtoCartButton = '.btn.btn-default.add-to-cart';
    this.elements.productStatusField = '.modal-title.w-100';
    this.elements.continueShopingButton = '[data-dismiss="modal"]';
    this.elements.productDetailsField = '[href="/product_details/1"]';
    this.elements.productQantityField = 'button.disabled';
    this.elements.checkoutButton = '.btn.btn-default.check_out';
  }

  getSearchProductField() {
    return cy.get(this.elements.searchProductField, { timeout: 20000 });
  }
  getSearchProductButton() {
    return cy.get(this.elements.searchProductButton);
  }

  getAddtocartButton() {
    return cy.get(this.elements.addtoCartButton);
  }

  getProductStatusField() {
    return cy.get(this.elements.productStatusField);
  }

  getContinueShoping() {
    return cy.get(this.elements.continueShopingButton);
  }

  getProductDetailsField() {
    return cy.get(this.elements.productDetailsField, { timeout: 10000 });
  }

  getProductQantityField() {
    return cy.get(this.elements.productQantityField);
  }

  getCheckoutButton() {
    return cy.get(this.elements.checkoutButton);
  }
}
export default new ProductPage();
