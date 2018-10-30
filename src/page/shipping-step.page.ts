import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private tAcceptAndContinue: ElementFinder;

  constructor () {
    this.tAcceptAndContinue = $('#cgv');
  }

  public async goToAcceptAndContinue(): Promise<void> {
    await this.tAcceptAndContinue.click();
  }
}
