<template>
   <div class="lity-slider" ref="rootRef">
    <div class="lity-slider-group">
      <slot></slot>
    </div>
    <div class="lity-dots-wrapper">
      <span
        class="lity-dot"
        v-for="(item, index) in data"
        :key="item.id"
        :class="{'lity-dot-active': currentPageIndex === index}">
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSlider from './use-slider'
const COMPONENT_NAME = 'lity-slider'
export default {
  name: COMPONENT_NAME,
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props) {
    const rootRef = ref(null)
    const { currentPageIndex } = useSlider(rootRef, props)
    return {
      rootRef,
      currentPageIndex
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/variable.scss";
 .lity-slider {
    position: relative;
    min-height: 1px;
    font-size: 0;
    touch-action: pan-y;
    &-group {
      overflow: hidden;
      white-space: nowrap;
      &-item {
        display: inline-block;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        a {
          display: block;
          width: 100%;
        }
        img {
          display: block;
          width: 100%;
        }
      }
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
</style>
