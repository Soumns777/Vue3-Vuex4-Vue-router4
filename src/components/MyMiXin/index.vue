<template>
  {{ foo }} -- {{ user }} -- {{ count }}

  <!-- Honey❤  测试vuex mutations -->
  <button class="btn" @click="addOne" style="margin-right: 10px">测试Vuex中的Mutations</button>

  <!-- Honey❤  测试vuex actions -->
  <button class="btn" @click="addOneSync(8)" style="margin-right: 10px">测试Vuex中的Actions</button>

  <!-- Honey❤  测试vuex getters (类似于计算属性) -->
  <button class="btn"  style="margin-right: 10px">{{ userBeauty }}</button>

</template>

<script>
import { ref ,defineComponent,onMounted ,computed } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  name: " MyMixin",
  // FIXME props 接收的参数 ; context 上下文对象
  setup(props,context) {
     console.log(props,context)

    const foo = ref(777)


    // TODO 导入 vuex实例 store
    const store = useStore()

    // FIXME 测试vuex中 state
    const user =  store.state.cart_b.user

    // FIXME 测试vuex中 mutations 中的方法
    const addOne = () =>{
       store.commit('addOne',2)
      console.log(store.state.cart_a.count)
    }
    // 结合计算属性 测试最新的state数据
    const count = computed(()=> store.state.cart_a.count)

    // FIXME 测试vuex中 actions中的方法
    const addOneSync = (step) => {
       store.dispatch('addOneSync',step)
    }

    // FIXME  测试vuex中的 getters
    const userBeauty =  store.getters.userBeauty

    // TODO 常用的钩子
     onMounted( ()=> {
       console.log('onMounted')

       console.log(store.getters.userBeauty)
       // console.log(store.getters.cart_b.userBeauty) // 向下复制一行 ctrl + d ; Shift + alt + 下箭头

     })

    return { foo,user,count ,addOne,addOneSync,userBeauty}
  }
})
</script>

<style scoped lang="scss">
.btn {
  background: #42b983;
  margin-left: 20px;
  border: 0;
}

</style>
