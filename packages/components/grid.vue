<template>
  <div :class="classes">
     <slot></slot>
  </div>
</template>
<script>
import { computed } from 'vue'
const COMPONENT_NAME = 'lity-grid'
export default {
  name: COMPONENT_NAME,
  props: {
    rows: {
      validator (value) {
        return ['2', '3', '4', '5'].indexOf(value + '') > -1
      },
      default: '4'
    }
  },
  setup (props) {
    const classes = computed(() => {
      return 'lity-grids-' + props.rows
    })
    return {
      classes
    }
  }
}
</script>
<style lang="scss">
  @import "../assets/scss/variable.scss";
  @import "../assets/scss/mixins.scss";
  @mixin m-grids() {
    overflow: hidden;
    position: relative;
    background-color:$color-white;
    &:before {
      @include bottom-line($color-light-grey-ss, 1);
    }
  }
   @for $num from 2 through 5{
    .lity-grids-#{$num} {
        @include m-grids();
        .lity-grids-item {
          width: (1/$num)*100%;
          &:not(:nth-child(#{$num}n)):before {
            @include right-line($color-light-grey-ss);
          }
        }
      }
   }
</style>
