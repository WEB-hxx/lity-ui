<template>
 <div class="lity-count-dowm">
    <span v-html="str"></span>
    <span ref="tpl" v-if="showTpl"><slot></slot></span>
 </div>
</template>

<script>
import { onMounted, ref, watch, nextTick, onUnmounted } from 'vue'
const COMPONENT_NAME = 'lity-count-down'
export default {
  name: COMPONENT_NAME,
  props: {
    time: {
      type: [String, Number, Date]
    },
    format: {
      type: String,
      default: '{%d}天{%h}时{%m}分{%s}秒'
    },
    timetype: {
      validator (value) {
        return ['datetime', 'second', 'timestamp'].indexOf(value) > -1
      },
      default: 'datetime'
    },
    callback: {
      type: Function
    },
    doneText: {
      type: String,
      default: '已结束'
    }
  },
  setup (props, context) {
    const str = ref('')
    const lastTime = ref(null)
    const timer = ref(null)
    const tempFormat = ref('')
    const showTpl = ref(true)
    const tpl = ref(null)
    onMounted(async () => {
      await nextTick()
      tempFormat.value = context.slots.default ? tpl.value.innerHTML : props.format
      showTpl.value = false
      run()
    })
    onUnmounted(() => {
      clearInterval(timer.value)
    })
    watch(timer, (newVal, oldVal) => {
      clearInterval(newVal)
      newVal && run()
    })
    function run () {
      if (!props.time) return

      if (props.timetype === 'second') {
        lastTime.value = Math.floor(new Date() / 1000) + ~~props.time
      } else if (props.timetype === 'timestamp') {
        lastTime.value = Math.floor(new Date(props.time).getTime())
      } else {
        lastTime.value = Math.floor(new Date(props.time).getTime() / 1000)
      }

      if (props.time instanceof Date) {
        lastTime.value = Math.floor(props.time.getTime() / 1000)
      }

      doRun()

      timer.value = setInterval(doRun, 1000)
    }
    function doRun () {
      const leftTime = lastTime.value - Math.floor(new Date().getTime() / 1000)

      if (leftTime > 0) {
        str.value = timestampTotime(leftTime)
      } else {
        props.callback && props.callback()
        str.value = props.doneText
        clearInterval(timer.value)
      }
    }
    function timestampTotime (time) {
      let format = tempFormat.value
      const t = {}
      t.s = time % 60
      time = Math.floor(time / 60)
      t.m = time % 60
      time = Math.floor(time / 60)
      t.h = time % 24
      t.d = Math.floor(time / 24)
      const ment = function (a) {
        if (a <= 0) return '00'
        return a < 10 ? '0' + a : a
      }
      // {s: 28, m: 44, h: 23, d: 0}
      const arr = ['d', 'h', 'm', 's']
      arr.forEach((val) => {
        // const day = ment(t[val]).toString().split('')
        format = format.replace('{%' + val + '}', ment(t[val]))
        // format = format.replace('{%' + val + '0}', ~~day[day.length - 3] !== 0 ? day[day.length - 3] : '')
        // format = format.replace('{%' + val + '1}', ~~day[day.length - 2])
        // format = format.replace('{%' + val + '2}', ~~day[day.length - 1])
      })

      return format
    }
    return {
      str,
      tpl,
      showTpl
    }
  }
}

</script>

<style lang="scss">
  @import "../../assets/scss/variable.scss";
  @import "../../assets/scss/mixins.scss";

  .lity-count-dowm{
    color: #666;
  }

</style>
