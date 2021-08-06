import { Toast, Comp } from './src/api'

Toast.install = function (Vue) {
  Vue.component(Comp.name, Comp)
}

export default Toast
