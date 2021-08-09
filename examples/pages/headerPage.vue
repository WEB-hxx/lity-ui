<template>
   <div class="lity-header">
       <div class="lity-header__nav">
          <a class="lity-header__logo"><span>Lity Ui</span></a>
          <ul class="lity-header__top-nav">
            <li class="lity-header__top-nav-item">
                <a class="lity-header__link" target="_blank" href="https://github.com/WEB-hxx/lity-ui">
                    <img src="https://b.yzcdn.cn/vant/logo/github.svg">
                </a>
            </li>
            <li class="lity-header__top-nav-item">
                <a target="_blank" href="https://www.npmjs.com/package/lity-ui" class="lity-header__version">1.0.1-beta</a>
            </li>
          </ul>
       </div>
   </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  .lity-header{
      position: fixed;
      left: 0;
      top: 0;
      z-index: 99;
      width: 100%;
      height: 64px;
      background: #001938;
      color: #fff;
      .lity-header__nav{
          width: 90%;
          height: 64px;
          display: flex;
          align-items: center;
          margin: 0 auto;
          justify-content: space-between;
      }
      .lity-header__logo{
          font-size: 30px;
          color: #fff;
      }
      .lity-header__top-nav{
          display: flex;
          .lity-header__top-nav-item{
              display: inline-block;
              vertical-align: middle;
          }
          .lity-header__link img{
              width: 40px;
              height: 40px;
              border-radius: 50%;
          }
          .lity-header__version{
             margin-left: 20px;
             line-height: 40px;
             padding: 10px 20px;
             background: #fff;
             border-radius: 20px;
             color: #333;
          }
      }
  }
</style>
