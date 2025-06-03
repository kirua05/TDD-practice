<script setup>
import { ref } from 'vue'

// 初始值 0
const count = ref(0)

// 限制不能低於 0
const decrement = () => {
  if (count.value > 0) {
    count.value--
  }
}

// 正常加 1
const increment = () => {
  count.value++
}

</script>

<template>
  <button @click="decrement" data-testid="minusBtn">-</button>
  <span>{{ count }}</span>
  <button @click="increment" data-testid="plusBtn">+</button>
</template>