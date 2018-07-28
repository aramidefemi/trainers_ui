import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/layout/auth'
import dashboard from '@/layout/dashboard'
import employees from '@/layout/employees'
import trainings from '@/layout/trainings'
import trainers from '@/layout/trainers'


import SignUp from '@/pages/auth/signup'
import Signin from '@/pages/auth/signin'

import index from '@/pages/dashboard/index'

import allemployees from '@/pages/employees/index'

import alltrainers from '@/pages/trainers/index'

import alltrainings from '@/pages/trainings/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth,
      children : [
        {
        path: 'signup',
        component: SignUp
      },
        {
        path: 'signin',
        component: Signin
      }
    ]
  },
    {
      path: '/user',
      name: 'dashboard',
      component: dashboard,
      children : [
        {
        path: 'index',
        component: index
      }
    ]
    },
    {
      path: '/employees',
      name: 'employees',
      component: employees,
      children : [
        {
        path: 'all',
        component: allemployees
      }
    ]
    },
    {
      path: '/trainers',
      name: 'trainers',
      component: trainers,
      children : [
        {
        path: 'all',
        component: alltrainers
      }
    ]
    },
    {
      path: '/trainings',
      name: 'trainings',
      component: trainings,
      children : [
        {
        path: 'all',
        component: alltrainings
      }
    ]
    }
  ]
})
