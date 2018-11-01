import { $, ElementFinder, browser } from 'protractor';

export class ProductAddedModalPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckoutButton(): Promise<void> {
    await browser.sleep(3000);
    await this.checkoutButton.click();
  }
}
