<template>
<div class="lity-dialog">
    <div class="lity-dialog-popups">
         <div class="lity-dialog-title" v-html="title"></div>
         <div class="lity-dialog-content" v-html="content"></div>
        <div class="lity-dialog-footer" v-if="type==='confirm'">
            <a class="lity-dialog-btn" @click.stop="closeConfirm(status)">取消</a>
            <a class="lity-dialog-btn" @click.stop="closeConfirm(status, confirm)">确认</a>
        </div>
        <div class="lity-dialog-footer" v-if="type==='alert'">
            <a class="lity-dialog-btn" @click.stop="closeConfirm(status, confirm)">确认</a>
        </div>
    </div>
</div>
</template>
<script>
import { ref } from 'vue'
const COMPONENT_NAME = 'lity-dialog'
export default {
  name: COMPONENT_NAME,
  setup (props) {
    const status = ref(false)
    const type = ref('confirm')
    const title = ref('温馨提示')
    const content = ref('')
    const confirm = ref(() => {})
    function closeConfirm (state, opts) {

    }
    return {
      closeConfirm,
      status,
      type,
      title,
      content,
      confirm
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";
@import "../assets/scss/mixins.scss";
.lity-dialog{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: $dialog-btn-active-bgc;
  z-index: 99999;
  &-popups{
      position: absolute;
      left: 50%;
      top: 50%;
      width: 40%;
      background: $dialog-bgc;
      text-align: center;
      font-size: 14px;
      border-radius: 4px;
      transform:translateX(-50%) translateY(-50%);
      animation: lity-zoom-in .06s ease forwards;
  }
  &-title{
    text-align: center;
    padding-top:20px;
    font-size: 16px;
    color: $dialog-title;
    font-weight: 7000;
  }
  &-content{
      padding: 20px 10px;
      line-height: 1.8;
      color: $dialog-content;
  }
  &-footer{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    border-top:1px solid $dialog-btns-split-color;
    flex-direction: row;
  }
  &-btn{
     flex: 1;
     color: $dialog-content;
     cursor: pointer;
     &:last-child{
        color: $color-green-active;
        border-left: 1px solid $dialog-btns-split-color;
     }
  }
}

</style>
