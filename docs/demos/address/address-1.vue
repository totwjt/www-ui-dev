<template>

  <h1>地址管理</h1>
  <a-button @click="HandleAddress">地址管理</a-button>

  <www-address
      :setAddressForm="setAddressForm"
      ref="addressRef"
      @copyInviteLinkEmit="copyInviteLinkEmit"
      @searchEmit="searchEmit"
      @operateClickEmit="operateClickEmit"
      @searchCompleteEmit="searchCompleteEmit"
      @selectCompleteEmit="selectCompleteEmit"
      @addressAreaEmit="addressAreaEmit"
      @formSubmitEmit="formSubmitEmit"
    >
      <template #header1>
        <div class="flex row-between col-center pb20 m10">
          <div>
            <div>张三名 17363277123</div>
            <div>北京市朝阳区大院刚到手 大师对哈速度哈扫地机取货</div>
          </div>
          <a-button @click="addressEdit">修改</a-button>
        </div>
      </template>
      <template #locationName>
        <a-button @click="localName">联动插槽</a-button>
      </template>
    </www-address>
</template>

<script lang="ts" setup>
/* ----------------------------------------------------*\
｜                       地址管理
\*---------------------------------------------------- */
import { ref } from 'vue'
const setAddressForm = ref({})

const addressRef = ref()
const copyInviteLinkEmit = () => {
  console.log('copyInviteLinkEmit')
  alert('copyInviteLinkEmit')
}
export type IAddressParams = Partial<{
    wxUserId: string,
    searchContent: string,
    curPage: number,
    pageSize: number
}>
const addressParams = ref(<IAddressParams>{
  curPage: 1,
  pageSize: 10
})

const HandleAddress = () => {
  setTimeout(() => {
    addressRef.value.show({
    // subTitle: subtitle
      showSubTitle: true,
      addressParams: addressParams.value,
      addressRes: {
        records: [
          {
            id: '1021143954072010752',
            wxUserId: '858021512001617920',
            receiverName: '张荣俊',
            receiverPhone: '15090245575',
            provinceCode: 110000,
            provinceName: '北京市',
            cityCode: 110100,
            cityName: '市辖区',
            countryCode: 110102,
            countryName: '西城区',
            address: '不合法的v你扣税的接口v监控数据库v金克斯金克斯v',
            createTime: 1723626156219,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          },
          {
            id: '1036330279909720064',
            wxUserId: '858021512001617920',
            receiverName: '沈笑民',
            receiverPhone: '13141220726',
            provinceCode: 110000,
            provinceName: '北京市',
            cityCode: 110100,
            cityName: '市辖区',
            countryCode: 110105,
            countryName: '朝阳区',
            address: '麦子店街道天元港中心B座B803',
            createTime: 1727246858447,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          },
          {
            id: '1002629059382870016',
            wxUserId: '858021512001617920',
            receiverName: '沈笑民',
            receiverPhone: '13141220726',
            provinceCode: 110000,
            provinceName: '北京市',
            cityCode: 110100,
            cityName: '市辖区',
            countryCode: 110105,
            countryName: '朝阳区',
            address: '麦子店街道天元港中心',
            createTime: 1719211861335,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          },
          {
            id: '1036285166294663168',
            wxUserId: '858021512001617920',
            receiverName: '沈笑民',
            receiverPhone: '13141220726',
            provinceCode: 110000,
            provinceName: '北京市',
            cityCode: 110100,
            cityName: '市辖区',
            countryCode: 110105,
            countryName: '朝阳区',
            address: '麦子店街道天元港中心B座B803',
            createTime: 1727236102523,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          },
          {
            id: '927550823855030272',
            wxUserId: '858021512001617920',
            receiverName: '测试',
            receiverPhone: '13141220726',
            provinceCode: 110000,
            provinceName: '北京市',
            cityCode: 110100,
            cityName: '市辖区',
            countryCode: 110101,
            countryName: '东城区',
            address: '1321321',
            createTime: 1701311815099,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          },
          {
            id: '941788786637930496',
            wxUserId: '858021512001617920',
            receiverName: '131412207426',
            receiverPhone: '16666666666',
            provinceCode: 120000,
            provinceName: '天津市',
            cityCode: 120100,
            cityName: '市辖区',
            countryCode: 120101,
            countryName: '和平区',
            address: '11111',
            createTime: 1704706409955,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          },
          {
            id: '950570839596597248',
            wxUserId: '858021512001617920',
            receiverName: '测试',
            receiverPhone: '13141222222',
            provinceCode: 110000,
            provinceName: '北京市',
            cityCode: 110100,
            cityName: '市辖区',
            countryCode: 110101,
            countryName: '东城区',
            address: '超出',
            createTime: 1706800214543,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          },
          {
            id: '927632149413101568',
            wxUserId: '858021512001617920',
            receiverName: '测试',
            receiverPhone: '13141220726',
            provinceCode: 110000,
            provinceName: '北京市',
            cityCode: 110100,
            cityName: '市辖区',
            countryCode: 110101,
            countryName: '东城区',
            address: '12132',
            createTime: 1701331204623,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          },
          {
            id: '909898105481068544',
            wxUserId: '858021512001617920',
            receiverName: '测试',
            receiverPhone: '13141220726',
            provinceCode: 110000,
            provinceName: '北京市',
            cityCode: 110100,
            cityName: '市辖区',
            countryCode: 110101,
            countryName: '东城区',
            address: '1234',
            createTime: 1697103079067,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          },
          {
            id: '1035628956713222144',
            wxUserId: '858021512001617920',
            receiverName: '沈笑民',
            receiverPhone: '13141220726',
            provinceCode: 110000,
            provinceName: '北京市',
            cityCode: 110100,
            cityName: '市辖区',
            countryCode: 110105,
            countryName: '朝阳区',
            address: '麦子店街道天元港中心B座8103',
            createTime: 1727079649967,
            deleted: 0,
            houseNumber: '',
            hasDefAddress: 0
          }
        ],
        total: 52,
        size: 10,
        current: 1,
        orders: [],
        optimizeCountSql: true,
        hitCount: false,
        countId: null,
        maxLimit: null,
        searchCount: true,
        pages: 6
      },
      defaultAddress: '1021143954072010752'
    })
  }, 1000)
}

const searchEmit = (e) => {
  console.log('searchEmit', e)
}
const operateClickEmit = e => {
  console.log('operateClickEmit', e)
  if (e.operateType === 'update') {
    addressRef.value.showEdit(e)
  }
  if (e.operateType === 'setDefault') {
    addressRef.value.setOptions({
      defaultAddress: e.id
    })
  }
}
const searchCompleteEmit = e => {
  console.log('searchCompleteEmit', e)
  const mockList = [{
    id: '14418967903934252350',
    title: '天元港中心',
    address: '北京市朝阳区东三环北路丙2号',
    category: '房产小区:商务楼宇',
    type: 0,
    location: {
      lat: 39.955484,
      lng: 116.460017
    },
    adcode: 110105,
    province: '北京市',
    city: '北京市',
    district: '朝阳区'
  }, {
    id: '9864341959583942441',
    title: '天元港中心B座',
    address: '北京市朝阳区东三环北路丙2号',
    category: '房产小区:商务楼宇',
    type: 0,
    location: {
      lat: 39.955787,
      lng: 116.459771
    },
    adcode: 110105,
    province: '北京市',
    city: '北京市',
    district: '朝阳区'
  }, {
    id: '6319129007606189416',
    title: '天元港中心A座',
    address: '北京市朝阳区东三环北路丙2号天元港中心',
    category: '房产小区:商务楼宇',
    type: 0,
    location: {
      lat: 39.955473,
      lng: 116.459998
    },
    adcode: 110105,
    province: '北京市',
    city: '北京市',
    district: '朝阳区'
  }, {
    id: '14677772948879063340',
    title: '天元港中心-西门',
    address: '北京市朝阳区霞光里南街与霞光里西路交叉口西南方向64米左右',
    category: '室内及附属设施:通行设施类:门/出入口',
    type: 0,
    location: {
      lat: 39.955978,
      lng: 116.459185
    },
    adcode: 110105,
    province: '北京市',
    city: '北京市',
    district: '朝阳区'
  }, {
    id: '17920195421443566034',
    title: '天元港中心B座-北门',
    address: '北京市朝阳区东三环北路辅路与霞光里南街交叉口东北方向96米',
    category: '室内及附属设施:通行设施类:外部门',
    type: 0,
    location: {
      lat: 39.95582,
      lng: 116.459496
    },
    adcode: 110105,
    province: '北京市',
    city: '北京市',
    district: '朝阳区'
  }]
  addressRef.value.setOptions({
    completeOptions: mockList
  })
}
const selectCompleteEmit = e => {
  console.log('地址关键词搜索 选择', e)
}
const addressAreaEmit = e => {
  console.log('addressAreaEmit', e)
}
const addressEdit = () => {
  addressRef.value.showForm({

  })
}
const localName = () => {
  addressRef.value.setAddressForm({
    cityId: '110100',
    cityCode: '110100',
    cityName: '市辖区',
    countryId: '110105',
    countryCode: '110105',
    countryName: '朝阳区',
    provinceId: '110000',
    provinceCode: '110000',
    provinceName: '北京市'
  })
}

const formSubmitEmit = e => {
  console.log('formSubmitEmit', e)
  addressRef.value.showForm(false)
}
</script>

<style scoped lang="scss">
</style>
