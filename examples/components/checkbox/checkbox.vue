<template>
    <label class="lity-checkbox">
        <template v-if="group">
            <input type="checkbox" v-model="model" :value="val" @change="changeHandler" :disabled="disabled" />
        </template>
        <template v-else>
            <input type="checkbox"
                   @change="changeBox(checked)"
                   v-model="checked"
                   :disabled="disabled"
                   :true-value="trueValue"
                   :false-value="falseValue"
            />
        </template>

        <span class="lity-checkbox-icon" :style="iconStyles"><i :style="checkIconStyles"></i></span>
        <template v-if="!slots">
            <span class="lity-checkbox-text">{{val}}</span>
        </template>
        <template v-else>
            <span class="lity-checkbox-text"><slot></slot></span>
        </template>
    </label>
</template>

<script>
import { ref, computed, watch } from 'vue'
const COMPONENT_NAME = 'lity-checkbox'
export default {
  name: COMPONENT_NAME,
  props: {
    change: {
      type: Function
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    val: {
      type: [Boolean, String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
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
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  emits: ['change'],
  setup (props, context) {
    const group = ref(false)
    const solts = ref(context.slots.default && context.slots.default())
    // if (context.$parent.$options && context.$parent.$options.name === 'lity-checkbox-group') {
    //   group.value = true
    // }
    const checked = ref(props.modelValue)
    const slots = ref(context.slots)
    function changeHandler () {
      if (props.disabled) return
      setTimeout(() => {
        context.$parent.change(context.model)
      }, 0)
    }
    function changeBox (value) {
      context.emit('change', value)
    }
    const iconStyles = computed(() => {
      const size = (group.value ? context.$parent.size : props.size) + 'px'
      const color = group.value ? context.$parent.color : props.color
      return {
        width: size,
        height: size,
        color: color
      }
    })
    const checkIconStyles = computed(() => {
      const size = group.value ? context.$parent.size : props.size
      return {
        width: Math.round(size / 3.2) + 'px',
        height: Math.round(size / 1.7) + 'px'
      }
    })
    watch(() => props.modelValue, (val, old) => {
      checked.value = val
    })
    return {
      changeHandler,
      changeBox,
      iconStyles,
      solts,
      group,
      checked,
      slots,
      checkIconStyles
    }
  }

}
</script>

<style lang="scss">
@import "../../assets/scss/variable.scss";
  .lity-checkbox {
    display: inline-block;
    padding-right: 10px;
    > input[type="checkbox"] {
      position: absolute;
      left: -9999em;
      &:checked + .lity-checkbox-icon {
        background-color: currentColor;
        border-color: currentColor;
        > i {
          transform: translate(-50%, -50%) rotate(45deg) scale(1);
          transition: all .2s ease-in-out;
        }
      }
      &:disabled ~ .lity-checkbox-text {
        color: $checkbox-icon-color;
      }
      &:disabled + .lity-checkbox-icon {
        border-color: $checkbox-icon-color;
        background-color: $color-col-line;
        > i {
          border-color: $checkbox-icon-color;
        }
      }
    }

    &-icon {
        border: 1px solid $checkbox-icon-color;
        border-radius: 2px;
        display: inline-block;
        position: relative;
        z-index: 10;
        vertical-align: bottom;
        pointer-events: none;
        > i {
        content: '';
        position: absolute;
        top: 45%;
        left: 50%;
        border: 2px solid $color-white;
        border-top: 0;
        border-left: 0;
        transform: translate(-50%, -50%) rotate(45deg) scale(0);
        }
    }

    &-text {
        margin-left: 1px;
        font-size: 15px;
        color: $checkbox-color;
        pointer-events: none;
    }

    &-circle {
        &-icon {
          border-radius: 50%;
        }
    }
  }
</style>
