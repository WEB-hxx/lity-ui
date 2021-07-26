<template>
<div class="page-content">
    <h1 class="h1">单选框 radio</h1>
    <div class="doc-text">在一组备选项中进行单选</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Radio, RadioGroup } from 'lity-ui';
const app = createApp();
app.use(Radio).use(RadioGroup);</code>
</pre>
</div>
<h2 class="h2">值和标签一致</h2>
<div class="doc-text"><code class="code-tag">lity-radio</code> 需要与 <code class="code-tag">lity-radio-group</code> 一起使用结合才能生效，<code class="code-tag">v-model</code> 绑定一个默认的初始化的值。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
    &lt;lity-radio-group v-model="radio1"&gt;
        &lt;lity-radio val="单选1"&gt;&lt;/lity-radio&gt;
        &lt;lity-radio val="单选2"&gt;&lt;/lity-radio&gt;
        &lt;lity-radio val="单选3"&gt;&lt;/lity-radio&gt;
    &lt;/lity-radio-group&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue'
export default {
  setup (props) {
    const radio1 = ref('单选1')
    return {
      radio1
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div class="doc-text">值：{{radio1}}</div>
 <lity-radio-group v-model="radio1">
    <lity-radio val="单选1"></lity-radio>
    <lity-radio val="单选2"></lity-radio>
    <lity-radio val="单选3"></lity-radio>
</lity-radio-group>
<h2 class="h2">值和标签不同</h2>
<div class="doc-text">通过设置 <code class="code-tag">lity-radio</code> 的 <code class="code-tag">val</code> 属性确定“值”，自定义“标签”则在 <code class="code-tag">slot</code> 内定义即可。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
    &lt;lity-radio-group v-model="radio2"&gt;
        &lt;lity-radio val="1"&gt;标签1&lt;/lity-radio&gt;
        &lt;lity-radio val="2"&gt;标签2&lt;/lity-radio&gt;
        &lt;lity-radio val="3"&gt;标签3&lt;/lity-radio&gt;
    &lt;/lity-radio-group&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue'
export default {
  setup (props) {
    const radio2 = ref('1')
    return {
      radio2
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div class="doc-text">值：{{radio2}}</div>
 <lity-radio-group v-model="radio2">
    <lity-radio val="1">标签1</lity-radio>
    <lity-radio val="2">标签2</lity-radio>
    <lity-radio val="3">标签3</lity-radio>
</lity-radio-group>

<h2 class="h2">禁用</h2>
<div class="doc-text">在 <code class="code-tag">lity-radio</code> 通过设置 <code class="code-tag">disabled</code> 即可。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
    &lt;lity-radio-group v-model="radio3"&gt;
        &lt;lity-radio val="1"&gt;标签1&lt;/lity-radio&gt;
        &lt;lity-radio disabled val="2"&gt;标签2&lt;/lity-radio&gt;
        &lt;lity-radio val="3"&gt;标签3&lt;/lity-radio&gt;
    &lt;/lity-radio-group&gt;
&lt;/template&gt;
</code>
</pre>
</div>
<div class="doc-text">值：{{radio3}}</div>
 <lity-radio-group v-model="radio3">
    <lity-radio val="1">标签1</lity-radio>
    <lity-radio disabled val="2">标签2</lity-radio>
    <lity-radio val="3">标签3</lity-radio>
</lity-radio-group>

<h2 class="h2">自定义颜色</h2>
<div class="doc-text">在 <code class="code-tag">lity-radio-group</code> 通过设置 <code class="code-tag">color</code> 即可。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
    &lt;lity-radio-group v-model="radio4" color="#f00"&gt;
        &lt;lity-radio val="1"&gt;标签1&lt;/lity-radio&gt;
        &lt;lity-radio val="2"&gt;标签2&lt;/lity-radio&gt;
        &lt;lity-radio val="3"&gt;标签3&lt;/lity-radio&gt;
    &lt;/lity-radio-group&gt;
&lt;/template&gt;
</code>
</pre>
</div>
<div class="doc-text">值：{{radio4}}</div>
 <lity-radio-group v-model="radio4" color="#f00">
    <lity-radio val="1">标签1</lity-radio>
    <lity-radio val="2">标签2</lity-radio>
    <lity-radio val="3">标签3</lity-radio>
</lity-radio-group>

<h2 class="h2">自定义大小</h2>
<div class="doc-text">在 <code class="code-tag">lity-radio-group</code> 通过设置 <code class="code-tag">:size</code> 大小即可。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
    &lt;lity-radio-group v-model="radio5" :size="30"&gt;
        &lt;lity-radio val="1"&gt;&lt;span style="font-size: 24px;"&gt;标签1&lt;/span&gt;&lt;/lity-radio&gt;
        &lt;lity-radio val="2"&gt;&lt;span style="font-size: 24px;"&gt;标签2&lt;/span&gt;&lt;/lity-radio&gt;
        &lt;lity-radio val="3"&gt;&lt;span style="font-size: 24px;"&gt;标签3&lt;/span&gt;&lt;/lity-radio&gt;
    &lt;/lity-radio-group&gt;
&lt;/template&gt;
</code>
</pre>
</div>
<div class="doc-text">值：{{radio5}}</div>
 <lity-radio-group v-model="radio5" :size="30">
    <lity-radio val="1"><span style="font-size: 24px;">标签1</span></lity-radio>
    <lity-radio val="2"><span style="font-size: 24px;">标签2</span></lity-radio>
    <lity-radio val="3"><span style="font-size: 24px;">标签3</span></lity-radio>
</lity-radio-group>

<h2 class="h2">lity-radio-group [slot]</h2>
<table class="table">
<thead><tr><th>name</th> <th>描述</th></tr></thead>
<tbody>
  <tr>
    <td>-</td> <td>内容</td>
  </tr>
</tbody>
</table>
<h2 class="h2">lity-radio-group [props]</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>v-model</td> <td>绑定值</td><td>string / number</td> <td> - </td><td>-</td>
  </tr>
  <tr>
    <td>color</td> <td>选中单选框的颜色</td><td>String && 常规颜色值</td> <td> - </td><td>#000</td>
  </tr>
  <tr>
    <td>size</td> <td>单选框的大小</td><td>Number</td> <td>-</td><td>20</td>
  </tr>
</tbody>
</table>
<h2 class="h2">lity-radio-group 事件</h2>
<table class="table">
<thead><tr><th>name</th> <th>描述</th></tr></thead>
<tbody>
  <tr>
    <td>change</td> <td>当绑定值变化时触发的事件，回调选中的值</td>
  </tr>
</tbody>
</table>

<h2 class="h2">lity-radio [props]</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>val</td> <td>值</td><td>string / number </td> <td> - </td><td>-</td>
  </tr>
   <tr>
    <td>disabled</td> <td>值</td><td>boolean</td> <td> - </td><td>false</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import { ref } from 'vue'
import LityRadio from '../components/radio/radio'
import LityRadioGroup from '../components/radio/radio-group'
export default {
  components: {
    LityRadio,
    LityRadioGroup
  },
  setup (props) {
    const radio1 = ref('单选1')
    const radio2 = ref('1')
    const radio3 = ref('2')
    const radio4 = ref('1')
    const radio5 = ref('1')
    return {
      radio1,
      radio2,
      radio3,
      radio4,
      radio5
    }
  }
}
</script>

<style lang="scss">
</style>
