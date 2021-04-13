<template>

  <img alt="Vue logo" src="./assets/logo.png" />

  <button style="background: #42b983;border: 0" @click="changeFather">调用子组件的方法</button>

  <HelloWorld msg="Hello Vue 3 + Vite"  />

   <!-- Honey❤  v-model双向绑定-->
  <!--  v-model:sum="sum"  v-model:num="num" -->
  <MyFatherSon ref="changeChild" v-model:sum="sum" v-model:num="num"></MyFatherSon>
  <!-- 等价于  -->
 <!--  <MyFatherSon :sum="sum" @update:sum="sum=$event"  :num="num" @update:num="num = $event"></MyFatherSon>-->

  <!-- Honey❤  混合 -->
  <MyMixin ref="mixin"></MyMixin>

  <!-- Honey❤  使用渲染函数 render  -->
  <MyRender></MyRender>

  <!-- Honey❤  路由跳转 router-link -->
  <router-link to="/about" style="background: #98f5ff;width: 50px;height: 50px;display: block;color: palevioletred;margin: 62px 0 0 620px;line-height: 50px;text-align: center">About</router-link>

  <!-- Honey❤  测试路由编程式导航 router.push -->
  <button class="btn" @click="routerClick">跳转回首页</button>

 <!-- Honey❤  路由占位 -->
 <router-view></router-view>  

</template>

<script>
// FIXME defineComponent 只是对 setup 函数进行封装,返回 options的对象
import  {  defineComponent ,ref , onMounted } from 'vue';
import HelloWorld from './components/HelloWorld/index.vue';
import  MyFatherSon from './components/MyFatherSon/index.vue'
import  MyMixin from './components/MyMiXin/index.vue'
import  MyRender from './components/MyRender/index.vue'

import { useRouter,useRoute} from 'vue-router'
import { useStore } from 'vuex'


export  default  defineComponent ( {
  name:'App',
  // FIXME 导入子组件
  components:{
    HelloWorld,
    MyFatherSon,
    MyMixin,
    MyRender
  },

  setup(props,context) {
    // TODO 一、父组件调用子组件的方法,需要和子组件上的ref值一样
    const changeChild = ref()
    const changeFather = ()=> {
      // 调用子组件里面的方法
      changeChild.value.changeSon()

      console.log('父组件获取子组件里面的数据-->'+changeChild.value.son)
    }

    // TODO 二、vue3 v-model用法修改
    // FIXME  vue2中双向绑定数据需要 v-bind.sync 实现组件属性的双向绑定,如 <input :title.sync="name" />
    // FIXME  vue3中双向绑定数据只需要 <input v-model:title="name" v-model:content="info" />,也可以支持 v-model同时绑定两个数据
    const sum = ref(77)
    const num = ref(88)



    // FIXME 父组件获取子组件的数据
    const mixin = ref()


    // Soumns 路由跳转
    const router = useRouter()
    const route = useRoute()

    const routerClick = () => {
      // console.log(router)
      // console.log(route.query)

      // FIXME 跳转回首页 携带参数 [route.query.id 获取]
      router.push(
          { path:'/',query:{ id:'app' } }
          )
          .catch( (err)=> { console.log(err)})
    }



  onMounted( ()=> {

    // TODO 父组件通过给子组件绑定一个 ref,通过ref.value.属性获取到子组件的数据
    console.log('mixin.value.foo-->'+ mixin.value.foo)

    console.log(context.attrs)  // 属性

    const store = useStore()
  //  保存token
    store.commit('addToken','Soumns777')

    // 获取token
    console.log(store.state.cart_a.token)
  })



    return { changeChild,changeFather,sum,num,mixin,routerClick}

  }
})







</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  background: #42b983;
  margin-left: 20px;
  margin-right: 20px;
  border: 0;
}

</style>

