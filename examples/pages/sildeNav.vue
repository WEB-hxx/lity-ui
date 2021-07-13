<template>
   <div class="lity-nav">
       <div class="lity-nav__title">基础组件</div>
       <div class="lity-nav__item">
           <router-link class="tab-link" to="/button">按钮</router-link>
       </div>
        <div class="lity-nav__item">
            <router-link class="tab-link" to="/icon">图标</router-link>
       </div>
   </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped lang="scss">
.lity-nav{
  position: fixed;
  left: 0;
  top: 64px;
  height: 100%;
  z-index: 1;
  min-width: 220px;
  max-width: 220px;
  padding: 24px 0;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;
  .lity-nav__title{
    position: relative;
    padding: 8px 0 8px 24px;
    color: #455a64;
    font-weight: 600;
    font-size: 15px;
    &::before{
       position: absolute;
       left: 15px;
       top: 8px;
       content:'';
       width: 5px;
       height: 14px;
       background: #009688;
    }
  }
  .lity-nav__item {
      .tab-link{
        display: block;
        margin: 8px 0;
        padding: 8px 0 8px 24px;
        color: #455a64;
        font-size: 14px;
        line-height: 20px;
        transition: color .2s;
        transition-property: color;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        transition-delay: 0s;
      }
     .router-link-active{
        border-radius: 20px;
        color: #fff;
        background: #5FB878;
    }
  }
}
</style>
