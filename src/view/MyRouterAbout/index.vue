<template>
    {{ foo }}
</template>

<script>
import { ref ,defineComponent,onMounted } from 'vue';

export default defineComponent({
  name: " MyRouterAbout",
  // FIXME props 接收的参数 ; context 上下文对象
  setup(props,context) {
     console.log(props,context)

    const foo = ref('About')

     onMounted( ()=> {
       console.log('onMounted')
     })

    return {foo}
  }
})
</script>

<style scoped lang="scss">

</style>
