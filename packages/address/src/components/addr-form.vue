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
        :rules="[
            { required: true, message: '请输入手机号' },
            { validator: validatePhone, trigger: 'change' }
        ]"
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
          @change="onChangeComplete"
          @select="onSelectComplete"
          @search="onSearchComplete"
        >

            <a-textarea
                placeholder="请输入详细地址"
                class="custom"
                allowClear
                showCount
                :maxlength="100"
                style="height: 50px"
            />

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
import { ref, defineExpose, defineEmits, watch, computed } from 'vue'
import { IAddressItem } from '../types'
// import { Form } from 'ant-design-vue'

const emits = defineEmits([
  'onSelectCompleteEmit',
  'onSearchCompleteEmit',
  'onFormSubmitEmit',
  'addressAreaEmit',
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
  },
  defaultAddress: {
    type: String,
    default: ''
  }

})

const formRef = ref()
const addressForm = ref(<IAddressItem>{})

// const locationFucc = (val) => {
//   const { provinceCode, provinceName, cityCode, cityName, countryCode, countryName } = val
//   emits('locationEmit', Object.assign(val, {
//     operateType: 'location',
//     location: [provinceCode, cityCode, countryCode],
//     includeLabelData: [provinceName, cityName, countryName]
//   }))
// }

watch(() => props.editItem, val => {
  console.log('editItem2', val)
  if (val && Object.keys(val).length) {
    addressForm.value = val

    // fixbug 实例ref可能不存在，导致报错
    // if (val?.provinceCode) locationFucc(val)
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
const validatePhone = (rule, value) => {
  const phoneRegex = /^1[3-9]\d{9}$/
  if (!value) {
    return Promise.reject(new Error('请输入手机号'))
  } else if (!phoneRegex.test(value)) {
    return Promise.reject(new Error('请输入正确的手机号'))
  } else {
    return Promise.resolve()
  }
}

// 详细地址

// const completeOptions = ref([])

const onChangeComplete = (value) => {
  console.log('onChangeComplete', value)
}
const onSelectComplete = (value, option) => {
  console.log('onSelectComplete', value, option)
  addressForm.value.address = `${value}${option.address}`
  const codeArr = __parseAdcode(option.adcode)
  addressForm.value.address = `${value}${option.address}`
  console.log('codeArr', codeArr)

  addressForm.value.cityCode = codeArr[1]
  addressForm.value.cityName = option.city
  addressForm.value.countryCode = codeArr[2]
  addressForm.value.countryName = option.district
  addressForm.value.provinceCode = codeArr[0]
  addressForm.value.provinceName = option.province

  emits('onSelectCompleteEmit', { value, option })
  emits('addressAreaEmit', [codeArr, [option.province, option.city, option.district]])
}
function __parseAdcode (adcode) {
  const adcodeStr = String(adcode)

  // 首先进行一些基础判断，确保 adcode 是合法的6位字符串
  if (adcodeStr.length !== 6) {
    throw new Error('adcode必须为6位数字')
  }

  const provinceCode = adcodeStr.substring(0, 2) + '0000' // 省级编码
  let cityCode = adcodeStr.substring(0, 4) + '00' // 市级编码
  const districtCode = adcodeStr // 区县级编码

  // 针对直辖市、特别行政区特殊处理（省和市的编码相同）
  const directCities = ['11', '31', '50', '12', '81', '82'] // 北京(11), 上海(31), 重庆(50), 天津(12), 香港(81), 澳门(82)
  if (directCities.includes(adcodeStr.substring(0, 2))) {
    cityCode = provinceCode // 直辖市的市级编码和省级编码一致
  }

  // 针对省直辖县的特殊情况处理，第3、4位为90
  if (adcodeStr.substring(2, 4) === '90') {
    cityCode = provinceCode // 省直辖县的市级编码和省级编码一致
  }

  // 针对东莞市(441900)、中山市(442000)、儋州市(460400) 等城市进行特殊处理
  const specialCities = ['441900', '442000', '460400', '620200']
  if (specialCities.includes(adcodeStr)) {
    cityCode = adcodeStr
  }

  // 最后返回省、市、区编码
  return [Number(provinceCode), Number(cityCode), Number(districtCode)]
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
  formRef.value?.validateFields('provinceCode')
  console.log('addressForm.value', addressForm.value)
}
const setAddressForm = computed(() => {
  return props.setAddressForm
})
watch(() => setAddressForm.value, val => {
  console.log('watch setAddressForm.value', setAddressForm.value)
  set(val)
})

defineExpose({ set })
</script>

<style scoped lang="scss"></style>
