import { $, ElementFinder, browser } from 'protractor';

export class SummaryStepPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('.cart_navigation span');
  }

  public async goToCheckoutButton(): Promise<void> {
    await browser.sleep(3000);
    await this.checkoutButton.click();
  }
}
