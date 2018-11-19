import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptAndContinue: ElementFinder;
  private checkoutButton: ElementFinder;

  constructor () {
    this.acceptAndContinue = $('#cgv');
    this.checkoutButton = $('[name="processCarrier"]');
  }

  public async goToAcceptAndContinue(): Promise<void> {
    await this.acceptAndContinue.click();
    await this.checkoutButton.click();
  }
}
