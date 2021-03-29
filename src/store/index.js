// TODO 创建一个store状态管理库
import { createStore } from 'vuex'

// TODO vuex模块化 导入其他两个模块
import cart_a from './model/cart_a'
import cart_b from './model/cart_b'


export  default  createStore({
    // FIXME 大型项目一般需要进行vuex模块化
    modules:{
        // 键指的是模块的名称
        // 值指的是拆分出来的 vuex模块
        cart_a,
        cart_b
    }
})







