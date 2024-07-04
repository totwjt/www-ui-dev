import CropImg from './src/crop-img'
import { App } from 'vue'

CropImg.install = (app: App): void => {
  // 注册组件
  app.component(CropImg.name, CropImg)
}

export default CropImg
