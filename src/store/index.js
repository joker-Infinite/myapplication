import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            userAccountNumber: "",
            userPassword: ""
        }
    },
    mutations: {
        actionIncrease: (state, msg) => {
            state.user.userAccountNumber = msg.userAccountNumber;
            state.user.userPassword = msg.userPassword;
        }
    },
    actions: {},
    modules: {}
})
