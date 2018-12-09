import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SearchResult.vue')
    },
    {
      path: '/service/:id',
      name: 'service',
      component: () => import(/* webpackChunkName: "about" */ './views/DetailAndRecommend.vue')
    }
  ]
})
