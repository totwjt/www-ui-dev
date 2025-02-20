<template>

  <h4>枚举</h4>
  <vue-json-pretty :data="phoneDict" />

  <a-descriptions :column="2" title="正则规则">
    <a-descriptions-item v-for="(item, index) in arr" :key="index" :label="item">{{
      phonePattern(String(index)) }}</a-descriptions-item>
  </a-descriptions>

  <h3>根据 type 获取地区前缀 </h3>
  <a-descriptions bordered :column="2" type="根据type获取地区前缀">
    <a-descriptions-item label="0"> {{ showMobilePhoneAreaCodeByType('0') }}</a-descriptions-item>
    <a-descriptions-item label="1"> {{ showMobilePhoneAreaCodeByType('1') }}</a-descriptions-item>
    <a-descriptions-item label="2"> {{ showMobilePhoneAreaCodeByType('2') }}</a-descriptions-item>
    <a-descriptions-item label="3"> {{ showMobilePhoneAreaCodeByType('3') }}</a-descriptions-item>

  </a-descriptions>
</template>

<script lang="ts" setup>
// 平台信息
import { phonePattern, showMobilePhoneAreaCodeByType, phoneDict } from '@demo-ui-lib/demo-ui-lib'
import { ref } from 'vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
const arr = ref(['陆', '港', '澳', '台'])
</script>

<style scoped lang="scss"></style>
