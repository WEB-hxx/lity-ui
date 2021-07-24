import { createRouter, createWebHashHistory } from 'vue-router'
import Button from '../pages/btnPage.vue'
import Icon from '../pages/iconPage.vue'
import Loading from '../pages/loadingPage.vue'
import Gird from '../pages/girdPage.vue'
import Toast from '../pages/toastPage.vue'
import Tag from '../pages/tagPage.vue'
import Tab from '../pages/tabPage.vue'
import Checkbox from '../pages/checkboxPage.vue'

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
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/tag',
    component: Tag
  },
  {
    path: '/tab',
    component: Tab
  },
  {
    path: '/checkbox',
    component: Checkbox
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
