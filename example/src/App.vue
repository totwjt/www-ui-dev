<template>
  <div class="site">
    <h1>组件库测试站点</h1>
    <p>测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。</p>
    <p>{{ msg }}</p>
    <www-desensitization type="phone" label="手机："
      @update:visible="visible => console.log(visible)">13260462433</www-desensitization>
    <www-foo></www-foo>
    <www-cover-box style="width:100px;height:100px" bg-color="red" width="100%" height="100%">
      <a-image
        src="https://upload.jianshu.io/users/upload_avatars/26325037/1d3fda5b-f6dd-4c9c-a140-d794512f9e21.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"></a-image>
    </www-cover-box>
    <br>
    <br>
    <br>
    <www-cover-box>
      123
    </www-cover-box>
    <CoverFeildLog type="phone">13222222222</CoverFeildLog>
    <p>就诊人详情</p>
    <a-button @click="HandleVisible">visible</a-button>
    <www-consultant-information v-model:visible="visible" :info="info"></www-consultant-information>
    平台：{{ platform() }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { platform } from '@demo-ui-lib/demo-ui-lib'
import CoverFeildLog from './coverFeild.vue'
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
