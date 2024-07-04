import Desensitization from './src/desensitization'
import { App } from 'vue'

Desensitization.install = (app: App): void => {
  // 注册组件
  app.component(Desensitization.name, Desensitization)
}

export default Desensitization
