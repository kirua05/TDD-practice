<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>

<template>
  <input type="text" v-model="inputValue">
  <p>你輸入了 {{ inputValue.length }} 個字</p>
</template>