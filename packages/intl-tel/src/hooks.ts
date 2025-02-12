import { ref, onMounted, onUnmounted, computed } from 'vue'
import { phoneDict } from './dict'

export function useIntlTel (modelValue) {
  const exampleState = ref<string>('')
  const aearCode = ref<string>('')

  // 根据手机号判断默认区域
  const getDefaultPhoneType = (phone: string): number => {
    if (/^1[3-9]\d{9}$/.test(phone)) return 0 // 默认中国大陆
    if (/^852\d{8}$/.test(phone)) return 1 // 中国香港
    if (/^853\d{8}$/.test(phone)) return 2 // 中国澳门
    if (/^886\d{9}$/.test(phone)) return 3 // 中国台湾
    return 0 // 默认中国大陆
  }

  const _getPhoneDictValueByType = (type: string) => {
    console.log('type', type)
    console.log('modelValue', modelValue, modelValue.patientPhoneType)
    const entry = phoneDict.find(item => item.value === String(type))
    console.log('entry', entry)
    return entry
  }

  const getText = computed(() => {
    const item = _getPhoneDictValueByType(modelValue?.patientPhoneType)

    if (!item) return ''

    aearCode.value = item?.class || ''

    return `${item?.name} (${item?.hd})`
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
    aearCode,
    updateState
  }
}
