import { createRouter, createWebHashHistory } from 'vue-router'
import Button from '../pages/btnPage.vue'
import Icon from '../pages/iconPage.vue'
import Loading from '../pages/loadingPage.vue'
import Gird from '../pages/girdPage.vue'
import Toast from '../pages/toastPage.vue'
import Tag from '../pages/tagPage.vue'
import Tab from '../pages/tabPage.vue'
import Checkbox from '../pages/checkboxPage.vue'
import Radio from '../pages/radioPage.vue'
import Input from '../pages/inputPage.vue'
import Switch from '../pages/switchPage.vue'
import TextArea from '../pages/TextAreaPage.vue'
import Slider from '../pages/sliderPage.vue'
import QuickStart from '../pages/quickPage.vue'
import Rate from '../pages/ratePage.vue'
import Dialog from '../pages/dialogPage.vue'
import CountDown from '../pages/countdownPage.vue'
import Test from '../pages/scrollP.vue'

const routes = [
  {
    path: '/',
    redirect: '/quickstart',
    component: QuickStart
  },
  {
    path: '/quickstart',
    component: QuickStart
  },
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
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/input',
    component: Input
  },
  {
    path: '/switch',
    component: Switch
  },
  {
    path: '/textarea',
    component: TextArea
  },
  {
    path: '/rate',
    component: Rate
  },
  {
    path: '/slider',
    component: Slider
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/countdown',
    component: CountDown
  },
  {
    path: '/test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

export default router
