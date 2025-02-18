<template>
  <div class="site">
    <h1>组件库测试站点</h1>
    <p>
      测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。
    </p>
    <p>{{ msg }}</p>
    <www-desensitization type="phone" label="手机："
      @update:visible="(visible: boolean) => console.log(visible)">13260462433</www-desensitization>
    <www-foo></www-foo>

    <hr>

    <h1>区域隐藏</h1>
    <www-cover-box style="width: 100px; height: 100px" bg-color="red" width="100%" height="100%">
      <a-image
        src="https://upload.jianshu.io/users/upload_avatars/26325037/1d3fda5b-f6dd-4c9c-a140-d794512f9e21.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"></a-image>
    </www-cover-box>
    <br />
    <br />

    <www-cover-box> 123 </www-cover-box>

    <hr>

    <h1>字段隐藏</h1>
    <CoverFeildLog type="phone">13222222222</CoverFeildLog>

    <hr>

    <h1>就诊人详情</h1>
    <a-button @click="HandleVisible">visible</a-button>
    <www-consultant-information v-model:visible="visible" :info="info"></www-consultant-information>

    <hr>

    <h1>平台信息</h1>
    <div>{{ platform() }}</div>

    <hr>

    <h1>地址管理</h1>
    <a-button @click="HandleAddress">地址管理</a-button>
    <www-address :setAddressForm="setAddressForm" ref="addressRef" @copyInviteLinkEmit="copyInviteLinkEmit"
      @searchEmit="searchEmit" @operateClickEmit="operateClickEmit" @searchCompleteEmit="searchCompleteEmit"
      @selectCompleteEmit="selectCompleteEmit" @addressAreaEmit="addressAreaEmit" @formSubmitEmit="formSubmitEmit"
      @closeEmit="closeEmit">
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

    <hr>

    <h1>$eventBus</h1>
    <a-space>emit:
      <a-button type="primary" @click="$eventBus.emit('test', '123')">emit test:123</a-button>
      <a-button type="primary" @click="$eventBus.emit('test', '456')">emit test:456</a-button>
    </a-space>
    <div>on: {{ eventBusText }} </div>

    <hr>

    <h1>手机号国际化</h1>
    {{ intlTelPhone }}
    {{ intlTelPhoneString }}
    <a-input v-model:value="intlTelPhone.patientPhoneType" placeholder="patientPhoneType"></a-input>
    <a-input v-model:value="intlTelPhone.patientPhone" placeholder="patientPhone"></a-input>
    <a-button @click="() => intlTelPhone.patientPhoneType = undefined">删除patientPhoneType节点</a-button>

    <div>1. 绑定一个obj 根据 obj.patientPhoneType 匹配， 忽略手机号</div>
    <div>2. 绑定一个obj， obj.patientPhoneType不存在节点 自行根据手机号patientPhone匹配，匹配失败不显示</div>
    <!-- <www-intl-tel mod="view" v-model="intlTelPhone" /> -->
    <div>3. 直接绑定一个props.phone:string, 优先级最高 </div>
    <a-input v-model:value="intlTelPhoneString" />
    <www-intl-tel mod="view" :phone="intlTelPhoneString" :setStyle="{ fontSize: '20px' }" />

    <div>4. 直接绑定一个props.type, 优先级最高 </div>
    <www-intl-tel mod="view" type="3" :setStyle="{ fontSize: '20px' }" />

    <hr>

    <h1>大陆港澳台</h1>
    <h4>1. 港澳台正则</h4>
    <div>{{ phonePattern('0') }}</div>
    <div>{{ phonePattern('1') }}</div>
    <div>{{ phonePattern('2') }}</div>
    <div>{{ phonePattern('3') }}</div>

    <h4>2. 港澳台手机枚举:</h4>
    <div><json-viewer :value="phoneDict"></json-viewer></div>

    <h3>3. 根据地区类型获取手机区号前缀 showMobilePhoneAreaCodeByType('0')</h3>
    <div>{{ showMobilePhoneAreaCodeByType('0') }}</div>

    <hr>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { platform, $eventBus, phonePattern, phoneDict, showMobilePhoneAreaCodeByType } from '@demo-ui-lib/demo-ui-lib'
import CoverFeildLog from './coverFeild.vue'
import JsonViewer from 'vue-json-viewer'
// import subtitle from './sub-title.vue'

/* ----------------------------------------------------*\
｜                       地址管理
\*---------------------------------------------------- */
const setAddressForm = ref({})

const addressRef = ref()
const copyInviteLinkEmit = () => {
  console.log('copyInviteLinkEmit')
  alert('copyInviteLinkEmit')
}
const closeEmit = () => {
  console.log('closeEmit')
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
      defaultSta: false,
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

/* ----------------------------------------------------*\
｜                       $eventBus
\*---------------------------------------------------- */
const eventBusText = ref()
$eventBus.on('test', e => {
  eventBusText.value = e
})

$eventBus.on('Address_operateClick', e => {
  console.log('Address_operateClick', e)
})

/* ----------------------------------------------------*\
｜                       手机号国际话
\*---------------------------------------------------- */

const intlTelPhone = ref({
  patientId: '965318477621493760',
  wxUserId: '965318477512441856',
  patientName: '吕翔',
  patientPhone: '15101530773',
  patientPhoneType: 2 as 0 | 1 | 2 | 3 | 4 | undefined,
  patientCardType: '0',
  patientSex: 1,
  patientIdCard: '142322199701164015',
  patientAge: '28岁',
  patientMonth: 0,
  height: 0,
  weight: 0,
  province: 0,
  city: 0,
  country: 0,
  provinceCh: '',
  cityCh: '',
  countryCh: '',
  medicalHistory: '',
  allergicHistory: '',
  oneself: 1,
  haveBusiness: 1,
  complaint: '了来咯哦哦弄靠靠靠沫',
  job: '',
  disease: '',
  symptom: ''
})

const intlTelPhoneString = ref('13260462736')
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
</style>
