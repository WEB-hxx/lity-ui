import './assets/scss/index.scss'
import LityButton from './button/button.vue'
import Base from './assets/scss/base.scss'
import LityCheckboxGroup from './checkbox/checkbox-group'
import LityCheckbox from './checkbox/checkbox.vue'
import LityGrid from './grid/grid.vue'
import LityGridItem from './grid/grid-item.vue'
import LityIcon from './icon/icon.vue'
import LityInput from './input/input.vue'
import LityLoading from './loading/loading.vue'
import LityRadio from './radio/radio.vue'
import LityRadioGroup from './radio/radio-group.vue'
import LityRate from './rate/rate.vue'
import LitySlider from './slider/slider.vue'
import LitySliderItem from './slider/slider-item.vue'
import LitySwitch from './switch/switch.vue'
import LityTab from './tab/tab.vue'
import LityTabPanel from './tab/tab-panel.vue'
import LityTag from './tag/tag.vue'
import LityTextarea from './textarea/textarea.vue'
import Toast from './toast/index'
import Dialog from './dialog/index'

const Button = {}
const CheckboxGroup = {}
const Checkbox = {}
const GridItem = {}
const Icon = {}
const Input = {}
const Loading = {}
const Radio = {}
const RadioGroup = {}
const Rate = {}
const Slider = {}
const SliderItem = {}
const Switch = {}
const Tab = {}
const TabPanel = {}
const Tag = {}
const Textarea = {}

Button.install = Vue => { Vue.component(LityButton.name, LityButton) }
CheckboxGroup.install = Vue => { Vue.component(LityCheckboxGroup.name, LityCheckboxGroup) }
Checkbox.install = Vue => { Vue.component(LityCheckbox.name, LityCheckbox) }
GridItem.install = Vue => { Vue.component(LityGridItem.name, LityGridItem) }
Icon.install = Vue => { Vue.component(LityIcon.name, LityIcon) }
Input.install = Vue => { Vue.component(LityInput.name, LityInput) }
Loading.install = Vue => { Vue.component(LityLoading.name, LityLoading) }
Radio.install = Vue => { Vue.component(LityRadio.name, LityRadio) }
RadioGroup.install = Vue => { Vue.component(LityRadioGroup.name, LityRadioGroup) }
Rate.install = Vue => { Vue.component(LityRate.name, LityRate) }
Slider.install = Vue => { Vue.component(LitySlider.name, LitySlider) }
SliderItem.install = Vue => { Vue.component(LitySliderItem.name, LitySliderItem) }
Switch.install = Vue => { Vue.component(LitySwitch.name, LitySwitch) }
Tab.install = Vue => { Vue.component(LityTab.name, LityTab) }
TabPanel.install = Vue => { Vue.component(LityTabPanel.name, LityTabPanel) }
Tag.install = Vue => { Vue.component(LityTag.name, LityTag) }
Textarea.install = Vue => { Vue.component(LityTextarea.name, LityTextarea) }

export {
  Base,
  Button,
  CheckboxGroup,
  Checkbox,
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
  Textarea,
  Toast,
  Dialog
}

const components = [
  LityButton,
  LityCheckboxGroup,
  LityCheckbox,
  LityGrid,
  LityGridItem,
  LityIcon,
  LityInput,
  LityLoading,
  LityRadio,
  LityRadioGroup,
  LityRate,
  LitySlider,
  LitySliderItem,
  LitySwitch,
  LityTab,
  LityTabPanel,
  LityTag,
  LityTextarea
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

export default {
  install
}
