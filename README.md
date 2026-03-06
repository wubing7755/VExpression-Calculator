# VExpression-Calculator

🌐 **选择语言**: [English](README-en.md) | **中文**

## Web端计算器

一款美观、功能丰富的计算器 Web 应用，采用 Vue 3 构建，支持表达式显示、计算历史记录和浅色/深色主题切换。

## ✨ 功能特性

- **基础运算**：加、减、乘、除
- **表达式显示**：实时显示当前输入的完整表达式
- **计算历史**：自动保存最近10次计算，支持点击重新计算
- **主题切换**：浅色/深色主题，支持系统偏好自动切换
- **键盘支持**：完整的键盘输入支持
- **响应式设计**：在桌面和移动设备上都能完美运行

## 🛠️ 技术栈

- Vue 3 (组合式 API + TypeScript)
- Vite 5
- Pinia (状态管理)
- Vue Router
- Vitest (单元测试)
- Playwright (端到端测试)
- ESLint + Prettier

## 🚀 快速开始

### 环境要求

- Node.js >= 20.19.0

### 安装

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 运行测试

```bash
# 单元测试
npm run test:unit

# 端到端测试
npx playwright install
npm run test:e2e
```

### 代码检查

```bash
npm run lint
```

## 📁 项目结构

```
├── src/
│   ├── assets/          # 静态资源
│   ├── components/     # Vue 组件
│   │   ├── Calculator.vue
│   │   ├── Display.vue
│   │   ├── HistoryPanel.vue
│   │   ├── Keypad.vue
│   │   └── ThemeToggle.vue
│   ├── stores/          # Pinia 状态管理
│   │   └── calculator.ts
│   ├── router/          # Vue Router 配置
│   ├── views/           # 页面视图
│   ├── App.vue          # 根组件
│   └── main.ts          # 入口文件
├── e2e/                 # 端到端测试
└── package.json
```

## 📄 许可证

MIT
