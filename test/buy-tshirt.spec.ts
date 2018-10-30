import { $, browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToAdd2CartButton();
    await(browser.sleep(3000));
    await productAddedModalPage.goToCheckoutButton();
    await(browser.sleep(3000));
    await summaryStepPage.goToCheckoutButton();
    await(browser.sleep(3000));

    await signInStepPage.goToLogin('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));

    await addressStepPage.goToCheckout();
    await(browser.sleep(3000));

    await shippingStepPage.goToAcceptAndContinue();
    await(browser.sleep(3000));

    await paymentStepPage.goToPayByBank();
    await(browser.sleep(3000));
    await bankPaymentPage.goToConfirmOrder();
    await(browser.sleep(3000));
    await $('#cart_navigation > button > span').click();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
