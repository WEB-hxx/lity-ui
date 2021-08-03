import {
  createApp
} from 'vue'
import { isLock } from '../../assets/js/common'
import Comp from './dialog.vue'
const Dialog = (options = {}) => {
  const el = document.createElement('div')
  const name = Comp.name
  if (name) {
    append(el)
    const instance = Comp.props
    instance.title = options.title
    instance.type = options.type
    instance.content = options.content
    instance.confirm = options.confirm
  }

//   remove(el)
}

function append (el) {
  const app = createApp(Comp)
  app.mount(document.body.appendChild(el))
  console.log(app)
  isLock.lock()
}

// function remove (el) {
//   isLock.unlock()
//   document.body.removeChild(el)
// }

export default Dialog
