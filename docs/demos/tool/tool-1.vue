<template>
  <a-descriptions :column="1">
    <a-descriptions-item v-for="(item, index) in platformRes" :key="index" :label="index">{{ item }}</a-descriptions-item>
  </a-descriptions>
</template>

<script lang="ts" setup>
// 平台信息
import { platform } from '@demo-ui-lib/demo-ui-lib'
import { computed } from 'vue'
const platformRes = computed(() => {
  const res = platform()
  return res
})
</script>

<style scoped lang="scss">
</style>
