import { ref, onMounted, onUnmounted, computed, unref } from 'vue'
import { phoneDict } from './dict'

export function useIntlTel (props, phoneNumber = undefined) {
  console.log('props1', props, unref(props))
  const exampleState = ref<string>('')
  const areaCode = ref<string>('')

  // 根据手机号判断默认区域
  const getDefaultPhoneType = (phone: string): number | undefined => {
    if (/^1[3-9]\d{9}$/.test(phone)) return 0 // 默认中国大陆
    if (/^852\d{8}$/.test(phone)) return 1 // 中国香港
    if (/^853\d{8}$/.test(phone)) return 2 // 中国澳门
    if (/^886\d{9}$/.test(phone)) return 3 // 中国台湾
  }

  const _getPhoneDictValueByType = ({ modelValue, phone, type = undefined }) => {
    console.log('modelValue', modelValue, phone)

    if (type) {
      const entry = phoneDict.find(item => item.value === String(type))

      return entry
    } else if (phone) {
      const type = getDefaultPhoneType(phone)
      console.log('type', type)

      const entry = phoneDict.find(item => item.value === String(type))

      return entry
    } else if (modelValue?.patientPhoneType) {
      const entry = phoneDict.find(item => item.value === String(modelValue?.patientPhoneType))

      return entry
    } else if (modelValue?.patientPhone) {
      const type = getDefaultPhoneType(modelValue?.patientPhone)

      const entry = phoneDict.find(item => item.value === String(type))

      return entry
    }
  }

  const getText = computed(() => {
    const item = _getPhoneDictValueByType(props)

    if (!item) return ''

    areaCode.value = item?.class || ''

    // return `${item?.name} (${item?.hd})`
    return `${item?.hd} `
  })

  onMounted(() => {
    // Logic to run when the component is mounted
    console.log('Component mounted')
  })

  onUnmounted(() => {
    // Logic to run when the component is unmounted
    console.log('Component unmounted')
  })

  const updateState = (newState: string) => {
    exampleState.value = newState
  }

  return {
    getDefaultPhoneType,
    getText,
    areaCode,
    updateState
  }
}
