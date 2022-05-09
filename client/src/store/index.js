import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isImagesShow: false,
  },
  getters: {
    getImagesStatus(state) {
      return state.isImagesShow;
    }
  },
  mutations: {
    setImagesStatus(state, payload) {
      state.isImagesShow = payload.data;
    }
  },
  actions: {},
  modules: {}
})
