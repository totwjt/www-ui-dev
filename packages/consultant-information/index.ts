import ConsultantInformation from './src/consultant-information'
import { App } from 'vue'

ConsultantInformation.install = (app: App): void => {
  // 注册组件
  app.component(ConsultantInformation.name, ConsultantInformation)
}

export default ConsultantInformation
