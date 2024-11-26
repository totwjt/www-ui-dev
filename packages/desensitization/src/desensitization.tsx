import { defineComponent, ref, computed, defineExpose, onMounted } from 'vue'
import { desensitizationProps } from './types'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue'
import { getType } from '../config'
import './desensitization.scss'

const NAME = 'www-desensitization'

export default defineComponent({
  name: NAME,
  props: desensitizationProps,
  emits: ['update:visible'],
  setup (props, { emit, slots }) {
    const visible = ref(false)

    const con = computed(() => {
      if (props.value) return props.value

      const slotContent = slots.default?.()[0].children || ''
      if (slotContent && typeof slotContent === 'string') {
        return slotContent
      } else {
        return slotContent[0]?.children || ''
      }
    })

    const fixCon = computed(() => {
      return desensitization(con.value)
    })

    const desensitization = (con) => {
      if (props.type) {
        return _textEncode(con, ...getType(props.type))
      } else {
        return _textEncode(con, props.beforLen, props.afterLen)
      }
    }

    const _textEncode = (text, before = 2, after = 2) => {
      if (!text) {
        return ''
      }
      const beforeStr = text.substring(0, before)
      const afterStr = text.slice(-1 * after)
      return beforeStr + '******' + afterStr
    }

    const iconStyle = () => {
      return {
        fontSize: `${props.iconSize}px`, // 确保图标大小一致
        lineHeight: '1', // 确保行高不会影响对齐
        verticalAlign: 'middle', // 确保图标与文本垂直对齐
        cursor: 'pointer',
        paddingLeft: '5px',
        color: visible.value ? '#35485E' : '#00B3EF'
      }
    }

    const toggleVisibility = () => {
      visible.value = !visible.value
      if (visible.value) {
        emit('update:visible', visible.value)
      }
    }

    const setVisible = (value) => {
      visible.value = value
    }

    onMounted(() => {
      setVisible(false)
    })

    defineExpose({
      setVisible
    })

    return () => (
      <div class={NAME}>
        <div class="flex row-between col-center">
          <div class="desensitization-content">
            {props.label && (
              <label for="desensitization-input">{props.label}</label>
            )}
            {!visible.value && <span>{fixCon.value}</span>}
            {visible.value && con.value}
          </div>
          {con.value && (
            <div>
              <EyeInvisibleOutlined
                style={iconStyle()}
                v-show={!visible.value}
                onClick={toggleVisibility}
              />
              <EyeOutlined
                style={iconStyle()}
                v-show={visible.value}
                onClick={toggleVisibility}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
})
