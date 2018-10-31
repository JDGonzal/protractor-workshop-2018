import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private tOrderTitleLabel: ElementFinder;

  constructor () {
    this.tOrderTitleLabel = $('#center_column > div > p > strong');
  }

  public async getOrderTitle(): Promise<string> {
    await this.tOrderTitleLabel.click();
    const sTitleLabel = await this.tOrderTitleLabel.getText();
    return sTitleLabel;
  }
}
