<template>
  <div class="lity-input" :class="{'lity-input_active': isFocus}">
    <div class="lity-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
      class="lity-input-field"
      ref="input"
      v-model="inputValue"
      :name="name"
      :placeholder="placeholder"
      :minlength="minlength"
      :maxlength="maxlength"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="changeHander"
    >
    <div class="lity-input-append" v-if="$slots.append || showClear">
      <div class="lity-input-clear" v-if="showClear" @click="handleClear">
        <i class="lityic-close_fill"></i>
      </div>
      <slot name="append"></slot>
    </div>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
const COMPONENT_NAME = 'lity-input'
export default {
  name: COMPONENT_NAME,
  emits: ['change', 'blur', 'focus', 'clear', 'update:modelValue'],
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: [Boolean, String],
      default: false
    },
    name: String,
    minlength: Number,
    maxlength: Number,
    clearable: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const isFocus = ref(false)
    const showClear = computed(() => {
      return !!inputValue.value
    })
    const inputValue = computed({
      get () {
        return props.modelValue
      },
      set (value) {
        context.emit('update:modelValue', value)
      }
    })
    function handleClear (e) {
      inputValue.value = ''
      showClear.value = false
      context.emit('clear', e)
    }
    function handleFocus (e) {
      context.emit('focus', e)
      isFocus.value = true
    }
    function handleBlur (e) {
      context.emit('blur', e)
      isFocus.value = false
    }
    function changeHander (e) {
      context.emit('change', inputValue.value)
    }
    return {
      inputValue,
      isFocus,
      showClear,
      handleClear,
      handleFocus,
      handleBlur,
      changeHander
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/variable.scss";
@import "../../assets/scss/mixins.scss";
 .lity-input {
    display: flex;
    align-items: center;
    font-size: $fontsize-medium;
    line-height: 1.429;
    background-color: $input-bgc;
    @include border-1px($input-border-color);
    &-field {
        display: block;
        flex: 1;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        color: $input-color;
        line-height: inherit;
        background-color: inherit;
        border-radius: 2px;
        outline: none;
        &::-webkit-input-placeholder{
          color: $input-placeholder-color;
          text-overflow: ellipsis
        }
        &:disabled {
            background-color: #f5f7fa;
            border-color: $checkbox-icon-color;
            cursor: not-allowed;
            color: $checkbox-icon-color;
        }
        + .lity-input-append{
          .lity-input-clear{
            &:first-child{
               margin-left: -5px
            }
          }
        }
    }
    &_active {
       &::after{
         border-color: $input-focus-border-color
       }
    }
    &-prepend, &-append {
       display: flex;
       align-items: center;
    }
    &-clear{
        width: 1em;
        height: 1em;
        line-height: 1;
        padding: 10px;
        box-sizing: content-box;
        color: $input-clear-icon-color;
        > i{
          display: inline-block;
          color: #ccc;
          transform: scale(1.2);
        }
    }
 }
</style>
