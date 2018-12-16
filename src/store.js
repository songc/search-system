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
    },
    recommenderRes: {
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
          clean_doc: hit._source.clean_doc,
          clean_token: hit._source.clean_token,
          keywords: hit._source.keywords,
          topics: hit._source.topics,
          url: hit._source.url
        }
        return temp
      }
      )
    },
    recommenderList: state => {
      return state.recommenderRes.hits.hits.map(hit => {
        let temp = {
          id: hit._id,
          score: hit._score,
          raw_content: hit._source.raw_content,
          title: hit._source.title[0],
          clean_doc: hit._source.clean_doc,
          clean_token: hit._source.clean_token,
          keywords: hit._source.keywords,
          topics: hit._source.topics,
          url: hit._source.url
        }
        return temp
      })
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
    },
    changeRecommenderRes (state, recommenderRes) {
      state.recommenderRes = recommenderRes
    },
    changeUser (state, user) {
      state.user = user
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
          q: query.q,
          size: query.size,
          from: query.from
        }
      }).then(res => {
        commit('changeElasticRes', res.data)
      })
    },
    getPersonServiceList ({ commit }, size) {
      axios.get('/hottopic', {
        params: {
          size: size
        }
      }).then(res => {
        commit('changeElasticRes', res.data)
      })
    },
    // TODO change the url and params
    getRecommenderRes ({ commit }, id) {
      axios.get('/sim', {
        params: {
          id: id,
          size: 5
        }
      }).then(res => {
        commit('changeRecommenderRes', res.data)
      })
    }
  }
})
