import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from '../src/router/index'
Vue.use(Vuex)

var state = {
  allArticles: []
}

var mutations = {
  setAllArticles (state, payload) {
    state.allArticles = payload
  }
}

var actions = {
  getAllArticles ({commit}) {
    console.log('tes')
    axios({
      method: 'get',
      url: 'http://localhost:3000/articles'
    })
    .then(response => {
      console.log(response.data)
      commit('setAllArticles', response.data.data)
    })
    .catch(err => console.error(err))
  }
}

var store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
