<template>
    <span class="lity-rate" :style="{ color: color}">
        <a href="javascript:;"
           v-for="item, key in ~~count"
           :key="key"
           :class="checkVal >= item ? 'lityic-collect_fill' : 'lityic-collect'"
           :style="{color: checkVal >= item ? activeColor : color, fontSize: size+'px', paddingRight: justify+'px'}"
           @click="!readonly && choose(item)"
        ></a>
        <span class="lity-rate-text" v-if="!!str" v-html="str"></span>
    </span>
</template>
<script>
import { isColor } from '../assets/js/common.js'
import { ref, onMounted, nextTick } from 'vue'
const COMPONENT_NAME = 'lity-rate'
export default {
  name: COMPONENT_NAME,
  emits: ['update:modelValue'],
  props: {
    count: {
      validator (val) {
        return /^(([1-9]\d*)|0)$/.test(val)
      },
      default: 5
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
      default: '#EAEAEA'
    },
    activeColor: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#FF5D50'
    },
    modelValue: {
      type: Number,
      default: 0
    },
    showText: {
      type: Array,
      default () {
        return []
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    justify: {
      type: Number,
      default: 5
    }
  },
  setup (props, context) {
    const str = ref('')
    const checkVal = ref(props.modelValue)
    onMounted(() => {
      nextTick(() => choose(props.modelValue))
    })
    function choose (index) {
      checkVal.value = index
      context.emit('update:modelValue', index)
      if (props.showText) {
        str.value = props.showText[index - 1] || ''
      }
    }
    return {
      checkVal,
      str,
      choose
    }
  }
}
</script>
<style lang="scss">
 .lity-rate{
    display: flex;
    align-items: center;
    &-text {
      color: #657180;
      margin-left: 8px;
      font-size: 16px;
    }
  }
</style>
