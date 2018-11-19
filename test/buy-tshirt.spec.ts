import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage
} from '../src/page';

describe('Open the page in the browser', async () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('T-shirt purchase process', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.goToAdd2CartButton();
      await productAddedModalPage.goToCheckoutButton();
      await summaryStepPage.goToCheckoutButton();
    });

    describe('Logging in the application', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.goToLogin('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('Select the default address', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          await addressStepPage.goToCheckout();
        });

        describe('Payment in the bank', () => {
          const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

          beforeAll(async () => {
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

            await shippingStepPage.goToAcceptAndContinue();
            await paymentStepPage.goToPayByBank();
            await bankPaymentPage.goToConfirmOrder();
          });

          it('Finally the shirt was bought', async () => {
            await expect(orderSummaryPage.getOrderTitle())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
