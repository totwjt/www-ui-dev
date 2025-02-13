<template>
  <!-- <div class="www-intl-tel intl-tel"> -->
  <!-- 区域选择 -->
  <template v-if="getText">
    <span v-if="props.showIcon" class="flag" :class="areaCode"></span>
    <span class="f13" :style="setStyle">{{ getText }}</span>
  </template>

  <!-- <a-select
      v-if="mod === 'edit' || mode === 'create'"
      v-model="selectedPhoneType"
      style="width: 200px"
      @change="handlePhoneTypeChange"
      placeholder="请选择区域"
    >
      <a-select-option
        v-for="(item, key) in phoneTypeMap"
        :key="key"
        :value="key"
      >
        <span>{{ item.flag }} {{ item.label }} +{{ item.code }}</span>
      </a-select-option>
    </a-select> -->

  <!-- 手机号输入框 -->
  <!-- <a-input
      v-if="mode === 'edit' || mode === 'create'"
      v-model="phone"
      placeholder="请输入手机号"
      @blur="handlePhoneBlur"
      style="margin-top: 20px;"
    />-->

  <!-- 仅渲染模式下显示手机号和区域 -->
  <!-- <div v-if="mod === 'view'" style="margin-top: 20px;">
      <p>已选择区域：{{ phoneTypeMap[selectedPhoneType].label }} ({{ phoneTypeMap[selectedPhoneType].flag }} +{{ phoneTypeMap[selectedPhoneType].code }})</p>
      <p>手机号：{{ phone }}</p>
    </div> -->
  <!-- </div> -->
</template>

<script lang="ts" setup name="www-intl-tel">
import { defineProps } from 'vue'
import { intlTelProps } from './types'

import { useIntlTel } from './hooks'

const props = defineProps(intlTelProps)

const {
  areaCode,
  getText
} = useIntlTel(props)

</script>

<style scoped lang="scss">
// .intl-tel {
// &__area {

.flag {
  margin-right: 5px;
  margin-left: 5px;
  width: 20px;
  height: 15px;
  box-shadow: 0 0 1px #888;
  background-image: url('./icon.png');
  background-repeat: no-repeat;
  background-color: #dbdbdb;
  background-position: 20px 0;
  display: inline-block;
  vertical-align: middle;
}

.cn {
  height: 14px;
  background-position: -1049px 0px;
}

.tw {
  height: 14px;
  background-position: -5131px 0px;
}

.hk {
  height: 14px;
  background-position: -2171px 0px;
}

.mo {
  height: 14px;
  background-position: -3358px 0px;
}

// }
// }</style>
