<template>
    <div class="lity-tab-panels-item">
        <slot></slot>
    </div>
</template>

<script>
const COMPONENT_NAME = 'lity-panel'
export default {
  name: COMPONENT_NAME
}

</script>

<style lang="scss" >
.lity-tab-panels-item{
    width: 100%;
    flex: 1 0 auto;
}
</style>
