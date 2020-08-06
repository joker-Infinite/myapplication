import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: {
            //用户信息
            userInfo: {
                userAccountNumber: '',
                userPassword: ''
            },
            //用户登录状态(默认false)
            status: false,
            //用户操作及浏览记录
            recording: {}
        }
    },
    mutations: {
        actionIncrease: (state, data) => {
            state.userData = data;
        }
    },
    actions: {},
    modules: {}
})
