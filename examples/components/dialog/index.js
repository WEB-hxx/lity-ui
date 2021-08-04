import {
  createApp
} from 'vue'
import { isLock } from '../../assets/js/common'
import Comp from './dialog.vue'
const Dialog = (options = {}) => {
  const el = document.createElement('div')
  const app = createApp(Comp)
  const instance = app.mount(document.body.appendChild(el))
  instance.title = options.title || '温馨提示'
  instance.type = options.type || 'confirm'
  instance.content = options.content
  instance.confirm = options.confirm
  isLock.lock()
  instance.closeConfirm = function (stay, callback) {
    remove(el, callback, stay)
  }
}

function remove (el, callback, stay) {
  let stopClose = true
  if (typeof callback === 'function') {
    stopClose = callback()
    if (stopClose === undefined) stopClose = true
  }
  if (!stopClose || stay) return
  isLock.unlock()
  document.body.removeChild(el)
}

export default Dialog
