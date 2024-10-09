import Address from './src/address.vue'
import { App } from 'vue'

Address.name = 'www-address'

Address.install = (app: App): void => {
  // 注册组件
  app.component(Address.name, Address)
}

export default Address
