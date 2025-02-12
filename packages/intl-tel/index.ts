import IntlTel from './src/intl-tel.vue'
import { App } from 'vue'

IntlTel.name = 'www-intl-tel'

IntlTel.install = (app: App): void => {
  // 注册组件
  app.component(IntlTel.name, IntlTel)
}

export default IntlTel
