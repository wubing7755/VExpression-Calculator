<script setup lang="ts">
defineOptions({
  name: 'DisplayComponent',
})

import { useCalculatorStore } from '@/stores/calculator'
import { storeToRefs } from 'pinia'

const store = useCalculatorStore()

const { display, expression } = storeToRefs(store)
</script>

<template>
  <div class="display">
    <div class="expression">{{ expression || ' ' }}</div>
    <div class="result">{{ display }}</div>
  </div>
</template>

<style scoped>
.display {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 60px 24px 24px;
  min-height: 140px;
  background: var(--display-bg);
}

.expression {
  font-size: 20px;
  color: var(--text-secondary);
  min-height: 24px;
  opacity: 0.7;
}

.result {
  font-size: 56px;
  font-weight: 300;
  color: var(--text-color);
  word-break: break-all;
  max-width: 100%;
  line-height: 1.1;
  margin-top: 8px;
}
</style>
