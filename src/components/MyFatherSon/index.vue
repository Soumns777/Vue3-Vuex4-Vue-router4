<template>
  <!-- Honey❤  测试服组件调用子组件的方法 -->
  <button class="btn">{{ son }}</button>

  <!-- Honey❤  子组件接收父组件传来的数据并回传新的数据 -->
  <input type="text" :value="num" ref="numRef" @input="updateNumRef"/>


  {{ num }} -- {{ sum }}
</template>

<script>
import {defineComponent,ref} from "vue";

export  default  defineComponent({
  name:'MyVue3Test',
  props:{
    num:Number,
    sum:Number
  },

  // FIXME  props 是响应式的,当传入新的prop时,它将被更新  (props不能解构,如果要解构的话需要用 toRefs) ,toRefs
  //  const { title }  = toRefs(props)
  // FIXME  context 中有三个属性, attrs( Attribute 非响应式对象)、slots(插槽 非响应式对象)、emit(触发事件 方法)
  setup(props,context)  {
    console.log(props,context)


    // TODO 一、父组件调用子组件的方法
    const son = ref('我是子组件')
    const changeSon  = () => {
      return son.value = son.value === '我是子组件' ? '我是被父组件调用的方法修改的' : '我是子组件 '
    }


    // TODO 二、 v-model调整
    const numRef = ref()
    const sumRef = ref()

    // FIXME 子组件更新父组件传过来的数据
    const updateNumRef = ()=> {
      console.log(numRef.value) //  <i  nput type="text" :value="num" ref="numRef" @input="updateNumRef"/>
      console.log(numRef.value.value) // 887

    // FIXME 利用上下文 context对象中的emit方法  触发事件
      context.emit('update:num',numRef.value.value)
    }


    return { son,numRef,sumRef,changeSon,updateNumRef }
  }


})

</script>

<style scoped lang="scss">

.btn {
  border: 0;
  display: block;
  margin: 20px 0 0 500px;
  background: palevioletred;
}

</style>
