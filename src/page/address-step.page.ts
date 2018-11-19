import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkout: ElementFinder;

  constructor () {
    this.checkout = $('[name="processAddress"]');
  }

  public async goToCheckout(): Promise<void> {
    this.checkout.click();
  }
}
