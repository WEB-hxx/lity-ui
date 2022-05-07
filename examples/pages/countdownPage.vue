<template>
  <div style="padding:10px">
    <lity-count-down :time="time"></lity-count-down>
  </div>
</template>

<script>
import { ref } from 'vue'
import LityCountDown from '../components/countdown/count-down'
export default {
  components: {
    LityCountDown
  },
  setup (props) {
    const time = ref(30 * 60 * 1000)
    return { time }
  }
}
</script>

<style scoped>

</style>
