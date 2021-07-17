import { createRouter, createWebHashHistory } from 'vue-router'
import Button from '../pages/btnPage.vue'
import Icon from '../pages/iconPage.vue'
import Loading from '../pages/loadingPage.vue'
import Gird from '../pages/girdPage.vue'

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/icon',
    component: Icon
  },
  {
    path: '/loading',
    component: Loading
  },
  {
    path: '/gird',
    component: Gird
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
