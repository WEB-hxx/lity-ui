import Style from './style'
import Button from './button'
import CheckboxGroup from './checkbox-group'
import Checkbox from './checkbox'
import Grid from './grid'
import GridItem from './grid-item'
import Icon from './icon'
import Input from './input'
import Loading from './loading'
import Radio from './radio'
import RadioGroup from './radio-group'
import Rate from './rate'
import Slider from './slider'
import SliderItem from './slider-item'
import Switch from './switch'
import Tab from './tab'
import TabPanel from './tab-panel'
import Tag from './tag'
import Textarea from './textarea'
import Toast from './toast'
import Dialog from './dialog'

const components = [
  Button,
  CheckboxGroup,
  Checkbox,
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
  Tab,
  TabPanel,
  Tag,
  Textarea
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  Style,
  Toast,
  Dialog,
  Button,
  CheckboxGroup,
  Checkbox,
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
  Tab,
  TabPanel,
  Tag,
  Textarea
}
export default {
  install,
  Style,
  Toast,
  Dialog,
  Button,
  CheckboxGroup,
  Checkbox,
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
  Tab,
  TabPanel,
  Tag,
  Textarea
}
