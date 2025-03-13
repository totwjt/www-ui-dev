<template>
  <www-index-bar  @clickEmit="HandleClickEmit" ref="indexBarRef" />

  <a-button @click="() => indexBarRef.open()">open</a-button>

  {{ res }}

</template>

<script setup lang="ts">
import { ref } from 'vue'

const indexBarRef = ref()

const res = ref({})

const HandleClickEmit = (item: any) => {
  res.value = item
}
</script>

<style scoped></style>
