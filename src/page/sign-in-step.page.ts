import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private tLoginButton: ElementFinder;
  private tUsernameField: ElementFinder;
  private tPasswordField: ElementFinder;

  constructor () {
    this.tUsernameField = $('#email');
    this.tPasswordField = $('#passwd');
    this.tLoginButton = $('#SubmitLogin > span');
  }

  public async goToLogin(sUsername: string, sPassword: string): Promise<void> {
    await this.tUsernameField.sendKeys(sUsername);
    await this.tPasswordField.sendKeys(sPassword);
    await this.tLoginButton.click();
  }
}
