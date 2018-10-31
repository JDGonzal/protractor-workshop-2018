import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private loginButton: ElementFinder;
  private usernameField: ElementFinder;
  private passwordField: ElementFinder;

  constructor () {
    this.usernameField = $('#email');
    this.passwordField = $('#passwd');
    this.loginButton = $('#SubmitLogin > span');
  }

  public async goToLogin(sUsername: string, sPassword: string): Promise<void> {
    await this.usernameField.sendKeys(sUsername);
    await this.passwordField.sendKeys(sPassword);
    await this.loginButton.click();
  }
}
