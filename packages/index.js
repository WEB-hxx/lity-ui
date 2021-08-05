import Style from './components/style/index'
import Button from './components/button/button.vue'
import CheckboxGroup from './components/checkbox/checkbox-group.vue'
import Checkbox from './components/checkbox/checkbox.vue'
import Dialog from './components/dialog/index'
import Grid from './components/grid/grid.vue'
import GridItem from './components/grid/grid-item.vue'
import Icon from './components/icon/icon.vue'
import Input from './components/input/input.vue'
import Loading from './components/loading/loading.vue'
import Radio from './components/radio/radio.vue'
import RadioGroup from './components/radio/radio-group.vue'
import Rate from './components/rate/rate.vue'
import Slider from './components/slider/slider.vue'
import SliderItem from './components/slider/slider-item.vue'
import Switch from './components/switch/switch.vue'
import Tab from './components/tab/tab.vue'
import TabPanel from './components/tab/tab-panel.vue'
import Tag from './components/tag/tag.vue'
import Textarea from './components/textarea/textarea.vue'
import Toast from './components/toast/toast.vue'

const components = [
  Button,
  CheckboxGroup,
  Checkbox,
  Dialog,
  Grid,
  GridItem,
  Icon,
  Input,
  Loading,
  Radio,
  RadioGroup,
  Rate,
  Slider,
  SliderItem,
  Switch,
  Style,
  Tab,
  TabPanel,
  Tag,
  Textarea,
  Toast
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
