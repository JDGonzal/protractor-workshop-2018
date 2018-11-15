import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptAndContinue: ElementFinder;
  private checkoutButton: ElementFinder;

  constructor () {
    this.acceptAndContinue = $('#cgv');
    this.checkoutButton = $('#form > p > button > span');
  }

  public async goToAcceptAndContinue(): Promise<void> {
    await this.acceptAndContinue.click();
    await this.checkoutButton.click();
  }
}
