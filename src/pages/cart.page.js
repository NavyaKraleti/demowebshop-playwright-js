const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
  }

  async openCart() {
    await this.page.getByRole('link', { name: /Shopping cart/ }).first().click();
  }

  async estimateShipping() {
    await this.page.getByLabel('Country:').selectOption('1'); // United States
    await this.page.getByRole('button', { name: 'Estimate shipping' }).click();
  }

async verifyCartTotals() {
  const totals = this.page.locator('table.cart-total');
  await totals.waitFor();

  const subtotalText = await totals
    .getByRole('row')
    .filter({ hasText: 'Sub-Total:' })
    .locator('.cart-total-right')
    .textContent();

  const shippingText = await totals
    .getByRole('row')
    .filter({ hasText: 'Shipping:' })
    .locator('.cart-total-right')
    .textContent();

  const totalText = await totals
    .getByRole('row')
    .filter({ hasText: 'Total:' })
    .locator('.cart-total-right')
    .first()          
    .textContent();

  const subtotal = Number(subtotalText.replace(/[^0-9.]/g, ''));
  const shipping = Number(shippingText.replace(/[^0-9.]/g, ''));
  const total = Number(totalText.replace(/[^0-9.]/g, ''));

  console.log(`Subtotal: ${subtotal}, Shipping: ${shipping}, Total: ${total}`);

  expect(subtotal + shipping).toBe(total);
}

  async agreeAndCheckout() {
    await this.page.locator('#termsofservice').check();
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}

module.exports = { CartPage };