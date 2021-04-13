// TODO vuex模块化  state.count

// FIXME state.count
const state = {
    count:123,
    token:'',
}

// FIXME mutations count
const mutations = {
    addOne(state,info) {
        state.count+= info
    },

    addToken(state,info) {
        state.token+= info
    }


}

// FIXME  actions count
const actions = {
    addOneSync(context,info) {
        setTimeout( ()=>{
            // Soumns  commit调用的方法需要加引号
            context.commit('addOne',info)

        },500 )
    }
}

// FIXME  getters count
const getters = {

}

export  default  {
    state,
    mutations,
    actions,
    getters
}
