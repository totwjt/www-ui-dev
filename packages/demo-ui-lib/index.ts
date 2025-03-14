import { App } from 'vue'
import Foo from '@demo-ui-lib/foo'
import CropImg from '@demo-ui-lib/crop-img'
import Desensitization from '@demo-ui-lib/desensitization'
import CoverBox from '@demo-ui-lib/cover-box'
import ConsultantInformation from '@demo-ui-lib/consultant-information'
import Address from '@demo-ui-lib/address'
import IntlTel from '@demo-ui-lib/intl-tel'
import IndexBar from '@demo-ui-lib/index-bar'
// import component end
import '../scss/index.scss'

const components = [
  Foo,
  CropImg,
  Desensitization,
  CoverBox,
  ConsultantInformation,
  Address,
  IntlTel,
  IndexBar
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export * from './tool/index'

export default {
  install
}
