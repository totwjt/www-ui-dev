import CoverBox from './src/cover-box'
import { App } from 'vue'

CoverBox.install = (app: App): void => {
  // 注册组件
  app.component(CoverBox.name, CoverBox)
}

export default CoverBox
