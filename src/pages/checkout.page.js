function randomNumber(len) {
  return Math.random().toString().slice(2, 2 + len);
}

function randomWord() {
  return 'Addr' + Math.random().toString(36).substring(2, 7);
}

class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async fillBillingDetails() {
    await this.page.getByLabel('Country:').selectOption('1'); // US
    await this.page.getByRole('textbox', { name: 'City:' }).fill(randomWord());
    await this.page.getByRole('textbox', { name: 'Address 1:' }).fill(randomWord());
    await this.page.getByRole('textbox', { name: 'Zip / postal code:' }).fill(randomNumber(5));
    await this.page.getByRole('textbox', { name: 'Phone number:' }).fill(randomNumber(10));
    await this.page.getByRole('textbox', { name: 'Fax number:' }).fill(randomNumber(10));

  // Continue from Billing
     await this.page.getByRole('button', { name: 'Continue' }).click();
     //await this.page.locator('#billing-buttons-container button[name="save"]').click();
  }

  async completeCheckout() {

    // helper — click Continue under a specific section heading
    const clickContinueUnder = async (sectionText) => {
      const section = this.page.getByText(sectionText).locator('..');
      await section.getByRole('button', { name: 'Continue' }).click();
    };

    await clickContinueUnder('2 Shipping address');
    await clickContinueUnder('3 Shipping method');
    await clickContinueUnder('4 Payment method');
    await clickContinueUnder('5 Payment information');

    // confirm
    await this.page.getByRole('button', { name: 'Confirm' }).click();

    // final success page
    await this.page.getByRole('button', { name: 'Continue' }).click();
    await this.page.getByRole('link', { name: 'Log out' }).click();
  }
}

module.exports = { CheckoutPage };