const products = require('../data/products.json');

class NavigationPage {
  constructor(page) {
    this.page = page;
  }

  async addProductsFromData() {

    for (const item of products.items) {
      const name = item.name;

      // Health Book
      if (name === 'Health Book') {
        await this.page.locator('ul.top-menu a[href="/books"]').click();

        await Promise.all([
          this.page.waitForNavigation(),
          this.page.getByRole('link', { name: 'Health Book', exact: true }).click()
        ]);

        await this.page.locator('#product-details-form').waitFor();
        await this.page.locator('#add-to-cart-button-22').click();
        await this.page.locator('#bar-notification').waitFor({ state: 'visible' });
      }

      // 14.1-inch Laptop
      else if (name === '14.1-inch Laptop') {
        await this.page.goto('https://demowebshop.tricentis.com/notebooks');

        await Promise.all([
          this.page.waitForNavigation(),
          this.page.getByRole('link', { name: '14.1-inch Laptop', exact: true }).click()
        ]);

        await this.page.locator('#product-details-form').waitFor();
        await this.page.locator('#add-to-cart-button-31').click();
        await this.page.locator('#bar-notification').waitFor({ state: 'visible' });
      }

      // Blue Jeans
      else if (name === 'Blue Jeans') {
        await this.page
          .getByRole('link', { name: 'Apparel & Shoes' })
          .nth(1)
          .click();

        await Promise.all([
          this.page.waitForNavigation(),
          this.page.getByRole('link', { name: 'Blue Jeans', exact: true }).click()
        ]);

        await this.page.locator('#product-details-form').waitFor();
        await this.page.locator('#add-to-cart-button-36').click();
        await this.page.locator('#bar-notification').waitFor({ state: 'visible' });
      }
    }
  }
}

module.exports = { NavigationPage };