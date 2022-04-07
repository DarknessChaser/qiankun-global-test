import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonData: {
      parent: 0
    },
    name: '',
  },
  mutations: {
    setCommonData(state, val){
      state.commonData = val;
    },
    setName(state, val){
      state.name = val;
    },
  },
  actions: {
  },
  modules: {
  }
})
