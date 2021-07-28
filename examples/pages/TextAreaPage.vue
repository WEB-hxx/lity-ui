<template>
<div class="page-content">
    <h1 class="h1">多行文本框 TextArea</h1>
    <div class="doc-text">多行文本框组件，支持实时显示输入字数，限制字数。</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { TextArea } from 'lity-ui';
const app = createApp();
app.use(TextArea);</code>
</pre>
</div>
<h2 class="h2">基础用法</h2>
  <div class="doc-text">多行文本框组件，绑定一个本地 <code class="code-tag">v-model="textarea"</code> 即可，内容长度限制可以设置 <code class="code-tag">maxlength</code>，如果不想显示计数器，可以把转入属性 <code class="code-tag">showCounter="false"</code></div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
    &lt;lity-textarea v-model="textarea" placeholder="请输入您的文本内容" maxlength="100"&gt;&lt;/lity-textarea&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue'
export default {
  setup (props) {
    const textarea = ref('')
    return {
      textarea
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div class="doc-text">【textarea的值：{{textarea}}】</div>
<lity-textarea v-model="textarea"  placeholder="请输入您的文本内容" maxlength="100"></lity-textarea>
<h2 class="h2">Props 配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>v-model</td> <td>绑定值</td><td>String</td> <td>-</td><td>-</td>
  </tr>
  <tr>
    <td>showCounter</td> <td>是否显示计数器</td><td>Boolean</td> <td>-</td><td>true</td>
  </tr>
   <tr>
    <td>placeholder</td> <td>输入框占位文本</td><td>String</td> <td>-</td><td>-</td>
  </tr>
   <tr>
    <td>readonly</td> <td>原生属性，readonly只读属性</td><td>Boolean</td> <td>-</td><td>false</td>
  </tr>
  <tr>
    <td>maxlength</td> <td>原生属性，最大输入长度</td><td>Number</td> <td>-</td><td>-</td>
  </tr>
  <tr>
    <td>height</td> <td>自定义文本框的高度</td><td>Number</td> <td>-</td><td>120(默认单位px)</td>
  </tr>
  <tr>
    <td>disabled</td> <td>禁用文本框</td><td>Boolean</td> <td>-</td><td>false</td>
  </tr>
</tbody>
</table>
<h2 class="h2">Event 事件</h2>
<table class="table">
<thead><tr><th>name</th> <th>描述</th></tr></thead>
<tbody>
  <tr>
    <td>input</td> <td>在 Input 值改变时触发，回调返回绑定的value</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import { ref } from 'vue'
import LityTextarea from '../components/textarea/textarea'
export default {
  components: {
    LityTextarea
  },
  setup (props) {
    const textarea = ref('')
    return {
      textarea
    }
  }
}
</script>

<style scoped lang="scss">
</style>
