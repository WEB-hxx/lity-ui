import Button from './button.vue'

const components = [
  Button
]

const install = function (Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
