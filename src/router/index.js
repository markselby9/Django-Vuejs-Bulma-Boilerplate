import Vue from 'vue'
import Router from 'vue-router'
import Cover from '@/components/Cover'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
