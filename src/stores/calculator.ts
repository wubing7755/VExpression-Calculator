import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCalculatorStore = defineStore('calculator', () => {
  const display = ref('0')
  const expression = ref('')
  const previousOperand = ref<string | null>(null)
  const operator = ref<string | null>(null)
  const shouldResetDisplay = ref(false)
  const history = ref<{ expression: string; result: string }[]>([])

  function clear() {
    display.value = '0'
    expression.value = ''
    previousOperand.value = null
    operator.value = null
    shouldResetDisplay.value = false
  }

  function appendNumber(num: string) {
    if (shouldResetDisplay.value) {
      display.value = num
      shouldResetDisplay.value = false
    } else {
      display.value = display.value === '0' ? num : display.value + num
    }
  }

  function appendDecimal() {
    if (shouldResetDisplay.value) {
      display.value = '0.'
      shouldResetDisplay.value = false
      return
    }
    if (!display.value.includes('.')) {
      display.value = display.value + '.'
    }
  }

  function toggleSign() {
    if (display.value === '0') return
    display.value = String(-Number.parseFloat(display.value))
  }

  function percentage() {
    display.value = String(Number.parseFloat(display.value) / 100)
  }

  function setOperator(op: string) {
    if (operator.value && !shouldResetDisplay.value) {
      calculate()
    }
    previousOperand.value = display.value
    operator.value = op
    expression.value = `${previousOperand.value} ${op}`
    shouldResetDisplay.value = true
  }

  function calculate() {
    if (operator.value === null || previousOperand.value === null) return

    const prev = Number.parseFloat(previousOperand.value)
    const current = Number.parseFloat(display.value)
    let result: number

    switch (operator.value) {
      case '+':
        result = prev + current
        break
      case '-':
        result = prev - current
        break
      case '×':
        result = prev * current
        break
      case '÷':
        if (current === 0) {
          display.value = 'Error'
          operator.value = null
          previousOperand.value = null
          return
        }
        result = prev / current
        break
      default:
        return
    }

    // 处理浮点数精度问题
    display.value = String(Math.round(result * 100000000) / 100000000)
    expression.value = `${previousOperand.value} ${operator.value} ${current} =`
    operator.value = null
    previousOperand.value = null
    shouldResetDisplay.value = true

    history.value.unshift({ expression: expression.value, result: display.value })

    if (history.value.length > 10) {
      history.value.pop()
    }
  }

  return {
    display,
    expression,
    history,
    clear,
    appendNumber,
    appendDecimal,
    toggleSign,
    percentage,
    setOperator,
    calculate,
  }
})
