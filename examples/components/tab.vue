<template>
   <div class="lity-tab" ref="tabRef">
      <template v-for="(item, index) in data" :key="index">
        <div class="lity-tab-item"
            :class="item.label === isActive ?'lity-tab_active':''"
            @click="handleClick(item.label)" >
                <div>{{item.label}}</div>
        </div>
       </template>
    <div v-if="showSlider" ref="sliderRef" class="lity-tab-slider"></div>
   </div>
   <div class="lity-tab-panel" ref="sliderPanelRef">
      <slot></slot>
   </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
const COMPONENT_NAME = 'lity-tab'
export default {
  name: COMPONENT_NAME,
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: [String, Number]
    },
    showSlider: {
      type: Boolean,
      default: false
    }
  },
  setup (props, content) {
    const isActive = ref(props.value)
    const sliderRef = ref(null)
    const tabRef = ref(null)
    onMounted(() => {
      _updateSliderStyle(isActive.value)
    })
    function _updateSliderStyle (value) {
      if (!props.showSlider) return
      const slider = sliderRef.value
      nextTick(() => {
        const { width, index } = _getSliderWidthCurrentIndex(value)
        slider.style.width = `${width}px`
        setSliderTransform(_getOffsetLeft(index))
      })
    }
    function setSliderTransform (offset) {
      const slider = sliderRef.value
      if (typeof offset === 'number') {
        offset = `${offset}px`
      }
      if (slider) {
        slider.style.transition = 'all 0.2s linear'
        slider.style.transform = `translateX(${offset}) translateZ(0)`
      }
    }
    function _getSliderWidthCurrentIndex (value) {
      let width = 0
      let index = 0
      const child = tabRef.value.children
      if (props.data.length > 0) {
        index = props.data.findIndex((tab) => tab.label === value)
        width = child[index].clientWidth
      }
      return {
        width,
        index
      }
    }
    function _getOffsetLeft (index) {
      let offsetLeft = 0
      const child = tabRef.value.children
      props.data.forEach((tab, i) => {
        if (i < index) offsetLeft += child[i].clientWidth
      })
      return offsetLeft
    }
    function handleClick (value) {
      isActive.value = value
      _updateSliderStyle(value)
      content.emit('click', value)
    }
    return {
      handleClick,
      isActive,
      sliderRef,
      tabRef
    }
  }
}

</script>

<style lang="scss" >
  @import "../assets/scss/variable.scss";
  .lity-tab {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &-item{
        flex: 1;
        padding: 7px 0;
        color: $tab-color;
        text-align: center;
        cursor: pointer;
    }
    &_active{
        color: $tab-active-color
    }
  }
  .lity-tab-slider {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 20px;
      background-color: $tab-slider-bgc;
   }
   .lity-tab-panel{
      position: relative;
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }
</style>
