<template>
    <label class="lity-radio">
          <input type="radio"
                  @change="changeHandler"
                  v-model="checked"
                  :value="val"
                  :disabled="disabled"
          />

        <span class="lity-radio-icon" :style="[{color:iconColor}, iconStyles(1)]"><i :style="iconStyles(2)"></i></span>
        <template v-if="!slots">
            <span class="lity-radio-text">{{val}}</span>
        </template>
        <template v-else>
            <span class="lity-radio-text"><slot></slot></span>
        </template>
    </label>
</template>

<script>
import { ref, computed, inject } from 'vue'
const COMPONENT_NAME = 'lity-radio'
export default {
  name: COMPONENT_NAME,
  props: {
    val: {
      type: [Boolean, String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change'],
  setup (props, context) {
    const groupRadio = inject('groupRadio')
    const slots = ref(context.slots.default && context.slots.default())
    const iconColor = computed(() => {
      return groupRadio.props.color
    })
    const checked = computed({
      get () {
        return groupRadio.props.modelValue
      },
      set (value) {
        groupRadio.context.emit('update:modelValue', value)
      }
    })
    function iconStyles (size) {
      const sizes = groupRadio.props.size / size + 'px'
      return {
        width: sizes,
        height: sizes
      }
    }
    function changeHandler (event) {
      if (props.disabled) return false
      groupRadio.context.emit('change', event.target.checked)
    }
    return {
      slots,
      checked,
      changeHandler,
      iconStyles,
      iconColor
    }
  }

}
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";
  .lity-radio {
    display: inline-block;
    padding-right: 10px;
    &-icon {
      border: 1px solid $color-light-grey-s;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      z-index: 10;
      vertical-align: bottom;
      pointer-events: none;
      > i {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        background-color: currentColor;
        opacity: 0;
        transform: translate(-50%, -50%) scale(.1);
      }
    }

    &-text {
      margin-left: 3px;
      font-size: 15px;
      color: $action-sheet-color;
      pointer-events: none;
      vertical-align: text-top;
    }

    > input[type="radio"] {
      position: absolute;
      left: -9999em;
      &:checked + .lity-radio-icon {
        border-color: currentColor;
        > i {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
          transition: all .2s ease-in-out;
        }
      }
      &:disabled ~ .lity-radio-text {
        color:$color-light-grey-s;
      }
      &:disabled + .lity-radio-icon {
        border-color: $color-light-grey-s;
        background-color: $color-light-grey-ss;
        > i {
          background-color: $color-light-grey-s;
        }
      }
    }
  }

</style>
