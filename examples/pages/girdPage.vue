<template>
<div class="page-content">
    <h1 class="h1">Grid 宫格</h1>
    <div class="doc-text">移动端常见的网格布局。</div>
    <h2 class="h2">组件引入</h2>
  <div class="doc-text">组件按需引入，也可以全局引入</div>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Gird, GirdItem  } from 'lity-ui';
const app = createApp();
app.use(Gird);
app.use(GirdItem);</code>
</pre>
</div>
    <h2 class="h2">基本用法</h2>
<div class="doc-text">在 <code class="code-tag">lity-grid</code> 组件上添加 <code class="code-tag">rows="2" </code>即为两列表格；
Vue3 是通过 <code class="code-tag">template v-slot:icon</code> 自定义图标，<code class="code-tag">template v-slot:text</code> 自定义显示文字。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-grid :rows="2"&gt;
    &lt;lity-grid-item&gt;
        &lt;template v-slot:icon&gt;
          &lt;img src="https://csdnimg.cn/medal/github@240.png"&gt;
        &lt;/template&gt;
        &lt;template v-slot:text&gt;
          &lt;span&gt;image&lt;/span&gt;
        &lt;/template&gt;
    &lt;/lity-grid-item&gt;
    &lt;lity-grid-item&gt;
        &lt;template v-slot:icon&gt;
          &lt;img src="https://csdnimg.cn/medal/qixiebiaobing2@240.png"&gt;
        &lt;/template&gt;
        &lt;template v-slot:text&gt;
          &lt;span&gt;image&lt;/span&gt;
        &lt;/template&gt;
    &lt;/lity-grid-item&gt;
&lt;/lity-grid&gt;</code>
</pre>
</div>
<div style="width:500px">
 <lity-grid :rows="2">
    <lity-grid-item>
        <template v-slot:icon>
          <img src="https://csdnimg.cn/medal/github@240.png">
        </template>
        <template v-slot:text>
          <span>image</span>
        </template>
    </lity-grid-item>
    <lity-grid-item>
        <template v-slot:icon>
          <img src="https://csdnimg.cn/medal/qixiebiaobing2@240.png">
        </template>
        <template v-slot:text>
          <span>image</span>
        </template>
    </lity-grid-item>
 </lity-grid>
</div>

 <h2 class="h2">等分三列</h2>
 <div class="doc-text">在 <code class="code-tag">lity-grid</code> 组件上添加 <code class="code-tag">rows="3" </code>即为三列表格；
<code class="code-tag">lity-grid-item</code> 的内容可以遍历自己数据接口的 <code class="code-tag">data</code> 或者自定义数据</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-grid :rows="3"&gt;
    &lt;lity-grid-item v-for="n in 6" :key="n"&gt;
        &lt;template v-slot:text&gt;
          &lt;span&gt;grids-3&lt;/span&gt;
        &lt;/template&gt;
    &lt;/lity-grid-item&gt;
&lt;/lity-grid&gt;</code>
</pre>
</div>
 <div style="width:500px">
 <lity-grid :rows="3">
    <lity-grid-item v-for="n in 6" :key="n">
        <template v-slot:text>
          <span>grids-3</span>
        </template>
    </lity-grid-item>
 </lity-grid>
</div>

<h2 class="h2">lity-grid【slot】</h2>
<table class="table">
<thead><tr><th>插槽名</th> <th>说明</th></tr></thead>
<tbody>
  <tr>
    <td>-</td> <td>内容</td>
  </tr>
</tbody>
</table>

<h2 class="h2">lity-grid【props】</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选项</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>rows</td> <td>每行显示列数</td><td>Number</td>
    <td><code class="code-tag">2</code><code class="code-tag">3</code><code class="code-tag">4</code><code class="code-tag">5</code>可选</td>
    <td>默认4</td>
  </tr>
</tbody>
</table>

<h2 class="h2">lity-grid-item【slot】</h2>
<table class="table">
<thead><tr><th>插槽名</th> <th>说明</th></tr></thead>
<tbody>
  <tr>
    <td>icon</td> <td>自定义图标内容</td>
  </tr>
  <tr>
    <td>text</td> <td>文字内容</td>
  </tr>
  <tr>
    <td>other</td> <td>其他内容，该slot没有样式限制</td>
  </tr>
</tbody>
</table>

<h2 class="h2">lity-grid-item【props】</h2>
<table class="table">
<colgroup>
<col width="10%">
<col width="45%">
<col width="15%">
<col width="15%">
<col width="15%">
</colgroup>
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选项</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>type</td> <td>传 type="link" 将会解析为路由，type="a" 则解析为普通 &lt;a&gt;</td><td>String</td><td>link, a</td> <td>默认link</td>
  </tr>
  <tr><td>link</td> <td>需要跳转的URL</td><td>String || Object</td><td>-</td> <td>-</td></tr>
  <tr><td>style</td> <td>lity-grid-item 元素自定义样式</td><td>String</td> <td>-</td></tr>
</tbody>
</table>
</div>
</template>
<script>

import LityGrid from '../components/grid'
import LityGridItem from '../components/grid-item'
import Toast from '../components/toast/index'

export default {
  components: {
    LityGrid,
    LityGridItem
  },
  setup (props, content) {
    function fff () {
      Toast({ msg: 'dddd', time: 10000 })
    }
    return {
      fff
    }
  }
}
</script>
