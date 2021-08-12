<template>
  <span class = "lity-tag"
     :class = "TagTypeClass"
     :style="{backgroundColor: bgcolor, color: color, transform: 'scale('+scale+')'}">
    <slot></slot>
  </span>
</template>

<script >
import { isColor } from '../assets/js/common.js'
import { computed } from 'vue'
const COMPONENT_NAME = 'lity-tag'
export default {
  name: COMPONENT_NAME,
  props: {
    type: {
      type: String,
      default: ''
    },
    bgcolor: {
      type: String
    },
    shape: {
      type: String,
      default: 'circle'
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#fff'
    },
    scale: {
      type: Number,
      default: 1
    }
  },
  setup (props) {
    const TagTypeClass = computed(() => {
      if (props.bgcolor) {
        if (props.shape === 'square') {
          return ' lity-tag-radius'
        }
        return ''
      }
      return (props.type ? 'lity-tag-' + props.type : '') + (props.shape === 'square' ? ' lity-tag-radius' : '')
    })
    return {
      TagTypeClass
    }
  }
}

</script>

<style lang="scss" >
  @import "../assets/scss/variable.scss";
  .lity-tag{
      color: $action-sheet-bgc;
      font-size: 12px;
      position: relative;
      display: inline-block;
      border-radius: 1000px;
      line-height: 1;
      padding: 3px 6px;
      white-space: nowrap;
      background-color: $color-regular-blue;
      transform-origin: center center;
     &-primary {
        color: $btn-primary-color;
        background: $btn-primary-bgc;
     }
     &-success{
        color: $btn-success-color;
        background: $btn-success-bgc;
     }
     &-warning{
        color: $btn-warning-color;
        background: $btn-warning-bgc;
     }
     &-danger{
        color: $btn-danger-color;
        background: $btn-danger-bgc;
     }
     &-radius{
        border-radius: 3px;
     }
 }
</style>
