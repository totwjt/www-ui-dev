<template>
  <a-descriptions :column="2">
    <a-descriptions-item v-for="(item, index) in arr" :key="index" :label="item">{{
      phonePattern(String(index)) }}</a-descriptions-item>
  </a-descriptions>
  <p>case '0': // 中国大陆 11位数字，且以 13-19 开头 </p>
  <p>case '1': // 中国香港 8位数字，且以 6-9 开头 </p>
  <p>case '2': // 中国澳门 8位数字，且以 6-9 开头 </p>
  <p>case '3': // 中国台湾 10位数字，且以 09 开头 </p>
</template>

<script lang="ts" setup>
// 平台信息
import { phonePattern } from '@demo-ui-lib/demo-ui-lib'
import { ref } from 'vue'
const arr = ref(['陆', '港', '澳', '台'])
</script>

<style scoped lang="scss"></style>
