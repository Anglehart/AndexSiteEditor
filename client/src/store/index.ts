import { createStore } from 'vuex'

export default createStore({
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
    },
    // changeImageStatus(state) {
    //   state.isImagesShow = !state.isImagesShow;
    // }
  },
  actions: {},
  modules: {}
})
