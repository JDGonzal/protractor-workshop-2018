import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderTitleLabel: ElementFinder;

  constructor () {
    this.orderTitleLabel = $('#center_column > div > p > strong');
  }

  public async getOrderTitle(): Promise<string> {
    await this.orderTitleLabel.click();
    return await this.orderTitleLabel.getText();
  }
}
