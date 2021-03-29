// TODO vuex模块化  state.user

// FIXME state.user
const state = {
    user:'iu',
}

// FIXME mutations user
const mutations = {

}

// FIXME  actions user
const actions = {

}

// FIXME  getters user
const getters = {
    // 可以当做计算属性使用
    userBeauty(state) {
        return  state.user + ' is beautiful'
    }
}

export  default  {
    state,
    mutations,
    actions,
    getters
}
