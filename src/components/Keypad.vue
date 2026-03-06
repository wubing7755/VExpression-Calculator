<script setup lang="ts">
defineOptions({
  name: 'KeypadComponent',
})

import { useCalculatorStore } from '@/stores/calculator'

const store = useCalculatorStore()

// 按钮配置
interface ButtonConfig {
  label: string
  value: string
  type: 'number' | 'operator' | 'function'
}

const buttons: ButtonConfig[] = [
  { label: 'AC', value: 'AC', type: 'function' },
  { label: '+/-', value: '±', type: 'function' },
  { label: '%', value: '%', type: 'function' },
  { label: '÷', value: '÷', type: 'operator' },
  { label: '7', value: '7', type: 'number' },
  { label: '8', value: '8', type: 'number' },
  { label: '9', value: '9', type: 'number' },
  { label: '×', value: '×', type: 'operator' },
  { label: '4', value: '4', type: 'number' },
  { label: '5', value: '5', type: 'number' },
  { label: '6', value: '6', type: 'number' },
  { label: '-', value: '-', type: 'operator' },
  { label: '1', value: '1', type: 'number' },
  { label: '2', value: '2', type: 'number' },
  { label: '3', value: '3', type: 'number' },
  { label: '+', value: '+', type: 'operator' },
  { label: '0', value: '0', type: 'number' },
  { label: '.', value: '.', type: 'number' },
  { label: '=', value: '=', type: 'operator' },
]

function handleClick(value: string) {
  if (value === 'AC') {
    store.clear()
  } else if (value === '±') {
    store.toggleSign()
  } else if (value === '%') {
    store.percentage()
  } else if (value === '=') {
    store.calculate()
  } else if (['+', '-', '×', '÷'].includes(value)) {
    store.setOperator(value)
  } else if (value === '.') {
    store.appendDecimal()
  } else {
    store.appendNumber(value)
  }
}
</script>

<template>
  <div class="keypad">
    <button
      v-for="btn in buttons"
      :key="btn.value"
      :class="['btn', btn.type]"
      @click="handleClick(btn.value)"
    >
      {{ btn.label }}
    </button>
  </div>
</template>

<style scoped>
.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 16px;
}

.btn {
  height: 64px;
  border: none;
  border-radius: 16px;
  font-size: 26px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn:active {
  transform: scale(0.95);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.btn.number {
  background: var(--btn-number);
  color: var(--text-color);
}

.btn.operator {
  background: var(--btn-operator);
  color: #fff;
}

.btn.function {
  background: var(--btn-function);
  color: var(--text-color);
  font-size: 20px;
  font-weight: 500;
}
</style>
