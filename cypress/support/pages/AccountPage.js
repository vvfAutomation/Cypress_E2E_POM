import BasePage from './BasePage';

class AccountPage extends BasePage {
  constructor() {
    super();
    this.elements.accountApproveText = '[data-qa="account-created"]';
    this.elements.orderStatusField = '#form';
  }

  getAccountApproveText() {
    return cy.get(this.elements.accountApproveText);
  }

  getOrderStatusField() {
    return cy.get(this.elements.orderStatusField);
  }
}
export default new AccountPage();
