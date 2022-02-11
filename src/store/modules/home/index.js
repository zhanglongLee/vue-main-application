import * as types from './types.js'
export default {
  namespaced: true,
  state: {
    imgArr:['1.jpg','2.jpg']
  },
  mutations: {
    changeImg(state,data){
      state.imgArr = data
    }
  },
  actions: {
  },
  getters: {
  }
}

