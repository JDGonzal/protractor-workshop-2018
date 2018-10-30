import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private tConfirmOrder: ElementFinder;

  constructor () {
    this.tConfirmOrder = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToConfirmOrder(): Promise<void> {
    await this.tConfirmOrder.click();
  }
}
