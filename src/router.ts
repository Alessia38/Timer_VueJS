import { createRouter, createWebHistory } from 'vue-router'
import Home from './screens/Home.vue'
import History from './screens/History.vue'
import About from './screens/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router