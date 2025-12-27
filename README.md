# Demo Web Shop – Playwright Automation (JavaScript)

This project automates an end-to-end purchase flow on: https://demowebshop.tricentis.com/
```

The scenario covered:

1. Register a new user (email generated dynamically)
2. Add multiple products to the cart
3. Verify cart totals
4. Complete checkout
5. Generate an HTML test report

The project follows the **Page Object Model** design pattern and uses **external JSON files** for test data.

---

## Project Structure

```
src/
 ├── data/
 │   ├── products.json
 │   └── user.json
 │
 ├── pages/
 │   ├── register.page.js
 │   ├── navigation.page.js
 │   ├── cart.page.js
 │   └── checkout.page.js
 │
 ├── tests/
 │   └── placeOrder.spec.js
 │
 └── playwright-report/   (auto-generated after execution)
```

---

## Technologies Used

* Playwright (JavaScript)
* Page Object Model (POM)
* HTML Report (Playwright Reporter)
* JSON as external data source
* Environment variables (no credentials stored in code)

---

## Environment Variables

Create a file named **.env** in the project root and add:

```
EMAIL_DOMAIN=yopmail.com
```

The test automatically generates unique emails like:
test1738000000@yopmail.com

---

## Install & Run

### Install dependencies

npm install

### Run test

npx playwright test

### View HTML report

npx playwright show-report

---

## External Data Files

### user.json

```
{
  "firstName": "Test",
  "lastName": "User",
  "password": "Test@0101"
}
```

### products.json

```
{
  "items": [
    { "name": "14.1-inch Laptop" },
    { "name": "Blue Jeans" },
    { "name": "Health Book" }
  ]
}
```

---

## Page Object Model Overview

Each feature has its own reusable class:

* **RegisterPage** – user registration
* **NavigationPage** – navigating & adding products
* **CartPage** – shipping + total validation
* **CheckoutPage** – billing + order completion

This keeps the test clean, modular and easy to maintain.

---

## Reporting

HTML reporting is configured in `playwright.config.js`:

```
reporter: [
  ['html', { outputFolder: 'playwright-report', open: 'never' }]
]
```

Open the latest report any time:

```
npx playwright show-report
```

---

## Requirement Mapping

| Requirement                | Implemented         |
| -------------------------- | ------------------- |
| Page Object Model          | ✔ Yes               |
| Reporting implemented      | ✔ HTML Reporter     |
| Data from external JSON    | ✔ Yes               |
| Environment variables used | ✔ Yes               |
| Project executable         | ✔ Runs successfully |

---

## Notes

* No personal credentials are stored anywhere
* Emails are dynamically generated each run
* Test is stable and re-usable
* Designed to demonstrate automation best practices

---

End of README

---