
import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.beforeEach(async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html$/);

});


// TC-05: Add product to cart
test('Add Product to Cart', async ({ page }) => {

  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.addBackpack();

  await expect(inventoryPage.cartBadge).toHaveText('1');

  await inventoryPage.openCart();

  await expect(cartPage.backpackName).toBeVisible();

});


// TC-06: Remove product from cart
test('Remove Product from Cart', async ({ page }) => {

  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await inventoryPage.addBackpack();

  await inventoryPage.openCart();

  await cartPage.removeBackpack();

  await expect(cartPage.backpackName).toHaveCount(0);

  await expect(cartPage.cartBadge).toHaveCount(0);

});
