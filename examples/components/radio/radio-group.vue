<template>
    <div class="lity-checkbox-group">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
import { provide } from 'vue'
import { isColor } from '../../assets/js/common'
const COMPONENT_NAME = 'lity-checkbox-group'
export default {
  name: COMPONENT_NAME,
  emits: ['change'],
  props: {
    modelValue: {
      type: [String, Number]
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#07c160'
    },
    size: {
      type: Number,
      default: 20
    }
  },
  setup (props, context) {
    provide('groupRadio', { props, context })
  }
}
</script>
