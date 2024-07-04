import { defineComponent } from 'vue'
import { fooProps } from './types'

const NAME = 'www-foo'

export default defineComponent({
  name: NAME,
  props: fooProps,
  setup (props, context) {
    console.log(props, context)
    const onBtnClick = () => {
      console.log('点击按钮测试', props.msg)
    }
    return () => (
      <div class={NAME}>
        <h1>www-Admin-UI Demo</h1>
        <p class={NAME + '__description'}>{ props.msg }</p>
        <a-button type='primary' onClick={onBtnClick}>点击我</a-button>
      </div>
    )
  }
})
