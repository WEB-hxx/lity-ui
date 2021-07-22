<template>
   <div class="lity-tab">
      <template v-for="(item, index) in data" :key="index">
        <div class="lity-tab-item"
            :class="item.label === isActive || key === isActive ?'lity-tab_active':''"
            @click="handleClick(item)" >
                <div>{{item.label}}</div>
        </div>
       </template>
    <div v-if="showSlider" ref="slider" class="lity-tab-slider"></div>
  </div>
</template>

<script >
import { ref } from 'vue'
const COMPONENT_NAME = 'lity-tab'
export default {
  name: COMPONENT_NAME,
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    value: {
      type: [String, Number]
    },
    showSlider: {
      type: Boolean,
      default: false
    }
  },
  setup (props, content) {
    const isActive = ref(props.value || 0)
    function handleClick (item) {
      content.emit('click', item)
    }
    return {
      handleClick,
      isActive
    }
  }
}

</script>

<style lang="scss" >
  @import "../assets/scss/variable.scss";
  .lity-tab {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &-item{
        flex: 1;
        padding: 7px 0;
        color: $tab-color;
        text-align: center;
        cursor: pointer;
    }
    &_active{
        color: $tab-active-color
    }
  }
  .lity-tab-slider {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 20px;
      background-color: $tab-slider-bgc;
   }
</style>
