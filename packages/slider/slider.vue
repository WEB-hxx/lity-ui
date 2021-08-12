<template>
      <div class="lity-slider" ref="rootRef" :class="direction == 'vertical' ? 'lity-slider-vertical':''" @change="changeHander">
        <div class="lity-slider-group">
          <slot></slot>
        </div>
        <div :class="direction == 'vertical' ? 'lity-dots-vertical':'lity-dots-wrapper'" v-if="showDot && data.length>1">
          <span
            class="lity-dot"
            v-for="(item, index) in data"
            :key="index"
            :class="{'lity-dot-active': currentPageIndex === index}">
          </span>
        </div>
      </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { onMounted, onUnmounted, onActivated, onDeactivated, ref, nextTick } from 'vue'
BScroll.use(Slide)
const COMPONENT_NAME = 'lity-slider'
export default {
  name: COMPONENT_NAME,
  emits: ['change'],
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 400
    },
    interval: {
      type: Number,
      default: 3000
    },
    showDot: {
      type: Boolean,
      default: true
    },
    direction: {
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1
      },
      default: 'horizontal'
    }
  },
  setup (props, context) {
    const rootRef = ref(null)
    const slider = ref(null)
    const currentPageIndex = ref(0)
    onMounted(async () => {
      await nextTick()
      const sliderVal = slider.value = new BScroll(rootRef.value, {
        click: true,
        scrollX: !!(props.direction === 'horizontal'),
        scrollY: !!(props.direction === 'vertical'),
        momentum: false,
        bounce: false,
        probeType: 2,
        slide: true,
        loop: props.direction,
        speed: props.speed,
        autoplay: props.autoplay,
        interval: props.interval
      })

      sliderVal.on('slideWillChange', (page) => {
        currentPageIndex.value = props.direction === 'horizontal' ? page.pageX : page.pageY
        context.emit('change', currentPageIndex.value)
      })
    })

    onUnmounted(() => {
      slider.value.destroy()
    })

    onActivated(() => {
      slider.value.enable()
      slider.value.refresh()
    })

    onDeactivated(() => {
      slider.value.disable()
    })

    return {
      slider,
      rootRef,
      currentPageIndex
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/variable.scss";
 .lity-slider {
    position: relative;
    min-height: 1px;
    font-size: 0;
    touch-action: pan-y;
    overflow: hidden;
    &-group {
      overflow: hidden;
      white-space: nowrap;
    }
    .lity-dots-wrapper {
      position: absolute;
      left: 50%;
      bottom: 12px;
      line-height: 12px;
      transform: translateX(-50%);
      .lity-dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        transform: translateZ(1px);
        border-radius: 50%;
        background: $color-light-grey-sss;
        &-active {
          width: 20px;
          border-radius: 5px;
          background:$color-green;
        }
      }
    }
  }
  .lity-slider-vertical{
     height: 100%;
    .lity-slider-group{
      white-space: normal;
    }
    .lity-dots-vertical{
        position: absolute;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
      .lity-dot {
        display: block;
        margin: 4px 0;
        width: 8px;
        height: 8px;
        transform: translateZ(1px);
        border-radius: 50%;
        background: $color-light-grey-sss;
        &-active {
          height: 20px;
          border-radius: 5px;
          background:$color-green;
        }
    }
  }
}
</style>
