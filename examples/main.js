import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/index.scss'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
const app = createApp(App)

app.directive('highlight', function (el) {
  const codes = el.querySelectorAll('pre code')
  setTimeout(() => {
    codes.forEach((block) => {
      hljs.highlightBlock(block)
    })
  }, 200)
})
app.use(router).mount('#app')
