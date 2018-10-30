import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private tCheckoutButton: ElementFinder;

  constructor () {
    this.tCheckoutButton = $('.cart_navigation span');
  }

  public async goToCheckoutButton(): Promise<void> {
    await this.tCheckoutButton.click();
  }
}
