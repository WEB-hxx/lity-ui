<template>
<div class="page-content">
  <h1 class="h1">Loading</h1>
<div class="doc-text">加载，提供了可自定义大小颜色的加载 CSS3 动画。</div>
  <h2 class="h2">组件引入</h2>
<div class="doc-text">组件按需引入，也可以全局引入</div>

<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Loading  } from 'lity-ui';
const app = createApp();
app.use(Loading);</code>
</pre>
</div>
    <h2 class="h2">基本用法</h2>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-loading /&gt;</code>
</pre>
</div>
<LityLoading></LityLoading>
<h2 class="h2">loading 大小</h2>
<div class="doc-text">可以设置 <code class="code-tag">size</code> 数字类型的值来展示 loading 大小</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-loading :size="40" /&gt;</code>
</pre>
</div>
<LityLoading :size="40"></LityLoading>
<h2 class="h2">loading 颜色</h2>
<div class="doc-text">可以设置 <code class="code-tag">color</code> 背景颜色的值来展示 loading 颜色</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-loading :size="40" color="#f0f" /&gt;</code>
</pre>
</div>
<LityLoading :size="40" color="#f0f"></LityLoading>
<h2 class="h2">Props 配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>size</td> <td>loading 的大小</td><td>Number</td> <td>24(单位px)</td>
  </tr>
   <tr>
    <td>color</td> <td>loading 的颜色</td><td>String</td>  <td>-</td>
  </tr>
</tbody>
</table>
</div>
</template>
<script>
import LityLoading from '../components/loading'
export default {
  components: {
    LityLoading
  }
}
</script>
