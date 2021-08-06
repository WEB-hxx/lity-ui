import { Dialog, Comp } from './src/api'

Dialog.install = function (Vue) {
  Vue.component(Comp.name, Comp)
}

export default Dialog
