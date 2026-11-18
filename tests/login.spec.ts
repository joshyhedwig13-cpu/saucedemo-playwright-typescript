
import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';


// TC-01: Successful Login
test('Successful Login - Standard User', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html$/);

  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();

});


// TC-02: Incorrect Password
test('Invalid Login - Incorrect Password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('standard_user', 'wrong_password');

  await expect(loginPage.errorMessage)
    .toContainText('do not match any user');

});


// TC-03: Locked Out User
test('Invalid Login - Locked Out User', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(loginPage.errorMessage)
    .toContainText('locked out');

});


// TC-04: Empty Password
test('Invalid Login - Empty Password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('standard_user', '');

  await expect(loginPage.errorMessage)
    .toContainText('Password is required');

});
