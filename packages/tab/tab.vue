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
   <div class="lity-tab-panels">
     <div class="lity-tab-panels-group" ref="panelGroupRef">
        <slot></slot>
     </div>
   </div>
</template>

<script>
import { ref, onMounted, computed, nextTick } from 'vue'
const COMPONENT_NAME = 'lity-tab'
export default {
  name: COMPONENT_NAME,
  emits: ['click', 'update:modelValue'],
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    modelValue: {
      type: [String, Number]
    },
    showSlider: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const sliderRef = ref(null)
    const tabRef = ref(null)
    const panelGroupRef = ref(null)
    onMounted(() => {
      _updateSliderStyle()
    })
    const isActive = computed({
      get () {
        return props.modelValue
      },
      set (value) {
        context.emit('update:modelValue', value)
      }
    })
    function _updateSliderStyle () {
      if (!props.showSlider) return
      const slider = sliderRef.value
      nextTick(() => {
        const { width, index } = _getSliderWidthCurrentIndex()
        slider.style.width = `${width}px`
        setSliderTransform(_getOffsetLeft(index))
      })
    }
    function setSliderTransform (offsetObj) {
      const slider = sliderRef.value
      const panelGroup = panelGroupRef.value
      if (typeof offsetObj.offsetLeft === 'number') {
        offsetObj.offsetLeft = `${offsetObj.offsetLeft}px`
        offsetObj.panelOffsetLeft = `${offsetObj.panelOffsetLeft}px`
      }
      if (slider) {
        const linear = 'all 0.3s linear'
        slider.style.transition = linear
        slider.style.transform = `translateX(${offsetObj.offsetLeft}) translateZ(0)`
        panelGroup.style.transition = linear
        panelGroup.style.transform = `translate(-${offsetObj.panelOffsetLeft}, 0) scale(1) translateZ(0)`
      }
    }
    function _getSliderWidthCurrentIndex () {
      let width = 0
      let index = 0
      const child = tabRef.value.children
      if (props.data.length > 0) {
        index = props.data.findIndex((tab) => tab.label === isActive.value)
        width = child[index].clientWidth
      }
      return {
        width,
        index
      }
    }
    function _getOffsetLeft (index) {
      let offsetLeft = 0
      let panelOffsetLeft = 0
      const child = tabRef.value.children
      const panelChild = panelGroupRef.value.children
      props.data.forEach((tab, i) => {
        if (i < index) {
          offsetLeft += child[i].clientWidth
          panelOffsetLeft += panelChild[i].clientWidth
        }
      })
      return {
        offsetLeft,
        panelOffsetLeft
      }
    }
    function handleClick (value) {
      isActive.value = value
      _updateSliderStyle()
      context.emit('click', isActive.value)
    }
    return {
      handleClick,
      isActive,
      sliderRef,
      tabRef,
      panelGroupRef
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
   .lity-tab-panels{
      position: relative;
      padding-top:10px;
      overflow: hidden;
     &-group{
        display: flex;
        transition: all .4s linear;
     }
    }
</style>
