<template>
    <label class="lity-checkbox" :class="shapeClass == 'circle' ? 'lity-checkbox-circle' : ''">
          <input type="checkbox"
                  @change="changeHandler(checked)"
                  v-model="checked"
                  :value="val"
                  :disabled="disabled"
          />

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
import { ref, computed, inject } from 'vue'
import { isColor } from '../../assets/js/common'
const COMPONENT_NAME = 'lity-checkbox'
export default {
  name: COMPONENT_NAME,
  props: {
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
      validator (value) {
        if (!value) return true
        return isColor(value)
      },
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
  emits: ['change', 'update:modelValue'],
  setup (props, context) {
    const groupCheckbox = inject('groupCheckbox', '')
    const slots = ref(context.slots.default && context.slots.default())
    const shapeClass = computed(() => {
      return groupCheckbox ? groupCheckbox.props.shape : props.shape
    })
    const checked = computed({
      get () {
        return groupCheckbox ? groupCheckbox.props.modelValue : props.modelValue
      },
      set (value) {
        groupCheckbox ? groupCheckbox.context.emit('update:modelValue', value) : context.emit('update:modelValue', value)
      }
    })
    const iconStyles = computed(() => {
      const size = (groupCheckbox ? groupCheckbox.props.size : props.size) + 'px'
      const color = groupCheckbox ? groupCheckbox.props.color : props.color
      return {
        width: size,
        height: size,
        color: color
      }
    })
    const checkIconStyles = computed(() => {
      const size = groupCheckbox ? groupCheckbox.props.size : props.size
      return {
        width: Math.round(size / 3.2) + 'px',
        height: Math.round(size / 1.7) + 'px'
      }
    })
    function changeHandler (event) {
      if (props.disabled) return false
      groupCheckbox ? groupCheckbox.context.emit('change', event) : context.emit('change', event)
    }
    return {
      changeHandler,
      iconStyles,
      slots,
      checked,
      shapeClass,
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
        margin-left: 3px;
        font-size: 15px;
        color: $checkbox-color;
        pointer-events: none;
        vertical-align: text-top;
    }

    &-circle {
        .lity-checkbox-icon {
          border-radius: 50%;
        }
    }
  }
</style>
