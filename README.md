# 💰 Expense Tracker — Mobile Application Development Project

A simple, offline-first personal expense tracker built with **React Native (Expo) + TypeScript**. Built as a complete, end-to-end sample project for an MCA "Mobile Application Development" course/internship project report — covering the full lifecycle from problem statement to deployment.

> 📁 Full supporting documentation (problem statement, use cases, architecture, deployment guide, free learning resources) lives in the [`docs/`](./docs) folder. Start there if you need material for a project report.

---

## ✨ Features

| Feature | Description |
|---|---|
| Add expense | Log an expense with amount, category, date, and an optional note |
| Edit / delete | Tap any expense to edit it, or delete it from the list or the form |
| Monthly dashboard | Home screen shows the current month's total spend at a glance |
| Full expense list | Search by note/category and filter by category |
| Category breakdown | Visual bar chart of spend per category, for "This Month" or "All Time" |
| Offline-first | All data is stored locally on the device — no backend, no login, no internet required |
| Cross-platform | One codebase runs on Android, iOS, and the web (via Expo) |

## 🧱 Tech Stack

- **React Native** + **Expo** — cross-platform mobile framework
- **TypeScript** — type safety across the entire codebase
- **React Navigation** — bottom-tab + stack navigation
- **AsyncStorage** — simple, local, on-device persistence (no backend needed)
- **Jest** + **ts-jest** — unit tests for business logic
- **ESLint** — static code analysis
- **GitHub Actions** — CI pipeline that type-checks, lints, and tests on every push

No paid services, no API keys, and no native build tools are required to run this project — see [`docs/FREE_RESOURCES.md`](./docs/FREE_RESOURCES.md).

## 📂 Project Structure

```
expense-tracker/
├── .github/workflows/ci.yml      # GitHub Actions CI (lint + typecheck + test)
├── assets/                       # App icons & splash screen
├── docs/                         # Problem statement, use cases, architecture, deployment, resources
├── src/
│   ├── components/                # Reusable presentational components
│   │   ├── CategoryBar.tsx          # One bar in the category breakdown chart
│   │   ├── CategoryPicker.tsx       # Horizontal category chip selector
│   │   ├── EmptyState.tsx           # "No data yet" placeholder
│   │   ├── ExpenseItem.tsx          # One row in an expense list
│   │   └── SummaryCard.tsx          # Big headline total card
│   ├── constants/
│   │   └── categories.ts            # Category list, colors, icons, currency symbol
│   ├── context/
│   │   └── ExpenseContext.tsx       # Global state (React Context) + CRUD operations
│   ├── navigation/
│   │   └── AppNavigator.tsx         # Stack + bottom-tab navigation structure
│   ├── screens/
│   │   ├── HomeScreen.tsx           # Dashboard: monthly summary + recent transactions
│   │   ├── ExpenseListScreen.tsx    # Full list with search & category filter
│   │   ├── StatsScreen.tsx          # Category breakdown chart
│   │   └── AddEditExpenseScreen.tsx # Shared add/edit form
│   ├── storage/
│   │   └── storageService.ts        # AsyncStorage read/write wrapper
│   ├── types/
│   │   └── index.ts                 # Shared TypeScript types/interfaces
│   └── utils/
│       └── helpers.ts               # Pure helper functions (formatting, totals, ids)
├── __tests__/
│   └── helpers.test.ts             # Unit tests for src/utils/helpers.ts
├── App.tsx                         # App entry point
├── app.json                        # Expo app configuration
├── babel.config.js
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- The free **Expo Go** app on your phone ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779)) — *or* Android Studio / Xcode if you prefer a simulator

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/expense-tracker.git
cd expense-tracker

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

This opens the Expo developer tools in your terminal/browser with a QR code. Scan it with the **Expo Go** app on your phone to run the app instantly — no cable, no build step, no app store needed.

Other ways to run it:

```bash
npm run android   # opens in an Android emulator (requires Android Studio)
npm run ios        # opens in an iOS simulator (requires Xcode, macOS only)
npm run web         # runs in your browser
```

### Quality checks

```bash
npm run typecheck   # TypeScript strict type-checking
npm run lint          # ESLint static analysis
npm test               # Jest unit tests
```

All three are wired into [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) and run automatically on every push/PR.

## 📖 Documentation

| Document | Contents |
|---|---|
| [`docs/PROBLEM_STATEMENT.md`](./docs/PROBLEM_STATEMENT.md) | The problem this app solves and project objectives |
| [`docs/USE_CASES.md`](./docs/USE_CASES.md) | Actors, use case diagram, and detailed use case descriptions |
| [`docs/SOLUTION_ARCHITECTURE.md`](./docs/SOLUTION_ARCHITECTURE.md) | App architecture, data flow, folder responsibilities, data model |
| [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) | How to test, build, and publish the app (Android/iOS/Web), step by step |
| [`docs/FREE_RESOURCES.md`](./docs/FREE_RESOURCES.md) | Free tools, docs, and tutorials used (or useful) for this project |

## 🔮 Possible Enhancements

- Cloud sync (Firebase Firestore free tier) so data survives device loss
- Native date picker instead of a text field
- Recurring expenses / budgets with alerts when a category exceeds a limit
- Dark mode
- Export to CSV/PDF for sharing with a supervisor or for tax records

## 📄 License

Released under the [MIT License](./LICENSE) — free to use, modify, and submit as part of a coursework project.
