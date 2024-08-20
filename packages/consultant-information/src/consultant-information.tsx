import { defineComponent, ref, watch } from 'vue'
import { consultantInformationProps } from './types'
import './consultant-information.scss'
// import content from 'content.vue'

const NAME = 'www-consultant-information'

export default defineComponent({
  name: NAME,
  props: consultantInformationProps,
  emits: ['update:visible'],
  setup (props, { emit, expose }) {
    console.log('props', props)
    const internalVisible = ref(props.visible)
    const { info } = props

    watch(
      () => props.visible,
      (newVal) => {
        internalVisible.value = newVal
      }
    )

    const handleClose = () => {
      internalVisible.value = false
      emit('update:visible', false)
    }

    const showDrawer = () => {
      internalVisible.value = true
      emit('update:visible', true)
    }

    expose({
      showDrawer
    })
    return () => (
      <div class={NAME}>
        <a-drawer
          v-model:visible={internalVisible.value}
          class="drawer-container"
          placement="right"
          onClose={handleClose}
          width="800"
          v-slots={{
            title: () => props.title
          }}
        >
          <a-descriptions bordered size="small" title={info.commitTime}>
            <a-descriptions-item label="姓名">
              {info.patient?.patientName}
            </a-descriptions-item>
            <a-descriptions-item label="性别">
              {info.patient?.patientSex === 1 ? '男' : '女'}
            </a-descriptions-item>
            <a-descriptions-item label="年龄">
              {info.patient?.patientAge}
            </a-descriptions-item>
            <a-descriptions-item span={1.5} label="身高">
              {info.patient?.height > 0 ? `${info.patient.height}cm` : '-'}
            </a-descriptions-item>
            <a-descriptions-item span={1.5} label="体重">
              {info.patient?.weight > 0 ? `${info.patient.height}kg` : '-'}
            </a-descriptions-item>
          </a-descriptions>

          <br />

          <a-descriptions bordered size="small" labelStyle={{ width: '100px' }}>
            <a-descriptions-item span={3} label="职业">
              {info.patient?.job}
            </a-descriptions-item>
            <a-descriptions-item span={3} label="居住地">
              {info.patient?.provinceCh}
              {info.patient?.cityCh}
              {info.patient?.countryCh}
            </a-descriptions-item>
            <a-descriptions-item span={3} label="病情描述">
              {info.patient?.complaint}
            </a-descriptions-item>
            <a-descriptions-item span={3} label="既往病史">
              {info.patient?.medicalHistory}
            </a-descriptions-item>
            <a-descriptions-item span={3} label="过敏史">
              {info.patient?.allergicHistory}
            </a-descriptions-item>
            <a-descriptions-item span={3} label="照片材料">
              <a-image-preview-group>
                {info.photoMaterials.map((item) => (
                  <a-image width={200} src={item} />
                ))}
              </a-image-preview-group>
            </a-descriptions-item>
            <a-descriptions-item span={3} label="诊前问题">
              {info?.preQuestions.map((item) => (
                <>
                  <p>{item?.problem || ''}</p>
                  <p>{item?.answer || ''}</p>
                </>
              ))}
              {info?.preQuestions}
            </a-descriptions-item>
          </a-descriptions>
        </a-drawer>
      </div>
    )
  }
})
