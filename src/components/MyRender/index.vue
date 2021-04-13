<template>

</template>

<script>
import { defineComponent, ref, h} from 'vue';

export default defineComponent({
  name: " MyH",
  // FIXME props 接收的参数 ; context 上下文对象
  setup(props,context) {
     console.log(props,context)

    // 点击
    function click() {
       console.log(`%c render函数`,  'color:#00CED1')
    }

     // FIXME  利用ref创建响应式数据
    const readersNumber = ref('测试vue3 render函数')
     // FIXME render 函数返回渲染
    return () => h('button', {onclick:click,class:'new'},[readersNumber.value])

  }
})
</script>

<style scoped lang="scss">

.new {
  width: 200px;
  height: 50px;
  background: palevioletred;
}

</style>
