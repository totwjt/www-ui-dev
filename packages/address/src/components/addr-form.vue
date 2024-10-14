<template>
  <div class="address-form">
    <a-form
      :model="addressForm"
      :rules="rules"
      ref="formRef"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-form-item
        label="收件人"
        name="receiverName"
        :rules="[{ required: true, message: '请选择收件人' }]"
      >
        <a-input
          v-model:value="addressForm.receiverName"
          maxlength="20"
          placeholder="请输入收件人"
        />
      </a-form-item>

      <a-form-item
        label="手机号"
        name="receiverPhone"
        :rules="[{ required: true, message: '请输入手机号' }]"
      >
        <a-input
          v-model:value="addressForm.receiverPhone"
          maxlength="11"
          placeholder="请输入手机号"
        />
      </a-form-item>

      <a-form-item
        label="收件地"
        name="provinceCode"
        class="validateLocation"
        :rules="[{ required: true, message: '收件地必填' },{ validator: validateLocation, trigger: 'change' }]"
      >
        <!-- 使用 slot -->
        <slot name="locationName" />
        <!-- <locationName
            ref="locationNameRef"
            v-model:areaCodeData="location"
            v-model:areaNameData="includeLabelData"
        /> -->
      </a-form-item>

      <a-form-item
        label="详细地址"
        name="address"
        :rules="[{ required: true, message: '请输入详细街道地址' }]"
      >
        <a-auto-complete
          v-model:value="addressForm.address"
          :options="props.completeOptions"
          :field-names="{ label: 'title', value: 'title' }"
          style="width: 400px"
          placeholder="请输入详细地址"
          @change="onChangeComplete"
          @select="onSelectComplete"
          @search="onSearchComplete"
        >
          <template #option="{ title, address }">
            {{ title }} - {{ address }}
          </template>
        </a-auto-complete>
      </a-form-item>

      <a-form-item label="门牌号" name="houseNumber">
        <a-input
          v-model:value="addressForm.houseNumber"
          maxlength="50"
          placeholder="选填，例1号楼1单元101"
        />
      </a-form-item>

      <a-form-item label="地址粘贴板">
        <slot name="addressRecognition"></slot>
        <!-- <AddressRecognition
          ref="AddressRecognitionRef"
          @onChange="addressRecognitionHandler"
          :autoSize="{ minRows: 4, maxRows: 8 }"
          style="width: 315px; background-color: #f9f9f9"
        /> -->
      </a-form-item>

      <a-form-item name="hasDefAddress" style="padding-left: 86px">
        <a-checkbox
          :checked="addressForm.hasDefAddress == 1"
          @change="
            (e) => (addressForm.hasDefAddress = e.target.checked ? 1 : 0)
          "
        >
          设为默认地址
        </a-checkbox>
      </a-form-item>
    </a-form>

    <a-form-item class="text-center">
      <a-button
        style="max-width: 80%"
        type="primary"
        size="large"
        block
        @click.prevent="onSubmit"
        >保存</a-button
      >
    </a-form-item>
  </div>
</template>
<script setup lang="ts" name="addr-form">
import { ref, defineExpose, defineEmits, watch } from 'vue'
import { IAddressItem } from '../types'
// import { Form } from 'ant-design-vue'

const emits = defineEmits([
  'onSelectCompleteEmit',
  'onSearchCompleteEmit',
  'onFormSubmitEmit',
  'locationEmit'
])

const props = defineProps({
  completeOptions: {
    type: Array,
    default: () => []
  },
  editItem: {
    type: Object,
    default: () => {}
  },
  setAddressForm: {
    type: Object,
    default: () => {}
  }

})

const formRef = ref()
const addressForm = ref(<IAddressItem>{})

const locationFucc = (val) => {
  const { provinceCode, provinceName, cityCode, cityName, countryCode, countryName } = val
  emits('locationEmit', Object.assign(val, {
    operateType: 'location',
    location: [provinceCode, cityCode, countryCode],
    includeLabelData: [provinceName, cityName, countryName]
  }))
}

watch(() => props.editItem, val => {
  console.log('editItem2', val)
  if (val && Object.keys(val).length) {
    addressForm.value = val

    // fixbug 实例ref可能不存在，导致报错
    if (val?.provinceCode) locationFucc(val)
  } else {
    addressForm.value = {}
  }
}, { immediate: true, deep: true })

// const useForm = Form.useForm
// const { resetFields, validate, validateInfos } = useForm(addressForm, rulesRef, {
//   onValidate: (...args) => console.log(...args)
// })

const rules = ref({
  receiverName: [{ required: true, message: '请输入收件人' }],
  receiverPhone: [{ required: true, message: '请输入手机号' }],
  address: [{ required: true, message: '请输入详细地址' }]
})
const validateLocation = (rule, value) => {
  if (addressForm.value.cityCode && addressForm.value.countryCode && addressForm.value.provinceCode) {
    return Promise.resolve()
  } else return Promise.reject(new Error('收件地址不完整'))
}

// 详细地址

// const completeOptions = ref([])

const onChangeComplete = (value) => {
  console.log('onChangeComplete', value)
}
const onSelectComplete = (value, option) => {
  console.log('addressForm', addressForm.value)
  console.log('onSelectComplete', value, option)
}
const onSearchComplete = (value) => {
  emits('onSearchCompleteEmit', value)
}

const onSubmit = () => {
  formRef.value
    ?.validate()
    .then(() => {
      emits('onFormSubmitEmit', addressForm.value)
    })
    .catch((err) => {
      console.log('err', err)
    })
}

// 导出
const set = (item: IAddressItem) => {
  addressForm.value = Object.assign(addressForm.value, item)
  formRef.value?.validate()
  console.log('addressForm.value', addressForm.value)
}

watch(() => props.setAddressForm, val => {
  set(val)
})

defineExpose({ set })
</script>

<style scoped lang="scss"></style>
