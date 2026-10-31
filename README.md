# E2E Test withPOM

An automated API testing project for a automation exercise e-shop [MyShop](https://automationexercise.com/) mock built using **Cypress**.

> **Disclaimer:** _This repository is designed as a practical demonstration of test automation concepts, project architecture, and framework integration. It is not intended to provide exhaustive test coverage._

## 🛠 Tech Stack

- **JavaScript / Node.js**
- **Cypress** — E2E test automation

---

## 📁 Project Structure

```text
MyShop/
│
├── cypress/          # Cypress test files and helpers
│   ├── e2e/          # Test scenario suites
│   ├── fixtures/     # Mock data files (JSON)
│   └── support/      # Custom commands and configurations
│        └── pages/   # JS classes
│
├── cypress.config.js # Cypress runner configuration
├── package.json      # Dependencies and npm automation scripts
└── README.md         # Project documentation
```

## 🚀 Quick Start

1. **Install dependencies:**

```bash
npm install
```

2. **Run Cypress tests:**

```bash
npx cypress run
```
