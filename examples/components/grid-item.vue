<template>
   <router-link class="lity-grids-item" :to="link || ''" :style="styles" v-if="type == 'link'">
        <div class="lity-grids-icon" v-if="checkIcon">
            <slot name="icon"></slot>
        </div>
        <div class="lity-grids-txt" v-if="checkText">
            <slot name="text"></slot>
        </div>
        <slot name="other"></slot>
    </router-link>
    <a class="lity-grids-item" :href="link || ''" :style="styles"  v-else>
        <div class="lity-grids-icon" v-if="checkIcon">
            <slot name="icon"></slot>
        </div>
        <div class="lity-grids-txt" v-if="checkText">
            <slot name="text"></slot>
        </div>
        <slot name="other"></slot>
    </a>
</template>
<script>
import { computed } from 'vue'
const COMPONENT_NAME = 'lity-grid'
export default {
  name: COMPONENT_NAME,
  props: {
    type: {
      validator (value) {
        return ['link', 'a'].indexOf(value + '') > -1
      },
      default: 'link'
    },
    link: [String, Object]
  },
  setup (props, context) {
    const checkIcon = computed(() => {
      return !!context.slots.icon
    })
    const checkText = computed(() => {
      return !!context.slots.text
    })
    return {
      checkIcon,
      checkText
    }
  }
}
</script>
<style lang="scss">
  @import "../assets/scss/variable.scss";
  @import "../assets/scss/mixins.scss";
  .lity-grids-item {
    width: 25%;
    float: left;
    position: relative;
    z-index: 0;
    padding: $fontsize-medium 0;
    font-size: $fontsize-medium;
    &:after {
      @include bottom-line($color-light-grey-ss);
    }
  }

  .lity-grids-icon {
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      &:after, &:before {
        font-size: 54px;
      }
    }
    img {
      height: 70%;
    }
  }

  .lity-grids-txt {
    @include text-overflow(center);
    color: $color-dark-grey;
    padding: 0 $fontsize-medium;
  }
</style>
