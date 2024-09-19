<template>
  <a-button @click="visible = true" type="primary">就诊人信息</a-button>
  <www-consultant-information v-model:visible="visible" :info="info"></www-consultant-information>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const info = ref({
  commitTime: '2024-08-19 09:46提交记录',
  patient: {
    patientName: '艾青华',
    patientAge: '52岁',
    patientSex: 2,
    disease: '叫啥技术',
    symptom: '你说你睡觉',
    patientId: '1008361035939184640',
    height: 0,
    weight: 0,
    job: '',
    provinceCh: '',
    cityCh: '',
    countryCh: '',
    complaint: '不在不在不是不是不准备是吧是吧嘴巴在哪在哪',
    medicalHistory: '',
    allergicHistory: '',
    createTime: '2024-08-19 09:46',
    orderType: 1
  },
  preQuestions: [],
  photoMaterials: [
    'https://oss.nldzy.com/consultPhoto/6542eb64-06f7-4d81-8291-526d7f2218d2.jpg',
    'https://oss.nldzy.com/consultPhoto/5ede91a6-b276-4fd8-b1ae-bb53c7145f7d.jpg',
    'https://oss.nldzy.com/consultPhoto/e9f0805a-bc0b-4a18-9753-a65a79925577.jpg',
    'https://oss.nldzy.com/consultPhoto/bf44c889-c6e7-4c52-9ef6-7aa5108c341d.jpg'
  ]
})
</script>

<style scoped lang="scss"></style>
