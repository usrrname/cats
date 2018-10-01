import Vue from 'vue'
import Router from 'vue-router'
import Cats from '@/components/Cats'
import Landing from '@/components/Landing'
import Tiddl from '@/components/Tiddl'
import Process from '@/components/Process'
import Story from '@/components/Story'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'App',
    component: Landing
  },
  {
    path: '/process',
    name: 'process',
    component: Process
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
  },
  {
    path: '/about',
    name: 'story',
    component: Story
  }
  ]
})
