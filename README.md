# 🚀 Demo Web Shop – Playwright UI Automation (JavaScript)

UI Automation assignment using **Playwright + JavaScript** following best practices such as:

* ✅ Page Object Model (POM)
* ✅ Data-driven testing (JSON)
* ✅ Environment variables for sensitive data
* ✅ HTML test reports
* ✅ Clean, reusable code structure

The test automates a **complete end-to-end checkout** on:

[https://demowebshop.tricentis.com/]

It registers a user, adds products, validates cart totals, and places an order.

---

## 🏗 Project Structure

```
demowebshop-playwright-js
│
├── src
│   ├── pages
│   │   ├── register.page.js
│   │   ├── navigation.page.js
│   │   ├── cart.page.js
│   │   └── checkout.page.js
│   │
│   ├── tests
│   │   └── placeOrder.spec.js
│   │
│   └── data
│       ├── products.json
│       └── user.json
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

Install:

* Node.js (v18+ recommended)
* Git
* VS Code

Verify:

```
node -v
npm -v
git --version
```

---

## 📥 Installation

Clone the repo:

```
git clone https://github.com/NavyaKraleti/demowebshop-playwright-js
cd demowebshop-playwright-js
```

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

---

## 🔐 Environment Variable (Email Domain)

We generate a random email each run and append a domain from an environment variable.

Create a `.env` file in the project root:

```
EMAIL_DOMAIN=yopmail.com
```

> ⚠️ No credentials or API keys are stored in the project.

---

## 📊 Data-Driven Inputs (JSON)

### Products (data/products.json)

```
{
  "items": [
    { "name": "14.1-inch Laptop" },
    { "name": "Blue Jeans" },
    { "name": "Health Book" }
  ]
}
```

### User Data (data/user.json)

```
{
  "firstName": "Test",
  "lastName": "User",
  "password": "Test@0101"
}
```

The script reads this data dynamically during test execution.

---

## ▶️ Running the Test

Headless (default):

```
npx playwright test
```

Run in UI mode (to visually watch execution):

```
npx playwright test --ui
```

---

## 📑 Reports (HTML)

After execution, open the HTML report:

```
npx playwright show-report
```

Path (auto-generated):

```
playwright-report/index.html
```

---

## 🧠 What the Test Does (End-to-End Flow)

1️⃣ Register new user (random email)
2️⃣ Add three products to cart (from JSON)
3️⃣ Estimate shipping
4️⃣ Validate price calculation
5️⃣ Checkout with random billing data
6️⃣ Place order
7️⃣ Verify success message

All using **Page Objects** so the logic remains clean and reusable.

---

## 🧱 Page Object Model (POM)

Each screen action is written in its own class:

* `RegisterPage` → handles user registration
* `NavigationPage` → selects products
* `CartPage` → validates totals and checkout
* `CheckoutPage` → billing + confirmation

This keeps tests readable and maintainable.

---

## 📝 Deliverables Checklist

| Requirement               | Status                       |
| ------------------------- | ---------------------------- |
| Page Object Model         | ✅ Done                       |
| Reporting Implemented     | ✅ Playwright HTML Reports    |
| Data from external file   | ✅ products.json & user.json  |
| Executable Project        | ✅ Fully runnable             |
| GitHub Repo               | ✅ Uploaded                   |
| No credentials in code    | ✅ Using environment variable |
| README with usage details | ✅ Completed                  |

---

## 🎯 How to Extend

* Add more products → update `products.json`
* Change user defaults → update `user.json`
* Switch environments → update `.env`

---

### 🙌 Thank You

This assignment demonstrates:

✔ automation best practices
✔ structured POM design
✔ real-world checkout workflow
✔ clean reporting and data handling

---