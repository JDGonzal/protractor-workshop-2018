import { $, ElementFinder, browser } from 'protractor';

export class PaymentStepPage {
  private payByBank: ElementFinder;
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('#form > p > button > span');
    this.payByBank = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToPayByBank(): Promise<void> {
    await this.checkoutButton.click();
    await(browser.sleep(3000));
    await this.payByBank.click();
  }
}
