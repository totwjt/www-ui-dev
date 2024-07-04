import { ExtractPropTypes } from 'vue'

export const coverBoxProps = {
  bgColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.5)'
  },
  iconColor: {
    type: String,
    default: 'rgb(150 229 255)'
  },
  width: {
    type: String,
    default: '100px'
  },
  height: {
    type: String,
    default: '100px'
  }
} as const

export type CoverBoxProps = ExtractPropTypes<typeof coverBoxProps>;
