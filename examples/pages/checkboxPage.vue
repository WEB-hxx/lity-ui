<template>
<div class="page-content">
    <h1 class="h1">复选框 checkbox</h1>
    <div class="doc-text">一组备选项中进行多选</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { CheckBox, CheckBoxGroup } from 'lity-ui';
const app = createApp();
app.use(CheckBox).use(CheckBoxGroup);</code>
</pre>
</div>
<h2 class="h2">单个复选框</h2>
<div class="doc-text">将 <code class="code-tag">lity-checkbox</code> 组件的 <code class="code-tag">v-model</code> 绑定到一个本地变量 <code class="code-tag">checkbox1</code> 即可；</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
  &lt;lity-checkbox v-model="checkbox1"&gt;我单个复选框&lt;/lity-checkbox&gt;
&lt;/template&gt;
&lt;script&gt;
import { ref } from 'vue'
export default {
  setup (props) {
    const checkbox1 = ref(true)
    return {
      checkbox1
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div class="doc-text">值：{{checkbox1}}</div>
<lity-checkbox v-model="checkbox1">我单个复选框</lity-checkbox>
<h2 class="h2">圆形复选框</h2>
<div class="doc-text">将 <code class="code-tag">lity-checkbox</code> 组件的传入 <code class="code-tag">shape="circle"</code>即可展示圆形，默认是方形，也可以自定义颜色，传入 <code class="code-tag">color="#xxx"</code>, <b>注意</b>, 写入的颜色字符串必须符号颜色值的规则，否则显示默认的。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-checkbox color="#f00" shape="circle" v-model="checkbox1"&gt;我是圆形有颜色的&lt;/lity-checkbox&gt;</code>
</pre>
</div>
<div class="doc-text">值：{{checkbox2}}</div>
<lity-checkbox v-model="checkbox2" color="#f00" shape="circle">我是圆形有颜色的</lity-checkbox>

<h2 class="h2">禁用复选框</h2>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-checkbox disabled v-model="checkbox1"&gt;我是禁用的&lt;/lity-checkbox&gt;</code>
</pre>
</div>
<div class="doc-text">值：{{checkbox3}}</div>
<lity-checkbox v-model="checkbox3" disabled>我是禁用的</lity-checkbox>

<h2 class="h2">多个复选框</h2>
<div class="doc-text">绑定多个需要配合使用 <code class="code-tag">lity-checkbox-group</code> 作为父组件嵌套 <code class="code-tag">lity-checkbox</code> 一起使用才能生效，绑定的 <code class="code-tag">checkbox2</code> 值返回一个数组</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
  &lt;lity-checkbox-group v-model="checkbox2"&gt;
    &lt;lity-checkbox val="1"&gt;复选框1&lt;/lity-checkbox&gt;
    &lt;lity-checkbox val="2"&gt;复选框2&lt;/lity-checkbox&gt;
    &lt;lity-checkbox val="3"&gt;复选框3&lt;/lity-checkbox&gt;
  &lt;/lity-checkbox-group&gt;
&lt;/template&gt;
&lt;script&gt;
import { ref } from 'vue'
export default {
  setup (props) {
    const checkbox2 = ref(['2'])
    return {
      checkbox2
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div class="doc-text">值：{{checkbox4}}</div>
<lity-checkbox-group v-model="checkbox4">
    <lity-checkbox val="1">复选框1</lity-checkbox>
    <lity-checkbox val="2">复选框2</lity-checkbox>
    <lity-checkbox val="3">复选框3</lity-checkbox>
</lity-checkbox-group>

<h2 class="h2">自定义</h2>
<div class="doc-text">可以在 <code class="code-tag">lity-checkbox-group</code> 组件自定义属性 <code class="code-tag">color</code> 设置颜色，<code class="code-tag">size</code> 设置大小, <code class="code-tag">shape="circle"</code> 设置成圆形复选框，注意以上3个参数只能在<code class="code-tag">lity-checkbox-group</code>组件上绑定生效，绑定到 <code class="code-tag">lity-checkbox</code> 上无效。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
  &lt;lity-checkbox-group color="red" :size="30" shape="circle" v-model="checkbox2"&gt;
    &lt;lity-checkbox val="小米"&gt;&lt;span style="font-size: 24px;"&gt;小米&lt;/span&gt;&lt;/lity-checkbox&gt;
    &lt;lity-checkbox disabled val="苹果"&gt;&lt;span style="font-size: 24px;"&gt;苹果&lt;/span&gt;&lt;/lity-checkbox&gt;
    &lt;lity-checkbox val="华为"&gt;&lt;span style="font-size: 24px;"&gt;华为&lt;/span&gt;&lt;/lity-checkbox&gt;
  &lt;/lity-checkbox-group&gt;
&lt;/template&gt;
</code>
</pre>
</div>
<div class="doc-text">值：{{checkbox5}}</div>
<lity-checkbox-group color="red" shape="circle" :size="30" v-model="checkbox5">
    <lity-checkbox val="小米"><span style="font-size: 24px;">小米</span></lity-checkbox>
    <lity-checkbox disabled val="苹果"><span style="font-size: 24px;">苹果</span></lity-checkbox>
    <lity-checkbox val="华为"><span style="font-size: 24px;">华为</span></lity-checkbox>
</lity-checkbox-group>

<h2 class="h2">lity-checkbox-group [slot]</h2>
<table class="table">
<thead><tr><th>name</th> <th>描述</th></tr></thead>
<tbody>
  <tr>
    <td>-</td> <td>内容</td>
  </tr>
</tbody>
</table>
<h2 class="h2">lity-checkbox-group [props]</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>v-model</td> <td>绑定值</td><td>string / number / boolean</td> <td> - </td><td>-</td>
  </tr>
  <tr>
    <td>color</td> <td>选中复选框的颜色</td><td>String && 常规颜色值</td> <td> - </td><td>#07c160</td>
  </tr>
   <tr>
    <td>shape</td> <td>复选框圆形和方形</td><td>String</td> <td><code class="code-tag">circle</code>, <code class="code-tag">square</code></td><td>square</td>
  </tr>
  <tr>
    <td>size</td> <td>复选框的大小</td><td>Number</td> <td>-</td><td>20</td>
  </tr>
</tbody>
</table>
<h2 class="h2">lity-checkbox-group 事件</h2>
<table class="table">
<thead><tr><th>name</th> <th>描述</th></tr></thead>
<tbody>
  <tr>
    <td>change</td> <td>当绑定值变化时触发的事件</td>
  </tr>
</tbody>
</table>

<h2 class="h2">lity-checkbox [props]</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>v-model</td> <td>绑定值</td><td>string / number / boolean</td> <td> - </td><td>-</td>
  </tr>
  <tr>
    <td>val</td> <td>值</td><td>string / number / boolean</td> <td> - </td><td>-</td>
  </tr>
   <tr>
    <td>disabled</td> <td>值</td><td>boolean</td> <td> - </td><td>false</td>
  </tr>
  <tr>
    <td>color</td> <td>选中复选框的颜色</td><td>String && 常规颜色值</td> <td> - </td><td>#000</td>
  </tr>
   <tr>
    <td>shape</td> <td>复选框圆形和方形</td><td>String</td> <td><code class="code-tag">circle</code>, <code class="code-tag">square</code></td><td>square</td>
  </tr>
  <tr>
    <td>size</td> <td>复选框的大小</td><td>Number</td> <td>-</td><td>20</td>
  </tr>
</tbody>
</table>
<h2 class="h2">lity-checkbox 事件</h2>
<table class="table">
<thead><tr><th>name</th> <th>描述</th></tr></thead>
<tbody>
  <tr>
    <td>change</td> <td>当绑定值变化时触发的事件</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import { ref } from 'vue'
import LityCheckbox from '../components/checkbox/checkbox'
import LityCheckboxGroup from '../components/checkbox/checkbox-group'
export default {
  components: {
    LityCheckbox,
    LityCheckboxGroup
  },
  setup (props) {
    const checkbox1 = ref(true)
    const checkbox2 = ref(true)
    const checkbox3 = ref(false)
    const checkbox4 = ref(['2'])
    const checkbox5 = ref(['小米'])
    return {
      checkbox1,
      checkbox2,
      checkbox3,
      checkbox4,
      checkbox5
    }
  }
}
</script>

<style lang="scss">
</style>
