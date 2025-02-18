// 平台&设备信息
import { platform } from './src/platform'

// mitt.js $eventBus 事件总线
import $eventBus from './src/eventBus'

// 港澳台手机 正则表达式
import { phonePattern } from './src/regular'

import { phoneDict, showMobilePhoneAreaCodeByType } from './src/intlPhone'

export {
  platform,
  $eventBus,
  phonePattern,
  phoneDict,
  showMobilePhoneAreaCodeByType
}
