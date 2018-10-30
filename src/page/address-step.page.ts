import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private tCheckout: ElementFinder;

  constructor () {
    this.tCheckout = $('#center_column > form > p > button > span');
  }

  public async goToCheckout(): Promise<void> {
    await this.tCheckout.click();
  }
}
