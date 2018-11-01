import { $, ElementFinder, browser } from 'protractor';

export class OrderSummaryPage {
  private orderTitleLabel: ElementFinder;

  constructor () {
    this.orderTitleLabel = $('#center_column > div > p > strong');
  }

  public async getOrderTitle(): Promise<string> {
    await browser.sleep(3000);
    await this.orderTitleLabel.click();
    return await this.orderTitleLabel.getText();
  }
}
