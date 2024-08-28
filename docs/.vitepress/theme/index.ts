import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { EnhanceAppContext } from 'vitepress'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DemoUiLib from '@demo-ui-lib/demo-ui-lib'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(ElementPlus)
    ctx.app.use(DemoUiLib)
    ctx.app.use(Antd)
    ctx.app.component('demo-preview', AntDesignContainer)
  }
}
