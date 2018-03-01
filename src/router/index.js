import Vue from 'vue'
import Router from 'vue-router'
import Cover from '@/components/Cover'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import MentorList from '@/components/MentorList'
import UserPage from '@/components/UserPage'

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/mentorlist',
      name: 'MentorList',
      component: MentorList,
      meta: { requiresAuth: true }
    },
    {
      path: '/userpage',
      name: 'UserPage',
      component: UserPage,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let token = sessionStorage.token;
  if (to.meta.requiresAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
});

export default router;
