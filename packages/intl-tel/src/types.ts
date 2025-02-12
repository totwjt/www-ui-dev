import { ExtractPropTypes } from 'vue'

export const intlTelProps = {

  modelValue: Object, // v-model 使用的整个对象
  mod: {
    type: String,
    default: 'edit' // 默认值为编辑模式 edit/view
  },
  type: {
    type: String,
    default: '0'
  }
} as const

export type IntlTelProps = ExtractPropTypes<typeof intlTelProps>
