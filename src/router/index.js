import Vue from 'vue'
import Router from 'vue-router'
import Chack from '@/views/Chack.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Chack',
      component: Chack
    },
  ]
})
