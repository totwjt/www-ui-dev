import { ExtractPropTypes, VNode } from 'vue'

export const addressProps = {
} as const

export type AddressProps = ExtractPropTypes<typeof addressProps>

export type AddrConfig = {
    subTitle: string|VNode,
    showSubTitle?: boolean,
}
