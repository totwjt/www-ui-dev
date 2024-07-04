import { defineComponent } from 'vue'
import { cropImgProps } from './types'

const NAME = 'www-crop-img'

export default defineComponent({
  name: NAME,
  props: cropImgProps,
  setup (props, context) {
    console.log(props, context)
    return () => (
      <div class={NAME}>
        <div>
          www-crop-img
        </div>
      </div>
    )
  }
})
