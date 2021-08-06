<template>
    <div class="lity-textarea" :class="readonly ? 'lity-textarea-readonly' : ''">
        <textarea v-model="textStr"
                  :disabled="disabled"
                  :style="height?`height:${height}px`:'height:120px'"
                  :placeholder="placeholder"
                  :maxlength="maxlength"
                  :readonly="readonly"
                  @input="changeHalder"
        ></textarea>
        <div class="lity-textarea-counter" v-if="showCounter && maxlength"><span>{{num}}</span>/{{maxlength}}</div>
    </div>
</template>

<script>
import { ref, computed, onMounted, nextTick } from 'vue'
const COMPONENT_NAME = 'lity-textarea'
export default {
  name: COMPONENT_NAME,
  emits: ['input', 'update:modelValue'],
  props: {
    maxlength: {
      validator (val) {
        if (!val) return true
        return /^(([1-9]\d*)|0)$/.test(val)
      }
    },
    placeholder: {
      type: String
    },
    height: {
      type: Number
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String
    },
    showCounter: {
      type: Boolean,
      default: true
    },
    change: {
      type: Function
    }
  },
  setup (props, context) {
    const num = ref(0)
    onMounted(() => {
      nextTick(() => {
        const v = props.modelValue
        if (!v) return
        textStr.value = v.length > props.maxlength ? v.substr(v, props.maxlength) : v
      })
    })
    const textStr = computed({
      get () {
        return props.modelValue
      },
      set (value) {
        num.value = value.length
        context.emit('update:modelValue', value)
      }
    })
    function changeHalder () {
      context.emit('input', textStr.value)
    }
    return {
      textStr,
      changeHalder,
      num
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/variable.scss";
 @import "../../assets/scss/mixins.scss";
  .lity-textarea {
    padding: 10px;
    background-color: $textarea-bgc;
    width: 100%;
    box-sizing: border-box;
    @include border-1px($textarea-border-color);
    border-radius: 2px;
    > textarea {
      border: none;
      width: 100%;
      display: block;
      font-size: 14px;
      color: $input-color;
      outline: none;
      resize: none;
      background-color: transparent;
      &[disabled] {
         opacity: 0.6;
      }
    }

    &-readonly {
      opacity: .3;
    }

    &-counter {
      font-size: 14px;
      color: $color-light-grey-s;
      text-align: right;
      padding-top: 6px;
    }
  }
</style>
