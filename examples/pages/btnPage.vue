<template>
<div class="page-content">
    <h1 class="h1">Button 按钮</h1>
    <h2 class="h2">组件引入</h2>
<div class="doc-text">组件按需引入，也可以全局引入</div>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Button } from 'lity-ui';
const app = createApp();
app.use(Button);</code>
</pre>
</div>
<h2 class="h2">按钮样子</h2>
<div class="doc-text">可以设置 <code class="code-tag">:primary</code>
<code class="code-tag">:success</code><code class="code-tag">:warning</code><code class="code-tag">:danger</code>
 的值为 <code class="code-tag">true</code> 展示不同按钮的样子，默认是 <code class="code-tag">:default</code></div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button :default="true"&gt;默认按钮&lt;/lity-button&gt;
&lt;lity-button :primary="true"&gt;信息按钮&lt;/lity-button&gt;
&lt;lity-button :success="true"&gt;成功按钮&lt;/lity-button&gt;
&lt;lity-button :warning="true"&gt;警告按钮&lt;/lity-button&gt;
&lt;lity-button :danger="true"&gt;危险按钮&lt;/lity-button&gt;</code>
</pre>
</div>
    <lity-button :default="true">默认按钮</lity-button>
    <lity-button :primary="true">信息按钮</lity-button>
    <lity-button :success="true">成功按钮</lity-button>
    <lity-button :warning="true">警告按钮</lity-button>
    <lity-button :danger="true">危险按钮</lity-button>
<h2 class="h2">按钮类型</h2>
<div class="doc-text">可以设置 <code class="code-tag">:type</code> 的值为 <code class="code-tag">submit</code> 展示提交按钮，默认值是 <code class="code-tag">button</code></div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button&gt;按钮&lt;/lity-button&gt;
&lt;lity-button type="submit"&gt;提交按钮&lt;/lity-button&gt;</code>
</pre>
</div>
<lity-button>按钮</lity-button>
<lity-button type="submit">提交按钮</lity-button>

<h2 class="h2">内联按钮</h2>
<div class="doc-text">可以设置 <code class="code-tag">:inline</code> 的值为 <code class="code-tag">true</code> 展示内联按钮</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button :inline="true"&gt;内联按钮&lt;/lity-button&gt;</code>
</pre>
</div>
 <lity-button :inline="true">内联按钮</lity-button>

<h2 class="h2">外边框按钮</h2>
<div class="doc-text">可以设置 <code class="code-tag">:outline</code> 的值为 <code class="code-tag">true</code> 展示外边框按钮</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button :outline="true"&gt;Outline 按钮&lt;/lity-button&gt;</code>
</pre>
</div>
<lity-button :outline="true">Outline 按钮</lity-button>

<h2 class="h2">图标按钮</h2>
<div class="doc-text">可以设置 <code class="code-tag">icon</code> 的值为字体图标的名字来展示不同的图标的按钮</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button icon="lityic-arrow-down"&gt;icon 按钮&lt;/lity-button&gt;</code>
</pre>
</div>
<lity-button icon="lityic-arrow-down">icon 按钮</lity-button>

<h2 class="h2">圆角按钮</h2>
<div class="doc-text">可以设置 <code class="code-tag">:square</code> 的值为 <code class="code-tag">true</code> 来展示圆角按钮</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button&gt;方形按钮&lt;/lity-button&gt;
&lt;lity-button :square="true"&gt;圆角按钮&lt;/lity-button&gt;</code>
</pre>
</div>
<lity-button :inline="true">方形按钮</lity-button>
<lity-button :square="true" :inline="true">圆角按钮</lity-button>

<h2 class="h2">禁用按钮</h2>
<div class="doc-text">可以设置 <code class="code-tag">:disabled</code> 的值为 <code class="code-tag">true</code> 来禁用按钮使用</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button :disabled="true"&gt;禁用按钮&lt;/lity-button&gt;</code>
</pre>
</div>
<lity-button :disabled="true">禁用按钮</lity-button>
<h2 class="h2">Props 配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>type</td> <td>按钮类型</td> <td>String</td> <td>button/submit</td> <td>button</td>
  </tr>
 <tr><td>primary</td> <td>主要的</td> <td>Boolean</td> <td>true/false</td> <td>false</td></tr>
  <tr><td>success</td> <td>成功按钮</td> <td>Boolean</td> <td>true/false</td> <td>false</td></tr>
  <tr><td>warning</td> <td>警告按钮</td> <td>Boolean</td> <td>true/false</td> <td>false</td></tr>
  <tr><td>danger</td> <td>危险按钮</td> <td>Boolean</td> <td>true/false</td> <td>false</td></tr>
  <tr><td>disabled</td> <td>禁用状态</td> <td>Boolean</td> <td>true/false</td> <td>false</td></tr>
  <tr><td>icon</td> <td>图标Icon</td> <td>String</td> <td>icon 的 name 值</td> <td>-</td></tr>
  <tr><td>inline</td> <td>是否内联</td> <td>Boolean</td> <td>true/false</td> <td>false</td></tr>
  <tr><td>outline</td> <td>外边框</td> <td>Boolean</td> <td>true/false</td> <td>false</td></tr>
</tbody>
</table>

<h2 class="h2">事件</h2>
<table class="table">
<thead><tr><th>事件</th> <th>说明</th> <th>参数</th></tr></thead>
<tbody>
  <tr>
    <td>click</td> <td>点击按钮后触发此事件，如果禁用状态，则不触发</td> <td>e - 事件对象</td>
  </tr>
</tbody>
</table>

</div>
</template>

<script>
import LityButton from '../components/button/button'
export default {
  components: {
    LityButton
  }
}
</script>

<style scoped>

</style>
