<template>
  <div class="address-item">
    <a-descriptions bordered :column="4" size="small" class="contentClass">
      <a-descriptions-item :label="null" :span="2">{{
        props.item.receiverName
        }}</a-descriptions-item>
      <a-descriptions-item :span="2">{{
        props.item.receiverPhone
        }}</a-descriptions-item>
      <a-descriptions-item :span="4">{{
        props.item.address
        }}</a-descriptions-item>
      <a-descriptions-item :span="4">
        <div class="btns w-100 flex row-between col-center">
          <div>
            <a-checkbox v-if="props.defaultSta" :checked="props.defaultAddress == props.item.id" :value="props.item.id"
              @change="changeDefault">
              {{ props.defaultAddress == props.item.id ? '已默认' : '设为默认' }}
            </a-checkbox>
          </div>
          <div>
            <a-space>
              <a-popconfirm placement="leftBottom" ok-text="确认" cancel-text="取消" @confirm="operateClick('delete')">
                <template #title>
                  <p>确定此操作？</p>
                </template>

                <a-button size="default" type="primary" danger @click.stop>
                  <template #icon><delete-outlined /></template>
                  删除
                </a-button>
              </a-popconfirm>

              <a-button size="default" type="primary" @click.stop="operateClick('update')">
                <template #icon><edit-outlined /></template>
                修改
              </a-button>

              <!-- <a-popconfirm placement="leftBottom" ok-text="确认" cancel-text="取消" @confirm="operateClick('choose')">
                <template #title>
                  <h4>确认:</h4>
                  <p>已与患者确认<span style="color:#00B3EF">使用该收药地址</span>？</p>
                </template> -->

              <a-button v-if="props.defaultAddrNo!=item.id" size="default" type="text" style="background-color: orange; color: #fff"
                @click="operateClick('choose')">
                <template #icon><check-square-outlined /></template>
                  使用
              </a-button>
              <!-- </a-popconfirm> -->
            </a-space>
          </div>
        </div>
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, onMounted, watch } from 'vue'
import { $eventBus } from '@demo-ui-lib/demo-ui-lib'
import {
  DeleteOutlined,
  EditOutlined,
  CheckSquareOutlined
} from '@ant-design/icons-vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => { }
  },
  defaultAddress: {
    type: String,
    default: ''
  },
  defaultSta: {
    type: Boolean,
    default: false
  },
  defaultAddrNo: {
    type: String,
    default: ''
  }
})

const checkedSta = ref(false)
const defaultAddressId = ref('')

onMounted(() => {
  checkedSta.value = props.item.hasDefAddress === 1
  defaultAddressId.value = props.defaultAddress
})
watch(() => props.item.hasDefAddress, (newVal) => {
  checkedSta.value = newVal === 1
})
watch(() => props.defaultAddress, (newVal) => {
  defaultAddressId.value = newVal
})

// const contentStyle = computed(() => {
//   const bgColor = chooseId.value === '1234' ? '#419cff' : '#fafafa'
//   const color = chooseId.value === '1234' ? 'white' : '#000000d9'

//   return {
//     cursor: 'pointer',
//     backgroundColor: bgColor,
//     color
//   }
// })

const emits = defineEmits(['operateClick'])

const operateClick = (type: string) => {
  emits('operateClick', Object.assign({ operateType: type }, props.item))
  $eventBus.emit('Address_operateClick', Object.assign({ operateType: type }, props.item))
}

const changeDefault = (e) => {
  const { value } = e.target
  console.log('changeDefault', value, defaultAddressId.value, value === defaultAddressId.value)
  if (value === defaultAddressId.value) {
    return
  }

  operateClick('setDefault')
}
</script>

<style scoped lang="scss">
.contentClass:hover {
  background-color: #f9f9f9;
}

.address-item {
  :deep(.ant-descriptions-view) {
    box-shadow: 2px 1px 3px 0px rgba(0, 0, 0, 0.2)
  }
}
</style>
