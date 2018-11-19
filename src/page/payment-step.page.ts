import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBank: ElementFinder;

  constructor () {
    this.payByBank = $('.bankwire');
  }

  public async goToPayByBank(): Promise<void> {
    await this.payByBank.click();
  }
}
