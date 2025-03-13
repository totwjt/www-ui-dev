<template>
  <div class="www-index-bar-layout">
    <a-modal destroyOnClose v-bind="$attrs" maskClosable class="www-index-bar-modal" :visible="visible" :width="800"
      :bodyStyle="{ maxHeight: '50vh', overflowY: 'auto',overflowX:'hidden', minHeight: '400px' }" :footer="null" @cancel="close">

      <template #title>
        <div class="title-lay">
          <div class="flex1">所属国家选择</div>
          <div class="flex2">
            <a-input @input="HandleChange" v-model:value="keywords" placeholder="输入关键词搜索" :bordered="false"
              style="width: 200px">
              <template #prefix>
                <search-outlined style="color: rgba(0, 0, 0, 0.25)" />
              </template>
            </a-input>
          </div>
        </div>
      </template>

      <IndexBar >

        <template v-for="item in indexList" :key="item.letter">

          <IndexAnchor :index="item.letter" />

          <Cell @click="HandleClick(itemCode)" :value="itemCode.code" :title="itemCode.name"
            v-for="itemCode in item.countries" :key="itemCode.code" />
        </template>

      </IndexBar>

    </a-modal>
  </div>
</template>

<script lang="ts" setup name="www-index-bar">
import { defineProps, ref } from 'vue'
import { indexBarProps } from './types'
import { IndexBar, IndexAnchor, Cell } from 'vant'
import 'vant/lib/index.css'
import {
  SearchOutlined
} from '@ant-design/icons-vue'

import { countriesGrouped, searchCountries } from './fucc'

defineProps(indexBarProps)

const visible = ref(<boolean>false)
const keywords = ref(<string>'')
const indexList = ref(countriesGrouped)

const emits = defineEmits([
  'clickEmit'
])

const HandleClick = (item) => {
  close()

  emits('clickEmit', item)
}

const open = () => {
  visible.value = true
}

const close = () => {
  visible.value = false
}

const HandleChange = (e) => {
  console.log('eee', e, e.value, keywords.value)
  if (keywords.value === '') return
  indexList.value = searchCountries(keywords.value)
}

defineExpose({ open })

</script>

<style scoped lang="scss">
.title-lay {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .flex1 {
    flex-shrink: 0;
  }

  .flex2 {
    margin: 0 auto;
  }

}

:deep(.van-index-bar__sidebar) {
  position: absolute !important;
  right: 20px;
  top: 55%;
}

:deep(.van-cell) {
  cursor: pointer;
  padding-right: 40px;
}
</style>
