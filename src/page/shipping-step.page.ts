import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptAndContinue: ElementFinder;

  constructor () {
    this.acceptAndContinue = $('#cgv');
  }

  public async goToAcceptAndContinue(): Promise<void> {
    this.acceptAndContinue.click();
  }
}
