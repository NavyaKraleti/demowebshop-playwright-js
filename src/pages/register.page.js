class RegisterPage {
  constructor(page) {
    this.page = page;
  }

async register({ firstName, lastName, password, email }) {
  await this.page.getByRole('link', { name: 'Register' }).click();
  await this.page.getByRole('radio', { name: 'Female' }).check();

  await this.page.getByRole('textbox', { name: 'First name:' }).fill(firstName);
  await this.page.getByRole('textbox', { name: 'Last name:' }).fill(lastName);
  await this.page.getByRole('textbox', { name: 'Email:' }).fill(email);

  await this.page.locator('#Password').fill(password);
  await this.page.locator('#ConfirmPassword').fill(password);

  await this.page.getByRole('button', { name: 'Register' }).click();
  await this.page.getByRole('button', { name: 'Continue' }).click();
}
}
module.exports = { RegisterPage };
