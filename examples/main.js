import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss'
import LityButton from './components/button.vue'
import LityIcon from './components/icon.vue'

const app = createApp(App)

app.component(LityButton.name, LityButton)
  .component(LityIcon.name, LityIcon)
  .mount('#app')
