<template>
  <div class="www-address">
    <a-drawer
      :visible="visible"
      :title="renderTitle"
      width="50%"
      @close="cancel"
      destroy-on-close
    >
      <!-- <div class="h-100" > -->
      <!-- <template #closeIcon>
        <CloseCircleOutlined style="color: #0090ff; font-size: 18px" />
      </template> -->

      <template #extra>
        <a-button class="ml10" type="primary" @click="visibleForm = true">
          <template #icon><plus-outlined /></template>
          新增地址
        </a-button>
      </template>

      <template #footer v-if="!visibleForm">
        <div class="flex row-between col-center pl10 pr20">

          <a-pagination
            @change="changePagination"
            v-model:current="addressPaginationCon.current"
            simple :total="addressPaginationCon.total"
          />

          <div class="flex row-end col-center">
            <a-typography-text class="pr20" type="danger"
              >“选择一个地址”</a-typography-text
            >
            <a-button size="large" type="primary" :disabled="disabled">
              <template #icon><check-outlined /></template>
              确定
            </a-button>
          </div>
        </div>
      </template>

      <div
        ref="addressContentRef"
        id="address-content"
        class="address-content h-100 w-100 relative flex-column row-left col-top"
        style="overflow: hidden"
      >
        <div class="w-100">
          <slot name="header1"></slot>
          <slot name="header2"></slot>
        </div>

        <!-- <a-affix :target="() => addressContentRef"> -->
        <div class="w-100 flex row-between col-center mb10">
          <a-input
            size="large"
            v-model:value="addressParams.searchContent"
            placeholder="请输入收货人姓名或手机号搜索"
            @change="onChange"
            @pressEnter="onChange"
          >
            <template #addonBefore>
              <loading-outlined v-if="searchLoading" />
              <search-outlined v-else />
            </template>
          </a-input>
        </div>
        <!-- </a-affix> -->

        <div
          class="address-list w-100 flex-1 pr10"
          id="addressList"
          style="overflow-y: scroll"
        >

          <template
            v-for="(item, index) in addressList"
            :key="index"
          >
            <address-item
              class="mb10"
              :item="item"
              @operateClick="operateClick"
            />
          </template>
        </div>
        <!-- </a-spin> -->
      </div>
    </a-drawer>

    <a-drawer
      title="收货地址维护 - 表单"
      placement="bottom"
      v-model:visible="visibleForm"
      :get-container="'#address-content'"
      :style="{ position: 'absolute' }"
      :destroy-on-close="true"
      height="80%"
      width="90%"
      :z-index="1050"
      maskStyle="background: rgba(0, 0, 0, 0.2)"
      :drawerStyle="{ border: '1px solid #eee' }"
      :maskClosable="false"
    >
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<script lang="ts" setup name="www-address">
import { ref, defineProps, defineExpose, computed, watch, h, defineEmits } from 'vue'
import { addressProps, AddrConfig, IAddressRes, IAddressParams } from './types'
import {
  SearchOutlined,
  PlusOutlined,
  CheckOutlined,
  LoadingOutlined
} from '@ant-design/icons-vue'
import addressItem from './components/addr-items.vue'

const emits = defineEmits(['copyInviteLinkEmit', 'searchEmit'])

const addressContentRef = ref(null)

defineProps(addressProps)
const visible = ref(false)
const visibleForm = ref(false)
const showSubTitle = ref(false) // 控制是否显示 subTitle
const addressRes = ref(<IAddressRes>{})

const disabled = ref(true)

const copyInviteLink = () => {
  console.log('复制邀请链接')
  emits('copyInviteLinkEmit')
}

const title = ref('收货地址维护')
const subTitle = ref<any>()
subTitle.value = h('div', { style: { fontSize: '13px' } }, [
  '完善此订单收药地址，页面链接：',
  // h('br'),
  h(
    'span',
    {
      onClick: copyInviteLink,
      style: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: '#1890ff'
      }
    },
    '点击复制邀请链接'
  ),
  h('span', { style: { color: 'red' } }, '（链接有效期为:24小时）')
])

const renderTitle = computed(() => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }
    },
    [
      h('span', { style: { marginRight: '8px' } }, title.value), // title 部分
      showSubTitle.value &&
        h('span', { style: { marginLeft: '8px' } }, subTitle.value) // 根据 showSubTitle 动态渲染 subTitle
    ]
  )
})

/* ----------------------------------------------------*\
｜                       搜索
\*---------------------------------------------------- */
const addressParams = ref(<IAddressParams>{})
const searchLoading = ref(false)

// input search
const onChange = __debounce((e) => {
  console.log('search', e?.target?.value)

  addressParams.value.searchContent = e?.target?.value
  emits('searchEmit', addressParams.value)
  searchLoading.value = true
}, 300)

// 按钮操作
const operateClick = (e) => {
  console.log('operateClick', e)
}

/* ----------------------------------------------------*\
｜                      列表
\*---------------------------------------------------- */

const addressList = computed(() => {
  return addressRes.value?.records || []
})

/* ----------------------------------------------------*\
｜                       分页
\*---------------------------------------------------- */

const addressPaginationCon = ref({
  current: 1,
  total: 0,
  pageSize: 10
})
watch(() => addressRes.value, val => {
  addressPaginationCon.value.current = val?.current || 1
  addressPaginationCon.value.total = val?.total || 0
  addressPaginationCon.value.pageSize = val?.size || 10
})

// 分页 change
const changePagination = (page, pageSize) => {
  addressParams.value.curPage = page
  addressParams.value.pageSize = pageSize
  emits('searchEmit', addressParams.value)
}

/* ----------------------------------------------------*\
｜                       导出方法
\*---------------------------------------------------- */

// 打开地址
const show = (config: AddrConfig) => {
  console.log('config', config)
  visible.value = true
  showSubTitle.value = config?.showSubTitle || false
  if ('subTitle' in config) subTitle.value = config.subTitle
  if ('addressParams' in config) addressParams.value = config.addressParams || {}
  if ('addressRes' in config) addressRes.value = config.addressRes || {}
}

const cancel = () => {
  visible.value = false
}

const showForm = () => {
  visibleForm.value = true
}

const setAddressRes = (res: IAddressRes) => {
  addressRes.value = res
}

defineExpose({ show, cancel, showForm, setAddressRes })

function __debounce (fn: (...args: any[]) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
</script>

<style scoped lang="scss">
.www-address {
  :deep(.ant-drawer-close) {
    position: absolute;
    right: 0;
  }
}
</style>
