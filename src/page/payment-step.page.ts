import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private tPayByBank: ElementFinder;

  constructor () {
    this.tPayByBank = $('#form > p > button > span');
  }

  public async goToPayByBank(): Promise<void> {
    await this.tPayByBank.click();
  }
}
