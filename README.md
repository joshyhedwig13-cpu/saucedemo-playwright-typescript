# SauceDemo Playwright Automation Framework

An end-to-end web test automation project built using
Playwright, TypeScript, and the Page Object Model (POM).

## Technologies
- Playwright Test
- TypeScript
- Node.js and npm
- Page Object Model (POM)
- Git and GitHub
- GitHub Actions CI/CD

## Test Coverage

### Login
- Successful login
- Incorrect password validation
- Locked-out user validation
- Required password validation

### Shopping Cart
- Add product to cart
- Remove product from cart

### Checkout
- Successful checkout
- Required field validation

## Project Structure

pages/
- LoginPage.ts
- InventoryPage.ts
- CartPage.ts
- CheckoutPage.ts

tests/
- login.spec.ts
- cart.spec.ts
- checkout.spec.ts

## Installation

npm install
npx playwright install

## Run Tests

npx playwright test --project=chromium

## HTML Report

npx playwright show-report

## CI/CD

GitHub Actions automatically runs Playwright tests
on the configured repository events.

## Test Reporting and Debugging

- HTML test reports
- Screenshots on failure
- Trace Viewer
- Video recordings on failure

## Project Purpose

This independent portfolio project demonstrates
end-to-end test automation, reusable Page Object
classes, positive and negative testing, debugging,
and CI/CD integration.