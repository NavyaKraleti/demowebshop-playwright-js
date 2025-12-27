//@ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 90000,
  expect: {
    timeout: 10000
  },
  use: {
    headless: false
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ]
};

module.exports = config;
