<template>
    <www-desensitization :type="props.type" @update:visible="handleUpdateVisible">
        <template v-slot:default>
            <slot name="default"></slot>
        </template>
    </www-desensitization>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
// import { getFieldType, useInitModules, Imodules } from '@/hooks/functional/useLog';

const props = defineProps({
  type: {
    type: String,
    default: 'number'
  }
})

const slots = useSlots()
const defaultSlot = slots.default ? slots.default() : null
console.log('slots', slots, defaultSlot)
// const modules = useInitModules(<Imodules>{id:2333,name:'王江涛', moduleType:'Doctor', })

// const modules = computed(() => {
//     if (!props.options?.id) return {}
//     return useInitModules(<Imodules>props.options)
// })

// onMounted(()=>{

//     if (!props.options?.id) return {}
//     const modules = useInitModules(<Imodules>props.options)
//         console.log('modules', modules);
// })

const handleUpdateVisible = (visible: boolean) => {
  // console.log('updateVisible', visible);
  // console.group('Feild Modules');
  // console.log('modules', modules.value);
  // console.groupEnd();
}
</script>

<style scoped lang="scss"></style>
