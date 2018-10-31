import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private tConfirmOrder: ElementFinder;

  constructor () {
    this.tConfirmOrder = $('#cart_navigation > button > span');
  }

  public async goToConfirmOrder(): Promise<void> {
    await this.tConfirmOrder.click();
  }
}
