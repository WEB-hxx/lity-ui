<template>
   <div class="lity-nav">
       <div class="lity-nav__title">开发</div>
       <div class="lity-nav__item">
           <router-link class="tab-link" to="/quickstart">快速开始</router-link>
       </div>
       <div class="lity-nav__title">基础</div>
       <div class="lity-nav__item">
           <router-link class="tab-link" to="/button">按钮 Button</router-link>
       </div>
        <div class="lity-nav__item">
            <router-link class="tab-link" to="/icon">图标 Icon</router-link>
       </div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/loading">加载 Loading</router-link>
       </div>
        <div class="lity-nav__item">
            <router-link class="tab-link" to="/gird">宫格 Gird</router-link>
       </div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/tag">标签 Tag</router-link>
       </div>
       <div class="lity-nav__title">表单</div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/input">输入框 input</router-link>
       </div>
      <div class="lity-nav__item">
            <router-link class="tab-link" to="/textarea">文本框 textarea</router-link>
       </div>
      <div class="lity-nav__item">
            <router-link class="tab-link" to="/switch">开关 switch</router-link>
       </div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/radio">单选框 radio</router-link>
       </div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/checkbox">复选框 chckbox</router-link>
       </div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/rate">评分 rate</router-link>
       </div>
       <div class="lity-nav__title">滚动</div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/tab">选项卡 Tab</router-link>
       </div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/slider">轮播图 Slider</router-link>
       </div>
       <div class="lity-nav__title">弹出层</div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/toast">轻提示 Toast</router-link>
       </div>
        <div class="lity-nav__item">
            <router-link class="tab-link" to="/dialog">模态框 Dialog</router-link>
       </div>
       <div class="lity-nav__title">时间</div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/countdown">倒计时 CountDown</router-link>
       </div>
        <div class="lity-nav__title">test</div>
       <div class="lity-nav__item">
            <router-link class="tab-link" to="/test">test</router-link>
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
  height: calc(100% - 100px);
  z-index: 1;
  min-width: 220px;
  max-width: 220px;
  padding: 20px 0 30px 0;
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
