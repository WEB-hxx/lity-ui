import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/index.scss'
/* eslint-disable no-unused-vars */
import Lity from '../dist/lity-ui.umd.js'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
const app = createApp(App)
console.log(Lity)
app.directive('highlight', function (el) {
  const codes = el.querySelectorAll('pre code')
  setTimeout(() => {
    codes.forEach((block) => {
      hljs.highlightBlock(block)
    })
  }, 200)
})
app.use(router).mount('#app')
