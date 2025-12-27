const { test } = require('@playwright/test');
require('dotenv').config();

const user = require('../data/user.json');

const { RegisterPage } = require('../pages/register.page');
const { NavigationPage } = require('../pages/navigation.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');

test('Register, add products and place order', async ({ page }) => {
  const register = new RegisterPage(page);
  const nav = new NavigationPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  // Generate unique email each run
  const email = `test${Date.now()}@${process.env.EMAIL_DOMAIN}`;

  // Go to site
  await page.goto('https://demowebshop.tricentis.com/');

  // Register using data from user.json
  await register.register({
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    email
  });

  // Add products (names come from products.json via NavigationPage)
  await nav.addProductsFromData();

  // Cart actions
  await cart.openCart();
  await cart.estimateShipping();
  await cart.verifyCartTotals();   // also prints totals to console
  await cart.agreeAndCheckout();

  // Checkout
  await checkout.fillBillingDetails();   // random address
  await checkout.completeCheckout();
});
