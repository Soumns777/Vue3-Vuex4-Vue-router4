// TODO  导入 createApp ,返回一个提供应用上下文的应用实例，应用实例挂载的整个组件树共享同一个上下文。
import { createApp } from 'vue'

import App from './App.vue'

// TODO 导入vuex
import  store from  './store/index.js'
// app.use(store) 可以写在下面一起注册

// TODO 导入 vue-router
import  router from './router/index.js'
// app.use(router)  可以写在下面一起注册

// TODO 注册新的实例(并注册 vuex )
createApp(App).use(store).use(router).mount('#app')

