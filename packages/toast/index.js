// 导入Toast组件
import {
  createApp
} from 'vue'
import Comp from './src/toast.vue'
let isLock = false
// let toastTimer = null
const Toast = (options = {}) => {
  if (isLock) return
  isLock = true

  var el = document.createElement('div')
  const app = createApp(Comp)
  app.mount(document.body.appendChild(el))
  // console.log(options.msg)
  // instance.msg = options.msg
  // instance.icon = options.icon
  // instance.imgUrl = options.imgUrl
  // instance.time = options.time
  // if (toastTimer) clearTimeout(toastTimer)
  // // 定时器，持续时长之后隐藏
  // toastTimer = setTimeout(() => {
  //   isLock = false
  //   document.body.removeChild(el)
  //   clearTimeout(toastTimer)
  // }, options.time || 3000)
}
export default Toast
