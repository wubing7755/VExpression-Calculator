<script setup lang="ts">
defineOptions({
  name: 'CalculatorComponent',
})

import Display from './Display.vue'
import Keypad from './Keypad.vue'
import HistoryPanel from './HistoryPanel.vue'
import ThemeToggle from './ThemeToggle.vue'

import { ref, onMounted, onUnmounted } from 'vue'
import { useCalculatorStore } from '@/stores/calculator'

const showHistory = ref(false)

const store = useCalculatorStore()

const keyMap: Record<string, string> = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '.': '.',
  '=': '=',
  Enter: '=',
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷',
  Escape: 'AC',
  '%': '%',
}

function handleKeydown(e: KeyboardEvent) {
  const key = e.key

  // 忽略修饰键
  if (e.ctrlKey || e.metaKey || e.altKey) return

  // 数字和小数点
  if (keyMap[key]) {
    e.preventDefault()
    const value = keyMap[key]
    if (value === '=') store.calculate()
    else if (value === 'AC') store.clear()
    else if (value === '%') store.percentage()
    else if (['+', '-', '×', '÷'].includes(value)) store.setOperator(value)
    else if (value === '.') store.appendDecimal()
    else store.appendNumber(value)
  }
}

onMounted(() => {
  globalThis.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  globalThis.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="calculator">
    <div class="header">
      <button class="history-toggle" @click="showHistory = !showHistory">
        {{ showHistory ? '🔢' : '📜' }}
      </button>
      <ThemeToggle />
    </div>
    <Display />
    <Keypad v-if="!showHistory" />
    <HistoryPanel v-else />
  </div>
</template>

<style scoped>
.calculator {
  position: relative;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.header {
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 10;
}

.history-toggle {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  background: var(--btn-function);
  color: var(--text-color);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.history-toggle:hover {
  transform: scale(1.1);
}
</style>
