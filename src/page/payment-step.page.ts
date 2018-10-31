import { $, ElementFinder, browser } from 'protractor';

export class PaymentStepPage {
  private tPayByBank: ElementFinder;
  private tCheckoutButton: ElementFinder;

  constructor () {
    this.tCheckoutButton = $('#form > p > button > span');
    this.tPayByBank = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToPayByBank(): Promise<void> {
    await this.tCheckoutButton.click();
    await(browser.sleep(3000));
    await this.tPayByBank.click();
  }
}
