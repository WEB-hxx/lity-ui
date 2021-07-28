<template>
    <input type="checkbox"
           class="lity-switch"
           :class="`lity-switch-${size}`"
           :disabled="disabled"
           v-model="checked"
           @change="changeHalder"
           :style="{color: color}"
    />
</template>

<script type="text/babel">
import { computed } from 'vue'
import { isColor } from '../../assets/js/common'
const COMPONENT_NAME = 'lity-switch'
export default {
  name: COMPONENT_NAME,
  emits: ['change', 'update:modelValue'],
  props: {
    modelValue: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
      default: '#07c160'
    },
    size: {
      validator (val) {
        return ['small', 'normal', 'large'].indexOf(val) > -1
      },
      default: 'normal'
    },
    val: {
      type: [Boolean, String, Number]
    }
  },
  setup (props, context) {
    const checked = computed({
      get () {
        return props.modelValue
      },
      set (value) {
        context.emit('update:modelValue', value)
      }
    })
    function changeHalder () {
      if (props.disabled) return
      context.emit('change', checked.value)
    }
    return {
      checked,
      changeHalder
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/variable.scss";

.lity {
  &-switch {
    position: relative;
    z-index: 10;
    display: block;
    width: 48px;
    height: 27px;
    left: 0;
    border: 1px solid $color-light-grey-ss;
    border-radius: 16px;
     outline: none;
    -webkit-appearance: none;
    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      border-radius: 15px;
      transition: transform .3s;
    }

    &:before {
      width: 46px;
      background-color: $color-light-grey-ss;
    }

    &:after {
      width: 25px;
      background-color: $color-white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
    }

    &:checked {
      border-color: currentColor;
      background-color: currentColor;
      &:before {
        transform: scale(0);
      }
      &:after {
        transform: translateX(21px);
      }
    }

    &-small {
      width: 42px;
      height: 22px;
      &:before, &:after {
        height: 20px;
      }
      &:before {
        width: 40px;
      }
      &:after {
        width: 20px;
      }
      &:checked:after {
        transform: translateX(20px);
      }
    }

    &-large {
      width: 52px;
      height: 32px;
      &:before, &:after {
        height: 30px;
      }
      &:before {
        width: 50px;
      }
      &:after {
        width: 30px;
      }
      &:checked:after {
        transform: translateX(20px);
      }
    }

    &[disabled] {
      opacity: 0.6;
    }
  }
}

</style>
