<template>
<div class="lity-toast">
  <div class="lity-toast_wrap">
    <img class="lity-toast_img" v-if="imgurl" :src="imgurl" alt="图标" />
    <p class="lity-toast_msg">{{msg}}</p>
  </div>
</div>
</template>

<script>
const COMPONENT_NAME = 'lity-toast'
export default {
  name: COMPONENT_NAME,
  data () {
    return {
      imgurl: '',
      msg: '',
      time: 3000
    }
  }
}

</script>

<style lang="scss">
  @import "../assets/scss/variable.scss";
  @import "../assets/scss/mixins.scss";
  .lity-toast{
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     z-index: 9999;
    &_wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 80%;
        line-height: 1.6;
        text-align: center;
        padding: 13px 16px;
        color: $toast-color;
        background-color: $toast-bgc;
        border-radius: 4px;
        animation: lity-zoom-in .06s ease forwards;
    }
    &_img{
      display: block;
      margin-bottom: 5px;
      width: 40px;
      height: 40px;
    }
    &_msg{
      font-size: 13px;
      color: $color-white;
    }
  }
</style>
