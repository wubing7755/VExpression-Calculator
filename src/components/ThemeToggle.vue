<script setup lang="ts">
defineOptions({
  name: 'ThemeToggleComponent',
})

import { ref, onMounted } from 'vue'

const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (
    saved === 'dark' ||
    (!saved && globalThis.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <button class="theme-toggle" @click="toggleTheme">
    {{ isDark ? '☀️' : '🌙' }}
  </button>
</template>

<style scoped>
.theme-toggle {
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

.theme-toggle:hover {
  transform: scale(1.1);
}
</style>
