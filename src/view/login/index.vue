<template>
   登录页面
</template>

<script>
import { ref ,defineComponent,onMounted } from 'vue';

export default defineComponent({
  name: "404",
  // FIXME props 接收的参数 ; context 上下文对象
  setup(props,context) {
     console.log(props,context)

     onMounted( ()=> {
       console.log('onMounted')
     })

    return {}
  }
})
</script>

<style scoped lang="scss">

</style>
