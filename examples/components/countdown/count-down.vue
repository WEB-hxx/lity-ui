<template>
 <div class="lity-count-dowm" :time="time" :format="format">
   {{countDown}}
 </div>
</template>

<script>
// import { onMounted, ref } from 'vue'
const COMPONENT_NAME = 'lity-count-down'
export default {
  name: COMPONENT_NAME,
  props: {
    time: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  data () {
    return {
      countDown: ''
    }
  },
  created () {
    window.setInterval(() => {
      this.getTime(this.time)
    }, 1000)
  },
  methods: {
    addZero (num) {
      return num < 10 ? '0' + num : num + ''
    },
    getTime (time) {
      let times = time / 1000
      --times
      let h = parseInt(times / 60 / 60 % 24)
      h = this.addZero(h)
      let m = parseInt(times / 60 % 60)
      m = this.addZero(m)
      let s = parseInt(times % 60)
      s = this.addZero(s)
      this.countDown = `${h}:${m}:${s}`
    }
  }
}
//   setup (props, context) {
//     const countDown = ref(0)
//     // eslint-disable-next-line vue/no-setup-props-destructure
//     onMounted(() => {
//       countDownEvent()
//     })
//     function addZero (num) {
//       return num < 10 ? '0' + num : num + ''
//     }
//     function countDownEvent () {
//       let times = props.time / 1000
//       times--
//       let h = parseInt(times / 60 / 60 % 24)
//       h = addZero(h)
//       let m = parseInt(times / 60 % 60)
//       m = addZero(m)
//       let s = parseInt(times % 60)
//       s = addZero(s)
//       setTimeout(countDownEvent, 1000)
//       countDown.value = `${h}:${m}:${s}`
//     }
//     return {
//       countDownEvent,
//       countDown
//     }
//   }
// }

</script>

<style lang="scss">
  @import "../../assets/scss/variable.scss";
  @import "../../assets/scss/mixins.scss";

  .lity-count-dowm{
    color: #666;
  }

</style>
