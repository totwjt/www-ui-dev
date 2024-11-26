<template>
  <div>
    <h4>$eventBus.emit</h4>
    <a-input @change="$eventBus.emit('change', $event.target.value)" ></a-input>
  </div>
  <div>
    <h4>$eventBus.on</h4>
    {{ test }}
  </div>
</template>

<script lang="ts" setup>
// 平台信息
import { $eventBus } from '@demo-ui-lib/demo-ui-lib'
import { ref, onBeforeMount } from 'vue'
const test = ref()
$eventBus.on('change', (val) => {
  test.value = val
})

onBeforeMount(() => {
  $eventBus.off('change')
})
</script>

<style scoped lang="scss">
</style>
