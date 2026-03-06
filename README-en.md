# VExpression-Calculator

🌐 **Choose Language**: [中文](README.md) | **English**

## A Modern Expression Calculator built with Vue 3

A beautiful, feature-rich calculator web application built with Vue 3, featuring expression display, calculation history, and dark/light theme support.

## ✨ Features

- **Basic Operations**: Addition, subtraction, multiplication, division
- **Expression Display**: Real-time display of current input expression
- **Calculation History**: Automatically saves the last 10 calculations, click to reuse
- **Theme Switching**: Light/Dark mode with system preference detection
- **Keyboard Support**: Full keyboard input support
- **Responsive Design**: Works beautifully on desktop and mobile devices

## 🛠️ Tech Stack

- Vue 3 (Composition API + TypeScript)
- Vite 5
- Pinia (State Management)
- Vue Router
- Vitest (Unit Testing)
- Playwright (E2E Testing)
- ESLint + Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.19.0

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
# Unit tests
npm run test:unit

# E2E tests
npx playwright install
npm run test:e2e
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Vue components
│   │   ├── Calculator.vue
│   │   ├── Display.vue
│   │   ├── HistoryPanel.vue
│   │   ├── Keypad.vue
│   │   └── ThemeToggle.vue
│   ├── stores/          # Pinia stores
│   │   └── calculator.ts
│   ├── router/          # Vue Router config
│   ├── views/           # Page views
│   ├── App.vue          # Root component
│   └── main.ts          # Entry point
├── e2e/                 # E2E tests
└── package.json
```

## 📄 License

MIT
