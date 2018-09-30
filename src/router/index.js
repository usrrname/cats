import Vue from 'vue'
import Router from 'vue-router'
import Cats from '@/components/Cats'
import Landing from '@/components/Landing'
import Tiddl from '@/components/Tiddl'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'App',
    component: Landing
  },
  {
    path: '/cats',
    name: 'cats',
    component: Cats
  },
  {
    path: '/tiddl',
    name: 'tiddl',
    component: Tiddl
  }
  ]
})
