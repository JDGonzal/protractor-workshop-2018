import { $, ElementFinder } from 'protractor';

export class MenuContentPage {
  private shirtMenu: ElementFinder;

  constructor () {
    this.shirtMenu = $('#block_top_menu > ul > li > a[title="T-shirts"]');
  }

  public async goToTShirtMenu(): Promise<void> {
    this.shirtMenu.click();
  }
}
