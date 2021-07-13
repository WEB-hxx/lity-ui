import { createRouter, createWebHashHistory } from 'vue-router'
import Button from '../pages/btnPage.vue'
import Icon from '../pages/iconPage.vue'

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/icon',
    component: Icon
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
