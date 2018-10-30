import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private tCheckoutButton: ElementFinder;

  constructor () {
    this.tCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async goToCheckoutButton(): Promise<void> {
    await this.tCheckoutButton.click();
  }
}
