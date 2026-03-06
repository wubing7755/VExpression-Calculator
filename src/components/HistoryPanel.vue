<script setup lang="ts">
defineOptions({
  name: 'HistoryPanelComponent',
})

import { useCalculatorStore } from '@/stores/calculator'
import { storeToRefs } from 'pinia'

const store = useCalculatorStore()
const { history } = storeToRefs(store)

function loadFromHistory(item: { expression: string; result: string }) {
  store.clear()
  store.appendNumber(item.result)
}
</script>

<template>
  <div class="history-panel">
    <h3>历史记录</h3>
    <div v-if="history.length === 0" class="empty">暂无历史记录</div>
    <ul v-else class="history-list">
      <li v-for="(item, index) in history" :key="index" @click="loadFromHistory(item)">
        <span class="expr">{{ item.expression }}</span>
        <span class="result">{{ item.result }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.history-panel {
  padding: 16px;
  background: var(--display-bg);
  min-height: 320px;
  overflow-y: auto;
}

h3 {
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 500;
  color: var(--text-secondary);
}

.empty {
  color: var(--text-secondary);
  text-align: center;
  padding: 40px 20px;
  opacity: 0.6;
}

.history-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.history-list li {
  padding: 14px 10px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.history-list li:hover {
  background: var(--btn-number);
  border-radius: 12px;
}

.expr {
  display: block;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.result {
  display: block;
  font-size: 22px;
  color: var(--text-color);
  font-weight: 500;
}
</style>
