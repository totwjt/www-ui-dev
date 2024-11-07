// src/utils/eventBus.ts
import mitt from 'mitt'

// // 定义事件类型（可选）
// type Events = {
//     foo: string;
//     bar?: number;
//   };

// @ts-ignore
const $eventBus = mitt()

$eventBus.on('*', (type, event) => {
  console.log(`Event ${type} triggered with data`, event)
})

export default $eventBus
