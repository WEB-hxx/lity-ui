// 导入Toast组件
import {
  createApp
} from 'vue'
import Comp from './toast.vue'
let isLock = false
let toastTimer = null
const Toast = (options = {}) => {
  if (isLock) return
  isLock = true
  const el = document.createElement('div')
  const app = createApp(Comp)
  const instance = app.mount(document.body.appendChild(el))
  instance.msg = options.msg
  instance.icon = options.icon
  instance.imgurl = options.imgurl
  instance.time = options.time || 3000

  if (toastTimer) clearTimeout(toastTimer)
  // 定时器，持续时长之后隐藏
  toastTimer = setTimeout(() => {
    isLock = false
    document.body.removeChild(el)
    clearTimeout(toastTimer)
  }, options.time || 3000)
}

export default Toast
