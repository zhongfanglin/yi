import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from '@/router/homeRouter'
import categoryRouter from '@/router/categoryRouter'
import mineRouter from '@/router/mineRouter'
import cartRouter from '@/router/cartRouter'
import topicRouter from '@/router/topicRouter'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRouter,
    categoryRouter,
    mineRouter,
    cartRouter,
    topicRouter,
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
