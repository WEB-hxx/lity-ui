<template>
    <i :class="name" :style="{fontSize:size+'px',color}"></i>
</template>

<script>
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
      type: String,
      default: 'inherit'
    }
  }
}

</script>

<style>
</style>
