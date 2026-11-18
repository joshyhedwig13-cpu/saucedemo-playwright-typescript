import { type Page, type Locator } from '@playwright/test';

export class CheckoutPage {

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly errorMessage: Locator;
  readonly confirmationMessage: Locator;
  readonly backpackName: Locator;

  constructor(private readonly page: Page) {

    this.firstNameInput = page.getByPlaceholder('First Name');

    this.lastNameInput = page.getByPlaceholder('Last Name');

    this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');

    this.continueButton = page.locator('[data-test="continue"]');

    this.finishButton = page.locator('[data-test="finish"]');

    this.errorMessage = page.locator('[data-test="error"]');

    this.confirmationMessage = page.locator('.complete-header');

    this.backpackName = page.getByText(
      'Sauce Labs Backpack',
      { exact: true }
    );
  }

  async fillCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {

    await this.firstNameInput.fill(firstName);

    await this.lastNameInput.fill(lastName);

    await this.postalCodeInput.fill(postalCode);

  }

  async continueToOverview() {
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }
}