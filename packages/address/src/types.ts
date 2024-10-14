import { ExtractPropTypes, VNode } from 'vue'

export const addressProps = {
  addressRes: {
    type: Object,
    default: () => ({})
  },
  setAddressForm: {
    type: Object,
    default: () => ({})
  }
} as const

export type AddressProps = ExtractPropTypes<typeof addressProps>;

export type IAddressParams = Partial<{
  wxUserId: string;
  searchContent: string;
  curPage: number;
  pageSize: number;
}>;

export type IAddressItem = Partial<{
  id: string;
  wxUserId: string;
  receiverName: string;
  receiverPhone: string;
  provinceCode: number;
  provinceName: string;
  cityCode: number;
  cityName: string;
  countryCode: number;
  countryName: string;
  address: string;
  createTime: number; // Assuming this is a timestamp
  deleted: number; // Assuming 0 means not deleted, 1 means deleted
  houseNumber: string;
  hasDefAddress: number; // Assuming 0 means false, 1 means true for default address
}>;

export type IAddressRes = {
  records?: IAddressItem[];
  total?: number;
  size?: number;
  current?: number;
  orders?: any;
  optimizeCountSql?: boolean;
  hitCount?: boolean;
  countId?: any;
  maxLimit?: any;
  searchCount?: boolean;
  pages?: number;
};

export type AddrConfig = {
    subTitle: string | VNode;
    showSubTitle?: boolean;
    addressParams?: IAddressParams;
    addressRes?: IAddressRes;
  };
