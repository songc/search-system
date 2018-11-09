import Vue from 'vue'
import Vuex from 'vuex'
import axios from './plugins/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    login: false,
    register: false,
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
    elasticRes: {
      took: Number,
      timed_out: false,
      hits: {
        total: Number,
        max_score: Number,
        hits: []
      },
      _shards: Object
    }
  },
  getters: {
    serviceList: state => {
      return state.elasticRes.hits.hits.map(hit => {
        let temp = {
          id: hit._id,
          score: hit._score,
          title: hit._source.title[0],
          keywords: hit._source.keywords,
          url: hit._source.url
        }
        return temp
      }
      )
    }
  },
  mutations: {
    changeLoginStatus (state, isLogin) {
      state.isLogin = isLogin
    },
    changeServiceItem (state, serviceItem) {
      state.serviceItem = serviceItem
    },
    changeElasticRes (state, res) {
      state.elasticRes = res
    },
    changeLogin (state, login) {
      state.login = login
    },
    changeRegister (state, register) {
      state.register = register
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
      axios.get('/_search', {
        params: {
          q: query,
          size: 8,
          from: 0
        }
      }).then(res => {
        commit('changeElasticRes', res.data)
      })
    },
    getPersonServiceList ({ commit }, query) {
      axios.get('/_search', {
        params: {
          q: 'rest',
          size: 6,
          from: 0
        }
      }).then(res => {
        commit('changeElasticRes', res.data)
      })
    }
  }
})
