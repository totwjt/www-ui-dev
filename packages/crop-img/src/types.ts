import { ExtractPropTypes } from 'vue'

export const cropImgProps = {
} as const

export type CropImgProps = ExtractPropTypes<typeof cropImgProps>
