import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private tAdd2CartButton: ElementFinder;

  constructor () {
    this.tAdd2CartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToAdd2CartButton(): Promise<void> {
    await this.tAdd2CartButton.click();
  }
}
