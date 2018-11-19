import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class OrderSummaryPage {
  private orderTitleLabel: ElementFinder;

  constructor () {
    this.orderTitleLabel = $('#center_column > div > p > strong');
  }

  public async getOrderTitle(): Promise<string> {
    await console.log('log1.');
    await browser.wait(ExpectedConditions.elementToBeClickable(this.orderTitleLabel), 6000);
    await this.orderTitleLabel.click();
    await console.log(this.orderTitleLabel.getText());
    return await this.orderTitleLabel.getText();
  }
}
