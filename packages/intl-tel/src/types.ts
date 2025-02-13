import { ExtractPropTypes } from 'vue'

export const intlTelProps = {

  modelValue: Object || String, // v-model 使用的整个对象
  mod: {
    type: String,
    default: 'edit' // 默认值为编辑模式 edit/view
  },
  phone: {
    type: String,
    default: undefined // 电话号码
  },
  type: {
    type: String,
    default: '0'
  },
  setStyle: Object
} as const

export type IntlTelProps = ExtractPropTypes<typeof intlTelProps>
