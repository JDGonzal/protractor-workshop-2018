import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkout: ElementFinder;

  constructor () {
    this.checkout = $('#center_column > form > p > button > span');
  }

  public async goToCheckout(): Promise<void> {
    this.checkout.click();
  }
}
