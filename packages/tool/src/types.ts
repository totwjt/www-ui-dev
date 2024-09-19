import { ExtractPropTypes } from 'vue'

export const toolProps = {
} as const

export type ToolProps = ExtractPropTypes<typeof toolProps>
