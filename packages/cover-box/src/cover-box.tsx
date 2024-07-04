import { computed, defineComponent, ref } from 'vue'
import { coverBoxProps } from './types'
import { EyeInvisibleOutlined } from '@ant-design/icons-vue'
import stylecss from './coverbox.module.scss'
const NAME = 'www-cover-box'

export default defineComponent({
  name: NAME,
  props: coverBoxProps,
  emits: ['update:visible'],
  setup (props, { emit, slots }) {
    const visible = ref(false)

    const toggleVisibility = () => {
      if (!visible.value) visible.value = !visible.value
      emit('update:visible', visible.value)
    }

    const coverStyles = computed(() => {
      const styles = { height: props.height, width: props.width }
      if (!visible.value) {
        Object.assign(styles, {
          backgroundColor: props.bgColor
        })
      }
      return styles
    })

    return () => (
      <div
        class={visible.value ? '' : stylecss['cover-box']}
        onClick={toggleVisibility}
        style={coverStyles.value}
      >
        {visible}
        {visible.value
          ? (
              slots.default
                ? (
                    slots.default()
                  )
                : null
            )
          : (
          <EyeInvisibleOutlined
            class={stylecss['cover-icon']}
            style={{ color: props.iconColor }}
          />
            )}
      </div>
    )
  }
})
