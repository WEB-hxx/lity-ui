<template>
    <div class="lity-slider-item">
        <slot></slot>
    </div>
</template>

<script>
const COMPONENT_NAME = 'lity-slider-item'
export default {
  name: COMPONENT_NAME
}
</script>
<style lang="scss">
  .lity-slider-item {
    display: inline-block;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    a {
        display: block;
        width: 100%;
    }
    img {
        display: block;
        width: 100%;
    }
}
</style>
