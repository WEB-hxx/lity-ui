// 导入Toast组件
import {
  createApp
} from 'vue'
import Comp from './toast.vue'
let isLock = false
let [toastTimer, toastVM, toastWrapper] = [null, null, null]
const Toast = (options = {}) => {
  if (isLock) return
  isLock = true
  toastVM = createApp(Comp)
  toastWrapper = document.createElement('div')
  toastWrapper.id = 'lity-toast'
  document.body.appendChild(toastWrapper)
  toastVM.mount('#lity-toast')
  var instance = toastVM._instance.data
  instance.msg = options.msg
  instance.icon = options.icon
  instance.imgurl = options.imgurl
  instance.time = options.time || 3000

  if (toastTimer) clearTimeout(toastTimer)
  // 定时器，持续时长之后隐藏
  toastTimer = setTimeout(() => {
    isLock = false
    document.body.removeChild(toastWrapper)
    clearTimeout(toastTimer)
  }, instance.time)
}

export default Toast
