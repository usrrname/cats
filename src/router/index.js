import Vue from 'vue'
import Router from 'vue-router'
import comingsoon from '@/components/comingSoon'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'comingsoon',
    component: comingsoon
  }
  ]
})
