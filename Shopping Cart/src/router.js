import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index'
import Nav from './components/nav'
import Cart from './components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/cart',
      component: Cart,
    }
  ]
})