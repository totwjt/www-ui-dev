import PromiseConfirm from './src/promise-confirm.vue'
import { App } from 'vue'

PromiseConfirm.name = 'www-promise-confirm'

PromiseConfirm.install = (app: App): void => {
  // 注册组件
  app.component(PromiseConfirm.name, PromiseConfirm)
}

export default PromiseConfirm
