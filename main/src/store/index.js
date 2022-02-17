import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonData: {
      // parent: 1
    },
    axios: null,
  },
  mutations: {
    setCommonData(state, val){
      state.commonData = val;
    },
    setAxios(state, val){
      state.axios = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
