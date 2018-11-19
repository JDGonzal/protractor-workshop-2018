import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private add2CartButton: ElementFinder;

  constructor () {
    this.add2CartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToAdd2CartButton(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.add2CartButton), 5000);
    await this.add2CartButton.click();
  }
}
