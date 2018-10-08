import Vue from 'vue'
import Vuex from 'vuex'
import axios from './plugins/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user: {
      id: 0,
      username: '',
      email: '',
      sex: '',
      address: '',
      createdAt: 0,
      updatedAt: 0
    },
    serviceItem: {
      id: String,
      title: String,
      label: [],
      url: String
    },
    serviceList: []
  },
  mutations: {
    changeLoginStatus (state, isLogin) {
      state.isLogin = isLogin
    },
    changeServiceList (state, serviceList) {
      state.serviceList = serviceList
    },
    changeServiceItem (state, serviceItem) {
      state.serviceItem = serviceItem
    }
  },
  actions: {
    login ({ commit }, user) {
      return axios.post('/login', user).then(res => {
        commit('changeLoginStatus', true)
        commit('changeUser', res.data)
      })
    },
    register ({ commit }, user) {
      return axios.post('/register', user).then(res => {
        commit('changeLoginStatus', true)
        commit('changeUser', res.data)
      })
    },
    getServiceList ({ commit }, query) {
      axios.get('/query', {
        params: {
          q: query
        }
      }).then(res => {
        commit('changeServiceList', res.data)
      })
    },
    getPersonServiceList ({ commit }) {
      axios.get('/hotservices').then(res => {
        commit('changeServiceList', res.data)
      })
    }
  }
})
