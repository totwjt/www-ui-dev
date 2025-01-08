import { computed, defineComponent, ref, watch, onBeforeUnmount } from 'vue'
import { coverBoxProps } from './types'
import { EyeInvisibleOutlined } from '@ant-design/icons-vue'
import stylecss from './coverbox.module.scss'

const NAME = 'www-cover-box'

export default defineComponent({
  name: NAME,
  props: coverBoxProps,
  emits: ['update:visible', 'changeVisible'],
  setup (props, { emit, slots }) {
    // 组件是否已卸载的标志
    const isUnmounted = ref(false)
    const visible = ref(false)

    const toggleVisibility = () => {
      console.log('toggleVisibility', isUnmounted.value)

      if (isUnmounted.value) return

      if (!visible.value) visible.value = !visible.value
      // emit('update:visible', visible.value)
      emit('changeVisible', visible.value)
    }

    const coverStyles = computed(() => {
      const styles = { height: props.height, width: props.width, margin: '0 auto' }
      if (!visible.value) {
        Object.assign(styles, {
          backgroundColor: props.bgColor
        })
      }
      return styles
    })

    // 监听父组件传递的 props.visible（即modal的visible状态），当modal关闭时重置组件的visible状态
    watch(() => props.visible, (newVal) => {
      if (isUnmounted.value) return

      if (!newVal) {
        visible.value = false // 当 modal 关闭时，重置 visible 状态
      }
    })

    // 组件卸载前设置标志
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')

      isUnmounted.value = true
      visible.value = false
    })

    return () => (
      <div
        class={visible.value ? '' : stylecss['cover-box']}
        onClick={toggleVisibility}
        style={coverStyles.value}
      >
        {visible.value && !isUnmounted.value && (
          <div
            onClick={(event) => event.stopPropagation()} // 阻止插槽内容点击事件冒泡
          >
            {slots.default?.()}
          </div>
        )}
        {!visible.value && (
          <EyeInvisibleOutlined
            class={stylecss['cover-icon']}
            style={{ color: props.iconColor }}
          />
        )}
      </div>
    )
  }
})
