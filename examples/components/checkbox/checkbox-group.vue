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
  emits: ['change'],
  props: {
    modelValue: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props, context) {
    provide('groupCheckbox', { props, context })
  }
}
</script>
