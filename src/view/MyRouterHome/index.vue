<template>

        {{  routerHome.value }}


</template>

<script>
import { reactive,defineComponent,onMounted } from 'vue';
import  { useRoute } from 'vue-router'

export default defineComponent({
  name: "MyRouterHome ",
  // FIXME props 接收的参数 ; context 上下文对象
  setup(props,context) {
     console.log(props,context)

    const routerHome = reactive({value:'Home'})

    // TODO route获取路由参数
    const route = useRoute()


     onMounted( ()=> {
       console.log('onMounted')


       // Soumns 获取编程式导航携带的参数 id:app
       console.log(route.query)
     })

    return {routerHome}
  }
})
</script>

<style scoped lang="scss">

</style>
