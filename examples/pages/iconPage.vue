<template>
<div class="page-content">
    <h1 class="h1">Icon 字体图标</h1>
  <div class="doc-text">基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。</div>
    <h2 class="h2">组件引入</h2>
  <div class="doc-text">组件按需引入，也可以全局引入</div>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Icon  } from 'lity-ui';
const app = createApp();
app.use(Icon);</code>
</pre>
</div>
<h2 class="h2">基础用法</h2>
<div class="doc-text">可以设置 <code class="code-tag">name</code> 的值为字体图标的名字来展示不同的图标</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-icon name="lityic-collect"&gt;&lt;/lity-icon&gt;</code>
</pre>
</div>
<lity-icon name="lityic-collect"></lity-icon>

<h2 class="h2">图标颜色</h2>
<div class="doc-text">可以设置 <code class="code-tag">color</code> 的颜色值为来展示不同颜色的图标</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-icon name="lityic-collect" color="red"&gt;&lt;/lity-icon&gt;</code>
</pre>
</div>
<lity-icon name="lityic-collect" color="red"></lity-icon>

<h2 class="h2">图标大小</h2>
<div class="doc-text">可以设置 <code class="code-tag">size</code> 的颜色值为来展示不同颜色的图标</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-icon name="lityic-collect" size="50" color="red"&gt;&lt;/lity-icon&gt;</code>
</pre>
</div>
<lity-icon name="lityic-collect" size="50" color="red"></lity-icon>

<h2 class="h2">全部图标</h2>
<ul class="ul-box">
  <li><lity-icon size="30" name="lityic-arrow-down"></lity-icon><div>lityic-arrow-down</div></li>
  <li><lity-icon size="30" name="lityic-arrow-right"></lity-icon><div>lityic-arrow-right</div></li>
  <li><lity-icon size="30" name="lityic-arrow-up"></lity-icon><div>lityic-arrow-up</div></li>
  <li><lity-icon size="30" name="lityic-check-square-fill"></lity-icon><div>lityic-check-square-fill</div></li>
  <li><lity-icon size="30" name="lityic-check_fill"></lity-icon><div>lityic-check_fill</div></li>
  <li><lity-icon size="30" name="lityic-collect_fill"></lity-icon><div>lityic-collect_fill</div></li>
  <li><lity-icon size="30" name="lityic-close_fill"></lity-icon><div>lityic-close_fill</div></li>
  <li><lity-icon size="30" name="lityic-change"></lity-icon><div>lityic-change</div></li>
  <li><lity-icon size="30" name="lityic-collect"></lity-icon><div>lityic-collect</div></li>
  <li><lity-icon size="30" name="lityic-contract-upload"></lity-icon><div>lityic-contract-upload</div></li>
  <li><lity-icon size="30" name="lityic-calendar"></lity-icon><div>lityic-calendar</div></li>
  <li><lity-icon size="30" name="lityic-contract-record"></lity-icon><div>lityic-contract-record</div></li>
  <li><lity-icon size="30" name="lityic-close"></lity-icon><div>lityic-close</div></li>
  <li><lity-icon size="30" name="lityic-calendar-fill"></lity-icon><div>lityic-calendar-fill</div></li>
  <li><lity-icon size="30" name="lityic-download"></lity-icon><div>lityic-download</div></li>
  <li><lity-icon size="30" name="lityic-arrow-left"></lity-icon><div>lityic-arrow-left</div></li>
  <li><lity-icon size="30" name="lityic-file"></lity-icon><div>lityic-file</div></li>
  <li><lity-icon size="30" name="lityic-contract-view"></lity-icon><div>lityic-contract-view</div></li>
  <li><lity-icon size="30" name="lityic-house-fill"></lity-icon><div>lityic-house-fill</div></li>
  <li><lity-icon size="30" name="lityic-house-input"></lity-icon><div>lityic-house-input</div></li>
  <li><lity-icon size="30" name="lityic-data-arrow-down"></lity-icon><div>lityic-data-arrow-down</div></li>
  <li><lity-icon size="30" name="lityic-data-arrow-up"></lity-icon><div>lityic-data-arrow-up</div></li>
  <li><lity-icon size="30" name="lityic-icon_list_down"></lity-icon><div>lityic-icon_list_down</div></li>
  <li><lity-icon size="30" name="lityic-info-circle"></lity-icon><div>lityic-info-circle</div></li>
  <li><lity-icon size="30" name="lityic-IM_fill"></lity-icon><div>lityic-IM_fill</div></li>
  <li><lity-icon size="30" name="lityic-bfq-bofang"></lity-icon><div>lityic-bfq-bofang</div></li>
  <li><lity-icon size="30" name="lityic-info-fill"></lity-icon><div>lityic-info-fill</div></li>
  <li><lity-icon size="30" name="lityic-attachment"></lity-icon><div>lityic-attachment</div></li>
  <li><lity-icon size="30" name="lityic-contract-change"></lity-icon><div>lityic-contract-change</div></li>
  <li><lity-icon size="30" name="lityic-check"></lity-icon><div>lityic-check</div></li>
  <li><lity-icon size="30" name="lityic-bfq-mute"></lity-icon><div>lityic-bfq-mute</div></li>
  <li><lity-icon size="30" name="lityic-loading"></lity-icon><div>lityic-loading</div></li>
  <li><lity-icon size="30" name="lityic-house"></lity-icon><div>lityic-house</div></li>
  <li><lity-icon size="30" name="lityic-location"></lity-icon><div>lityic-location</div></li>
  <li><lity-icon size="30" name="lityic-close-circle"></lity-icon><div>lityic-close-circle</div></li>
  <li><lity-icon size="30" name="lityic-contract-cancel"></lity-icon><div>lityic-contract-cancel</div></li>
  <li><lity-icon size="30" name="lityic-more-fill"></lity-icon><div>lityic-more-fill</div></li>
  <li><lity-icon size="30" name="lityic-check-circle"></lity-icon><div>lityic-check-circle</div></li>
  <li><lity-icon size="30" name="lityic-minus"></lity-icon><div>lityic-minus</div></li>
  <li><lity-icon size="30" name="lityic-house-input-fill"></lity-icon><div>lityic-house-input-fill</div></li>
  <li><lity-icon size="30" name="lityic-nav-manage"></lity-icon><div>lityic-nav-manage</div></li>
  <li><lity-icon size="30" name="lityic-retry"></lity-icon><div>lityic-retry</div></li>
  <li><lity-icon size="30" name="lityic-location-fill"></lity-icon><div>lityic-location-fill</div></li>
  <li><lity-icon size="30" name="lityic-im"></lity-icon><div>lityic-im</div></li>
  <li><lity-icon size="30" name="lityic-icon_list_up"></lity-icon><div>lityic-icon_list_up</div></li>
  <li><lity-icon size="30" name="lityic-bfq-zanting"></lity-icon><div>lityic-bfq-zanting</div></li>
  <li><lity-icon size="30" name="lityic-list"></lity-icon><div>lityic-list</div></li>
  <li><lity-icon size="30" name="lityic-mute"></lity-icon><div>lityic-mute</div></li>
  <li><lity-icon size="30" name="lityic-pic"></lity-icon><div>lityic-pic</div></li>
  <li><lity-icon size="30" name="lityic-play-fill"></lity-icon><div>lityic-play-fill</div></li>
  <li><lity-icon size="30" name="lityic-recommenderror"></lity-icon><div>lityic-recommenderror</div></li>
  <li><lity-icon size="30" name="lityic-house-waitproof"></lity-icon><div>lityic-house-waitproof</div></li>
  <li><lity-icon size="30" name="lityic-recommenderror-fill"></lity-icon><div>lityic-recommenderror-fill</div></li>
  <li><lity-icon size="30" name="lityic-plus"></lity-icon><div>lityic-plus</div></li>
  <li><lity-icon size="30" name="lityic-more-circle"></lity-icon><div>lityic-more-circle</div></li>
  <li><lity-icon size="30" name="lityic-message"></lity-icon><div>lityic-message</div></li>
  <li><lity-icon size="30" name="lityic-money"></lity-icon><div>lityic-money</div></li>
  <li><lity-icon size="30" name="lityic-bfq-yinliang"></lity-icon><div>lityic-bfq-yinliang</div></li>
  <li><lity-icon size="30" name="lityic-search-reduce"></lity-icon><div>lityic-search-reduce</div></li>
  <li><lity-icon size="30" name="lityic-time-fill"></lity-icon><div>lityic-time-fill</div></li>
  <li><lity-icon size="30" name="lityic-nav-fujiaxiang"></lity-icon><div>lityic-nav-fujiaxiang</div></li>
  <li><lity-icon size="30" name="lityic-refund"></lity-icon><div>lityic-refund</div></li>
  <li><lity-icon size="30" name="lityic-minus-fill"></lity-icon><div>lityic-minus-fill</div></li>
  <li><lity-icon size="30" name="lityic-mute-fill"></lity-icon><div>lityic-mute-fill</div></li>
  <li><lity-icon size="30" name="lityic-plus-fill"></lity-icon><div>lityic-plus-fill</div></li>
  <li><lity-icon size="30" name="lityic-password"></lity-icon><div>lityic-password</div></li>
  <li><lity-icon size="30" name="lityic-plus-circle"></lity-icon><div>lityic-plus-circle</div></li>
  <li><lity-icon size="30" name="lityic-question-fill"></lity-icon><div>lityic-question-fill</div></li>
  <li><lity-icon size="30" name="lityic-recommendright"></lity-icon><div>lityic-recommendright</div></li>
  <li><lity-icon size="30" name="lityic-invoice"></lity-icon><div>lityic-invoice</div></li>
  <li><lity-icon size="30" name="lityic-search-plus"></lity-icon><div>lityic-search-plus</div></li>
  <li><lity-icon size="30" name="lityic-message-fill"></lity-icon><div>lityic-message-fill</div></li>
  <li><lity-icon size="30" name="lityic-warming-fill"></lity-icon><div>lityic-warming-fill</div></li>
  <li><lity-icon size="30" name="lityic-warning-circle"></lity-icon><div>lityic-warning-circle</div></li>
  <li><lity-icon size="30" name="lityic-junzhi"></lity-icon><div>lityic-junzhi</div></li>
  <li><lity-icon size="30" name="lityic-rotate-right"></lity-icon><div>lityic-rotate-right</div></li>
  <li><lity-icon size="30" name="lityic-pause"></lity-icon><div>lityic-pause</div></li>
  <li><lity-icon size="30" name="lityic-play"></lity-icon><div>lityic-play</div></li>
  <li><lity-icon size="30" name="lityic-nav-tag"></lity-icon><div>lityic-nav-tag</div></li>
  <li><lity-icon size="30" name="lityic-recommendright-fill"></lity-icon><div>lityic-recommendright-fill</div></li>
  <li><lity-icon size="30" name="lityic-pause-fill"></lity-icon><div>lityic-pause-fill</div></li>
  <li><lity-icon size="30" name="lityic-edit"></lity-icon><div>lityic-edit</div></li>
  <li><lity-icon size="30" name="lityic-tel"></lity-icon><div>lityic-tel</div></li>
  <li><lity-icon size="30" name="lityic-search"></lity-icon><div>lityic-search</div></li>
  <li><lity-icon size="30" name="lityic-volume"></lity-icon><div>lityic-volume</div></li>
  <li><lity-icon size="30" name="lityic-tel-fill"></lity-icon><div>lityic-tel-fill</div></li>
  <li><lity-icon size="30" name="lityic-question-circle"></lity-icon><div>lityic-question-circle</div></li>
  <li><lity-icon size="30" name="lityic-pic-fill"></lity-icon><div>lityic-pic-fill</div></li>
  <li><lity-icon size="30" name="lityic-upload"></lity-icon><div>lityic-upload</div></li>
  <li><lity-icon size="30" name="lityic-volume-fill"></lity-icon><div>lityic-volume-fill</div></li>
  <li><lity-icon size="30" name="lityic-receipt"></lity-icon><div>lityic-receipt</div></li>
  <li><lity-icon size="30" name="lityic-minus-circle"></lity-icon><div>lityic-minus-circle</div></li>
  <li><lity-icon size="30" name="lityic-password-fill"></lity-icon><div>lityic-password-fill</div></li>
  <li><lity-icon size="30" name="lityic-rotate-left"></lity-icon><div>lityic-rotate-left</div></li>
  <li><lity-icon size="30" name="lityic-time"></lity-icon><div>lityic-time</div></li>
</ul>
<h2 class="h2">Props 配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>name</td> <td>icon 图标的名称</td><td>String</td> <td>-</td>
  </tr>
  <tr>
    <td>size</td> <td>icon 图标的大小</td><td>Number</td> <td>20(单位px)</td>
  </tr>
   <tr>
    <td>color</td> <td>icon 图标的颜色</td><td>String</td> <td>inherit</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import LityIcon from '../components/icon.vue'
export default {
  components: {
    LityIcon
  }
}
</script>

<style scoped lang="scss">
.ul-box{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li{
    text-align: center;
    margin:20px;
    font-size: 14px;
    div{
      padding-top: 10px;
    }
  }
}
</style>
