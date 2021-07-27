<template>
<div class="page-content">
    <h1 class="h1">输入框 Input</h1>
    <div class="doc-text">通过鼠标或键盘输入字符</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Input } from 'lity-ui';
const app = createApp();
app.use(Input);</code>
</pre>
</div>
<h2 class="h2">基础用法</h2>
<div class="doc-text">将 <code class="code-tag">v-model</code> 绑定到一个本地变量 <code class="code-tag">input</code> 即可；</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-input v-model="input" placeholder="请输入内容"&gt;&lt;/lity-input&gt;
&lt;script&gt;
import { ref } from 'vue'
export default {
  setup(props) {
    const input = ref('')
    return {
      input
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div style="width:300px">
   <lity-input placeholder="请输入内容" v-model="input"></lity-input>
</div>
<h2 class="h2">禁用</h2>
<div class="doc-text">在组件上绑定 <code class="code-tag">disabled</code> 属性即可禁用；</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-input disabled v-model="input" placeholder="请输入内容"&gt;&lt;/lity-input&gt;
</code>
</pre>
</div>
<div style="width:300px">
   <lity-input placeholder="请输入内容" disabled v-model="input"></lity-input>
</div>

<h2 class="h2">可清空</h2>
<div class="doc-text">在组件上绑定 <code class="code-tag">clearable</code> 属性即可得到一个可清空的输入框，</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-input v-model="input" clearable placeholder="请输入内容"&gt;&lt;/lity-input&gt;
</code>
</pre>
</div>
<div style="width:300px">
   <lity-input placeholder="请输入内容" clearable v-model="input2"></lity-input>
</div>

<h2 class="h2">自定义前后插槽</h2>
<div class="doc-text">在组件前后设置了两个插槽，前插槽名 <code class="code-tag">v-slot:prepend</code>，后插槽名 <code class="code-tag">v-slot:append</code>，插槽可以设置的内容或者图标样式。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-input v-model="input" v-model="input" placeholder="请输入内容"&gt;
    &lt;template v-slot:prepend&gt;
        &lt;span style="padding: 0 10px"&gt;前插槽&lt;/span&gt;
    &lt;/template&gt;
    &lt;template v-slot:append&gt;
        &lt;span style="padding: 0 10px"&gt;后插槽&lt;/span&gt;
    &lt;/template&gt;
&lt;/lity-input&gt;
</code>
</pre>
</div>
<div style="width:500px">
   <lity-input placeholder="请输入内容">
       <template v-slot:prepend>
          <span style="padding: 0 10px">前插槽</span>
       </template>
        <template v-slot:append>
          <span style="padding: 0 10px">后插槽</span>
       </template>
   </lity-input>
</div>

<h2 class="h2">Props 配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>type</td> <td>类型</td><td>String</td> <td>text，textarea 和其他 原生 input 的 type 值</td><td>text</td>
  </tr>
   <tr>
    <td>v-model</td> <td>绑定值</td><td>String / Number</td> <td>-</td><td>-</td>
  </tr>
  <tr>
    <td>name</td> <td>原生属性，name值</td><td>String</td> <td>-</td><td>-</td>
  </tr>
   <tr>
    <td>readonly</td> <td>原生属性，readonly只读属性</td><td>Boolean</td> <td>-</td><td>false</td>
  </tr>
  <tr>
    <td>maxlength</td> <td>原生属性，最大输入长度</td><td>Number</td> <td>-</td><td>-</td>
  </tr>
   <tr>
    <td>minlength</td> <td>原生属性，最小输入长度</td><td>Number</td> <td>-</td><td>-</td>
  </tr>
  <tr>
    <td>placeholder</td> <td>输入框占位文本</td><td>String</td> <td>-</td><td>-</td>
  </tr>
   <tr>
    <td>clearable</td> <td>是否可清空</td><td>Boolean</td> <td>-</td><td>false</td>
  </tr>
  <tr>
    <td>autocomplete</td> <td>原生属性，自动补全</td><td>on, off</td> <td>-</td><td>off</td>
  </tr>
</tbody>
</table>

<h2 class="h2">slot 插槽</h2>
<table class="table">
<thead><tr><th>插槽名</th> <th>说明</th></tr></thead>
<tbody>
  <tr>
    <td>prepend</td> <td>input左内容</td>
  </tr>
  <tr>
    <td>append</td> <td>input右内容</td>
  </tr>
</tbody>
</table>

<h2 class="h2">事件</h2>
<table class="table">
<thead><tr><th>事件</th> <th>说明</th><th>参数</th></tr></thead>
<tbody>
    <tr><td>blur</td><td>在 Input 失去焦点时触发</td><td>(event: Event)</td></tr>
    <tr><td>focus</td><td>在 Input 获得焦点时触发</td><td>(event: Event)</td></tr>
    <tr><td>change</td><td>仅在输入框失去焦点或用户按下回车时触发</td><td>(value: string | number)</td></tr>
    <tr><td>clear</td><td>在点击由 <code>clearable</code> 属性生成的清空按钮时触发</td><td>—</td></tr>
</tbody>
</table>
</div>
</template>

<script>
import LityInput from '../components/input/input'
import { ref } from 'vue'
export default {
  components: {
    LityInput
  },
  setup (props) {
    const input = ref('')
    const input2 = ref('哈哈有内容就显示了')
    return {
      input,
      input2
    }
  }
}
</script>

<style scoped lang="scss">
</style>
