import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import View from '../views/View.vue'
import YouTuber from '../views/SingleYTView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: View
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/delete',
    name: 'view',
    component: Home
  }, 
  {
    path: '/user',
    name: 'SingleYouTubeView',
    component: YouTuber
  }, 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
