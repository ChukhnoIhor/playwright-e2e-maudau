# 🛒 E-Commerce Test Automation Framework (Maudau)

![Playwright](https://img.shields.io/badge/-Playwright-45ba4b?style=flat-square&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)

An automated testing framework developed by Ihor Chukhno as a practical portfolio project to tackle real-world e-commerce QA tasks. This repository features a robust suite of Playwright-based automated tests covering E2E, UI, functional, regression, and smoke testing scenarios.

## 🚀 Key Features
* **Architecture:** Built utilizing the **Page Object Model (POM)** design pattern for maintainability and scalability.
* **Custom Fixtures:** Implemented Playwright custom fixtures for streamlined page instantiation and state management.
* **Resilience:** Advanced handling of dynamic DOM elements, overlay interceptions, and complex web locators using robust strategies (`getByRole`, `getByText`, `.filter()`).
* **Test Coverage:** Simulates realistic user journeys, including critical paths like catalog navigation, dynamic brand filtering, and search functionalities.

## 🛠️ Technology Stack
* **Test Runner / Framework:** [Playwright](https://playwright.dev/)
* **Language:** TypeScript
* **Package Manager:** npm

## 📂 Project Structure
```text
├── pages/                  # Page Object classes (BrandPage, CatalogPage, HotOffersPage, etc.)
├── fixtures/               # Custom Playwright fixtures (fixture.ts)
├── tests/                  # Test specification files (*.spec.ts)
├── playwright.config.ts    # Global Playwright configuration
└── package.json            # Project dependencies and scripts
```

## 💻 Installation
Clone the repository:

```bash
git clone [https://github.com/ChukhnoIhor/playwright-e2e-maudau.git](https://github.com/ChukhnoIhor/playwright-e2e-maudau.git)
```

Navigate to the project directory:

```bash
cd playwright-e2e-maudau
```
Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

▶️ Running Tests
Execute the entire test suite in headless mode:

```bash
npx playwright test
```

Run tests with the Playwright UI mode (great for debugging):

```bash
npx playwright test --ui
```

Run a specific test file:

```bash
npx playwright test tests/your-test-file.spec.ts
```

View the HTML test report after execution:

```bash
npx playwright show-report
```