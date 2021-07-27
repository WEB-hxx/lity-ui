<template>
    <div class="lity-checkbox-group">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
import { provide } from 'vue'
const COMPONENT_NAME = 'lity-checkbox-group'
export default {
  name: COMPONENT_NAME,
  emits: ['change', 'update:modelValue'],
  props: {
    modelValue: {
      type: Array,
      default () {
        return []
      }
    },
    color: {
      type: String,
      default: '#07c160'
    },
    size: {
      type: Number,
      default: 20
    },
    shape: {
      validator (value) {
        return ['square', 'circle'].indexOf(value) > -1
      },
      default: 'square'
    }
  },
  setup (props, context) {
    provide('groupCheckbox', { props, context })
  }
}
</script>
