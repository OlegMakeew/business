import { createRouter, createWebHashHistory } from 'vue-router'
import Review from '../views/Review.vue'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/review',
    name: 'Review',
    component: Review
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
