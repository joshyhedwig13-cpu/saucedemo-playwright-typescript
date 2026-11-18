
import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


// Prepare checkout before every test
test.beforeEach(async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Add a product
  await inventoryPage.addBackpack();

  // Open cart
  await inventoryPage.openCart();

  // Proceed to checkout
  await cartPage.proceedToCheckout();

  // Verify checkout page
  await expect(page).toHaveURL(/checkout-step-one\.html$/);

});


// TC-07: Successful checkout
test('Successful Checkout', async ({ page }) => {

  const checkoutPage = new CheckoutPage(page);

  // Enter customer information
  await checkoutPage.fillCustomerInformation(
    'Test',
    'User',
    '12345'
  );

  // Continue to order overview
  await checkoutPage.continueToOverview();

  await expect(page).toHaveURL(/checkout-step-two\.html$/);

  // Verify order product
  await expect(checkoutPage.backpackName).toBeVisible();

  // Complete order
  await checkoutPage.finishOrder();

  // Verify order confirmation
  await expect(page).toHaveURL(/checkout-complete\.html$/);

  await expect(checkoutPage.confirmationMessage)
    .toHaveText('Thank you for your order!');

});


// TC-08: Checkout required fields
test('Checkout - Required Fields', async ({ page }) => {

  const checkoutPage = new CheckoutPage(page);

  // Submit checkout without entering information
  await checkoutPage.continueToOverview();

  // Verify validation message
  await expect(checkoutPage.errorMessage)
    .toContainText('First Name is required');

  // Verify user remains on checkout information page
  await expect(page).toHaveURL(/checkout-step-one\.html$/);

});
