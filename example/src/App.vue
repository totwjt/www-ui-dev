<template>
  <div class="site">
    <h1>组件库测试站点</h1>
    <p>
      测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。
    </p>
    <p>{{ msg }}</p>
    <www-desensitization
      type="phone"
      label="手机："
      @update:visible="(visible) => console.log(visible)"
      >13260462433</www-desensitization
    >
    <www-foo></www-foo>
    <www-cover-box
      style="width: 100px; height: 100px"
      bg-color="red"
      width="100%"
      height="100%"
    >
      <a-image
        src="https://upload.jianshu.io/users/upload_avatars/26325037/1d3fda5b-f6dd-4c9c-a140-d794512f9e21.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
      ></a-image>
    </www-cover-box>
    <br />
    <br />
    <br />
    <www-cover-box> 123 </www-cover-box>
    <CoverFeildLog type="phone">13222222222</CoverFeildLog>
    <p>就诊人详情</p>
    <a-button @click="HandleVisible">visible</a-button>
    <www-consultant-information
      v-model:visible="visible"
      :info="info"
    ></www-consultant-information>

    <div>平台：{{ platform() }}</div>

    <h1>地址管理</h1>
    <a-button @click="HandleAddress">地址管理</a-button>
    <www-address
      ref="addressRef"
      @copyInviteLinkEmit="copyInviteLinkEmit"
      @searchEmit="searchEmit"
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
    </www-address>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { platform } from '@demo-ui-lib/demo-ui-lib'
import CoverFeildLog from './coverFeild.vue'
// import subtitle from './sub-title.vue'

/* ----------------------------------------------------*\
｜                       地址管理
\*---------------------------------------------------- */

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
      }
    })
  }, 1000)
}

const searchEmit = (e) => {
  console.log('searchEmit', e)
}

const addressEdit = () => {
  addressRef.value.showForm({

  })
}

const visible = ref(false)
const msg = ref('hello world')
const info = ref()
const HandleVisible = () => {
  setTimeout(() => {
    visible.value = !visible.value
    info.value = {
      commitTime: '2024-08-08 13:36提交记录',
      patient: {
        job: '',
        cityCh: '',
        height: 0,
        weight: 0,
        disease: '测试边边病历诊断12345',
        symptom: '测试变病病历诊断12345',
        imageUrl: null,
        complaint: '哈哈哈哈哈哈哈哈哈哈哈哈哈',
        countryCh: '',
        orderType: 4263611313934515,
        patientId: '1005870008519098368',
        createTime: '2024-08-08 13:36',
        patientAge: '44岁',
        patientSex: -6325150923904727,
        provinceCh: '',
        patientName: '李香云',
        medicalHistory: '',
        allergicHistory: ''
      },
      preQuestions: [
        {
          problem: '3.您的身体是否有疼痛(多选)',
          answer: '无疼痛;头痛;关节痛;四肢疼痛'
        }
      ],
      photoMaterials: [
        'https://oss.nldzy.com/consultPhoto/e120df89-531a-406b-96a4-cc06944a0cd7.jpg'
      ]
    }
  }, 1000)
}
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
</style>
