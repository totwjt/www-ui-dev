import IndexBar from './src/index-bar.vue'
import { App } from 'vue'
// 引入模块后自动生效
import '@vant/touch-emulator'

IndexBar.name = 'www-index-bar'

IndexBar.install = (app: App): void => {
  // 注册组件
  app.component(IndexBar.name, IndexBar)
}

export default IndexBar
