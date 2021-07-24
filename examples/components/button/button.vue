<template>
  <button
    class="lity-btn"
    :type="type"
    :class="btnClass"
    style="color"
    @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'
const COMPONENT_NAME = 'lity-button'
export default {
  name: COMPONENT_NAME,
  props: {
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    default: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  setup (props, context) {
    const btnClass = computed(() => {
      return {
        'lity-btn_active': props.active,
        'lity-btn_disabled': props.disabled,
        'lity-btn-inline': props.inline,
        'lity-btn-primary': props.primary,
        'lity-btn-success': props.success,
        'lity-btn-warning': props.warning,
        'lity-btn-danger': props.danger,
        'lity-btn-outline': props.outline,
        'lity-btn-square': props.square,
        'lity-btn-default': props.default
      }
    })
    function handleClick (event) {
      if (props.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      context.emit('click', event)
    }
    return {
      handleClick,
      btnClass
    }
  }
}

</script>

<style lang="scss">
  @import "../../assets/scss/variable.scss";
  @import "../../assets/scss/mixins.scss";
  @mixin btn-active($bg, $border:null){
     &.lity-btn_active, &:active{
        background: $bg;
        @if ($border != null){
          @include border-1px($border);
        }
     }
  }
  .lity-btn{
    display: block;
    margin: 0;
    padding: 17px 16px;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    font-size: $fontsize-large;
    line-height: 1;
    color: $btn-color;
    background: $btn-bgc;
    outline: none;
    border: none;
    border-radius: 2px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    @include btn-active($btn-active-bgc);
    > i{
      display: inline-block;
      margin-right: 4px;
      font-size: 100%;
      transform: scale(1.13);
      transform-origin: right center;
    }
  }
  .lity-btn-square{
     border-radius: 25px;
  }
  .lity-btn-inline{
     width: auto;
    display: inline-block;
    vertical-align: middle;
    padding: 9px 10px;
    font-size: $fontsize-small;
    > i{
      margin-right: 2px;
      transform: scale(1.14);
    }
  }
  .lity-btn-primary{
    color: $btn-primary-color;
    background: $btn-primary-bgc;
    @include btn-active($btn-primary-active-bgc);
  }
  .lity-btn-success{
    color: $btn-success-color;
    background: $btn-success-bgc;
    @include btn-active($btn-success-active-bgc);
  }
  .lity-btn-warning{
    color: $btn-warning-color;
    background: $btn-warning-bgc;
    @include btn-active($btn-warning-active-bgc);
  }
  .lity-btn-danger{
    color: $btn-danger-color;
    background: $btn-danger-bgc;
    @include btn-active($btn-danger-active-bgc);
  }
  .lity-btn-default{
    color: $btn-light-color;
    background: $btn-light-bgc;
    box-shadow: $box-shadow-content;
    @include btn-active($btn-light-active-bgc);
  }

  .lity-btn-outline {
    color: $btn-outline-color;
    background: $btn-outline-bgc;
    @include border-1px($btn-outline-bdc);
    @include btn-active($btn-outline-active-bgc, $btn-outline-active-bdc);
  }

  .lity-btn_disabled{
    color: $btn-disabled-color;
    background: $btn-disabled-bgc;
    cursor: not-allowed!important;
    @include border-1px($btn-disabled-bdc);
    @include btn-active($btn-disabled-bgc, $btn-disabled-bdc);
  }

</style>
