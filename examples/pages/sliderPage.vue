<template>
<div class="page-content">
    <h1 class="h1">轮播图 Slider</h1>
    <div class="doc-text">标签 <code class="code-tag">Tag</code> 可以自定义颜色和背景色，自定义缩放大小，字体大小是浏览器最小的 <code class="code-tag">12px</code></div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Tag } from 'lity-ui';
const app = createApp();
app.use(Tag);</code>
</pre>
</div>
<h2 class="h2">type 类型</h2>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-tag&gt;1&lt;/lity-tag&gt;
&lt;lity-tag type="primary"&gt;主要的&lt;/lity-tag&gt;
&lt;lity-tag type="success"&gt;成功的&lt;/lity-tag&gt;
&lt;lity-tag type="warning"&gt;警告的&lt;/lity-tag&gt;
&lt;lity-tag type="danger"&gt;危险的&lt;/lity-tag&gt;
</code>
</pre>
</div>
<slider></slider>
<h2 class="h2">Props 配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>type</td> <td>标签的类型颜色</td><td>String</td> <td><code class="code-tag">primary</code>, <code class="code-tag">success</code><code class="code-tag">danger</code><code class="code-tag">warning</code> </td><td>-</td>
  </tr>
   <tr>
    <td>shape</td> <td>标签的圆形和方形</td><td>String</td> <td><code class="code-tag">circle</code>, <code class="code-tag">square</code></td><td>-</td>
  </tr>
  <tr>
    <td>color</td> <td>自定义标签的字体颜色</td><td>String && 常规颜色值</td> <td>-</td><td>-</td>
  </tr>
   <tr>
    <td>bgcolor</td> <td>自定义标签的背景颜色</td><td>String && 常规颜色值</td> <td>-</td><td>-</td>
  </tr>
  <tr>
    <td>scale</td> <td>自定义标签的缩放大小</td><td>String</td> <td>-</td><td>1</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import Slider from '../components/slider/slider'
export default {
  components: {
    Slider
  }
}
</script>

<style scoped lang="scss">
</style>
