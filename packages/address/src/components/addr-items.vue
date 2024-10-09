<template>
  <div>
    <a-descriptions
      bordered
      :column="4"
      @click.stop="chooseId = '1234'"
      size="small"
      class="contentClass"
      :labelStyle="contentStyle"
      :contentStyle="contentStyle"
    >
      <a-descriptions-item :label="null" :span="2"
        >章三名字</a-descriptions-item
      >
      <a-descriptions-item :span="2">17363277123</a-descriptions-item>
      <a-descriptions-item :span="4"
        >北京市朝阳区大院刚到手 大师对哈速度哈扫地机取货</a-descriptions-item
      >
      <a-descriptions-item :span="4">
        <div class="btns w-100 flex row-between col-center">
          <a-checkbox
            :style="contentStyle"
            v-model:checked="checked"
            @click.stop
            >默认</a-checkbox
          >
          <div>
            <a-space>
              <a-popconfirm
                placement="leftBottom"
                ok-text="Yes"
                cancel-text="No"
                @confirm="operateClick('delete')"
              >
                <template #title>
                  <p>确定此操作？</p>
                </template>

                <a-button
                  size="default"
                  type="primary"
                  danger
                  @click.stop
                >
                  <template #icon><delete-outlined /></template>
                  删除
                </a-button>
              </a-popconfirm>

              <a-button
                size="default"
                type="primary"
                @click.stop="operateClick('update')"
              >
                <template #icon><edit-outlined /></template>
                修改
              </a-button>

              <a-button
                size="default"
                type="text"
                style="background-color: orange; color: #fff"
                @click.stop="operateClick('update')"
              >
                <template #icon><check-square-outlined /></template>
                使用
              </a-button>
            </a-space>
          </div>
        </div>
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { DeleteOutlined, EditOutlined, CheckSquareOutlined } from '@ant-design/icons-vue'
const checked = ref(true)
const chooseId = ref('123')

const contentStyle = computed(() => {
  const bgColor = chooseId.value === '1234' ? '#419cff' : '#f9f9f9'
  const color = chooseId.value === '1234' ? 'white' : '#000000d9'

  return {
    cursor: 'pointer',
    backgroundColor: bgColor,
    color
  }
})

const operateClick = (type: string) => {
  alert(type)
}
</script>

<style scoped>
.contentClass:hover {
  background-color: #f9f9f9;
}
</style>
