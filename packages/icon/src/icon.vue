<template>
    <i :class="name" :style="{fontSize:size+'px',color}"></i>
</template>

<script>
import { isColor } from '../../assets/js/common'
const COMPONENT_NAME = 'lity-icon'
export default {
  name: COMPONENT_NAME,
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: 'inherit'
    }
  }
}

</script>

<style>
</style>
