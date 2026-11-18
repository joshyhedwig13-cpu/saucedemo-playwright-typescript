import { Page, Locator } from '@playwright/test';

export class InventoryPage {

  readonly cartBadge: Locator;
  readonly addBackpackButton: Locator;
  readonly cartLink: Locator;

  constructor(private readonly page: Page) {

    this.cartBadge = page.locator('.shopping_cart_badge');

    this.addBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addBackpack() {
    await this.addBackpackButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}