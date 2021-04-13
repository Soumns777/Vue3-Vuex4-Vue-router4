// TODO 导入  createRouter ,可以创建一个与 Vue3一起安装的路由器实例
// TODO  导入 createWebHistory,创建历史记录

import { createRouter, createWebHistory } from "vue-router";
import  store from '../store/index.js'

// TODO 导入路由首页
import  home from '../view/MyRouterHome/index.vue'
// TODO 导入详情页
import about from '../view/MyRouterAbout/index.vue'
// TODO 导入login页面
import login from '../view/login/index.vue'


// 定义路由配置
const routes = [
    // Soumns 路由重定向 (页面开启默认跳转到 home 组件)
    { path:'/',redirect:'/home'},

    // FIXME 挂载 home组件的路由规则
    { path:'/home',component:home},

    // FIXME 挂载 about组件的路由规则
    { path:'/about',
        component:about,
        // Soumns children节点
        // children:[ { path:'/login',component:login }]
    },
    // FIXME 挂载404页面
    {  path:'/login' , component:login }

]


// TODO 定义路由 每个路由应该映射一个组件
const router =  createRouter({
    // FIXME 通过 createWebHistory() 创建 history 模式
    history: createWebHistory(),
    // FIXME 挂载路由
    routes,
});



// Soumns 全局前置守卫
router.beforeEach( (to,from,next) => {

    console.log('前置路由')
    console.log(store.state.cart_a.token) // Soumns777
    console.log(to)

    console.log(from)

    // 可以判断是否存在 token,如果没有就跳转到login页面
    if(!store.state.cart_a.token) {
       next({
           // path:'/login'
           name:'login'
       })
    }

    // 正常跳转
    next()
})

export  default router





