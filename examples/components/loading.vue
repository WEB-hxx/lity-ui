<template>
  <div class="lity-loading">
    <span class="lity-loading-spinners" :style="sizeFont">
      <i class="lity-loading-spinner" :style="bgColor" v-for="item in balde" :key="item"></i>
    </span>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
const COMPONENT_NAME = 'lity-loading'
export default {
  name: COMPONENT_NAME,
  props: {
    size: {
      type: Number
    },
    color: {
      type: String
    }
  },
  setup (props) {
    const balde = ref(12)
    const sizeFont = computed(() => {
      if (!props.size) {
        return
      }
      const value = `${props.size}px`
      return {
        width: value,
        height: value
      }
    })
    const bgColor = computed(() => {
      if (!props.color) {
        return
      }
      const value = `${props.color}`
      return {
        backgroundColor: value
      }
    })
    return {
      balde,
      sizeFont,
      bgColor
    }
  }
}
</script>
<style lang="scss">
  @import "../assets/scss/variable.scss";
  .lity-loading{
     font-size: $fontsize-large-xxx;
  }
  .lity-loading-spinners{
    position: relative;
    display: block;
    width: 1em;
    height: 1em;
  }
  .lity-loading-spinner{
    position: absolute;
    left: 44.5%;
    top: 37%;
    width: 2px;
    height: 25%;
    border-radius: 50%/20%;
    opacity: .25;
    background-color: currentColor;
    animation: spinner-fade 1s linear infinite;
    @for $num from 1 through 12{
        &:nth-child(#{$num}){
          animation-delay:#{(($num - 1) / 12)}s;
          transform: rotate(30deg * ($num - 6)) translateY(-150%);
        }
    }
  }
  @keyframes spinner-fade{
    0%{
      opacity: .85
    }
    50%{
      opacity: .25
    }
    100%{
       opacity: .25
    }
  }
</style>
