import { type Page, type Locator } from '@playwright/test';

export class CartPage {

  readonly backpackName: Locator;
  readonly cartBadge: Locator;
  readonly removeBackpackButton: Locator;
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {

    this.backpackName = page.getByText(
      'Sauce Labs Backpack',
      { exact: true }
    );

    this.cartBadge = page.locator('.shopping_cart_badge');

    this.removeBackpackButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );

    this.checkoutButton = page.locator(
      '[data-test="checkout"]'
    );
  }

  async removeBackpack() {
    await this.removeBackpackButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}