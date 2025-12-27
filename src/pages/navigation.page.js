const products = require('../data/products.json');

class NavigationPage {
  constructor(page) {
    this.page = page;
  }

  async addProductsFromData() {
    const productMap = {
      'Health Book': {
        categoryUrl: '/books',
        productSelector: 'Health Book',
        addButton: '#add-to-cart-button-22'
      },
      '14.1-inch Laptop': {
        categoryUrl: '/notebooks',
        productSelector: '14.1-inch Laptop',
        addButton: '#add-to-cart-button-31'
      },
      'Blue Jeans': {
        categoryUrl: '/apparel-shoes',
        productSelector: 'Blue Jeans',
        addButton: '#add-to-cart-button-36'
      }
    };

    for (const item of products.items) {
      const details = productMap[item.name];

      if (!details) {
        console.warn(`❗ Product not mapped: ${item.name}`);
        continue;
      }

      // Navigate to category
      await this.page.goto(`https://demowebshop.tricentis.com${details.categoryUrl}`);

      // Open exact product
      await Promise.all([
        this.page.waitForNavigation(),
        this.page.getByRole('link', { name: details.productSelector, exact: true }).click()
      ]);

      // Wait and click Add to Cart
      await this.page.locator('#product-details-form').waitFor();
      await this.page.locator(details.addButton).click();

      // Confirmation
      await this.page.locator('#bar-notification').waitFor({ state: 'visible' });
    }
  }
}

module.exports = { NavigationPage };