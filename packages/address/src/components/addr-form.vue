<template>
  <div class="address-form">
    <a-form
      style="max-width: 600px"
      :model="addressItem"
      :rules="rules"
      ref="formRef"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-form-item
        label="收件人"
        name="receiverName"
        :rules="[{ required: true, message: '请输入收件人' }]"
      >
        <a-input
          v-model:value="addressItem.receiverName"
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
          v-model:value="addressItem.receiverPhone"
          maxlength="11"
          placeholder="请输入手机号"
        />
      </a-form-item>

      <a-form-item
        label="收件地"
        name="location"
        :rules="[{ required: true, message: '请选择收件地' }]"
      >
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
          v-model:value="addressItem.address"
          :options="completeOptions"
          style="width: 400px"
          placeholder="请输入详细地址"
          @select="onSelectComplete"
          @search="onSearchComplete"
        />
      </a-form-item>

      <a-form-item label="门牌号" name="houseNumber">
        <a-input
          v-model:value="addressItem.houseNumber"
          maxlength="50"
          placeholder="请输入，例1号楼1单元101"
        />
      </a-form-item>

      <a-form-item label="地址粘贴板">
        <AddressRecognition
          ref="AddressRecognitionRef"
          @onChange="addressRecognitionHandler"
          :autoSize="{ minRows: 4, maxRows: 8 }"
          style="width: 315px; background-color: #f9f9f9"
        />
      </a-form-item>
    </a-form>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" @click.prevent="onSubmit">保存</a-button>
    </a-form-item>
  </div>
</template>
<script setup lang="ts" name="addr-form">
import { ref, defineExpose, defineEmits } from 'vue'
import { IAddressItem } from '../types'
// import { Form } from 'ant-design-vue'

const formRef = ref()
const addressItem = ref(<IAddressItem>{})

// const useForm = Form.useForm
// const { resetFields, validate, validateInfos } = useForm(addressItem, rulesRef, {
//   onValidate: (...args) => console.log(...args)
// })

const rules = ref({
  receiverName: [{ required: true, message: '请输入收件人' }],
  receiverPhone: [{ required: true, message: '请输入手机号' }],
  address: [{ required: true, message: '请输入详细地址' }]
})

// 详细地址
const emits = defineEmits([
  'onSelectCompleteEmit',
  'onSearchCompleteEmit'
])
const completeOptions = ref([])
const onSelectComplete = (value: string) => {
  emits('onSelectCompleteEmit', value)
}
const onSearchComplete = (value: string) => {
  console.log('onSearchComplete')
  emits('onSearchCompleteEmit', value)
}

const onSubmit = () => {
  formRef.value
    ?.validate()
    .then(() => {
      // linkSave();
    })
    .catch((err) => {
      console.log('err', err)
    })
}

// 导出
const set = (item: IAddressItem) => {
  addressItem.value = item
}

defineExpose({ set })
</script>

<style scoped lang="scss"></style>
