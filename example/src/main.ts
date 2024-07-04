import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import DemoUiLib from '@demo-ui-lib/demo-ui-lib'

// ElementPlus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// antd

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const env = import.meta.env
console.log(env)

const app = createApp(App)
app.use(Antd)
app.use(DemoUiLib)
app.mount('#app')
