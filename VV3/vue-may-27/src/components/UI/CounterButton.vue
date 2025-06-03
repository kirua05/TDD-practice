<script setup>
import { ref } from 'vue'

const props = defineProps({
  initCount: {
    type: Number,
    default: 0
  }
})
const count = ref(props.initCount) 

const increment = () => {
  count.value++
} 

</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>