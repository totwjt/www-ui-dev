<template>
  <div class="site">
    <h1>组件库测试站点</h1>
    <p>测试站点主要用于开发过程中测试组件，即在开发过程中由业务驱动组件开发。</p>
    <p>{{ msg }}</p>
    <www-desensitization type="phone" label="手机：" @update:visible="visible=>console.log(visible)" >13260462433</www-desensitization>
    <www-foo></www-foo>
    <www-cover-box style="width:100px;height:100px" bg-color="red" width="100%" height="100%">
      <a-image src="https://upload.jianshu.io/users/upload_avatars/26325037/1d3fda5b-f6dd-4c9c-a140-d794512f9e21.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"></a-image>
    </www-cover-box>
    <br>
    <br>
    <br>
    <www-cover-box>
      123
    </www-cover-box>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('hello world')
</script>

<style scoped lang="scss">
.site {
  padding: 20px;
}
</style>
