<template>
<div class="page-content">
    <h1 class="h1">开关选择器 Switch</h1>
    <div class="doc-text">在两种状态间切换时用到的开关选择器</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Switch } from 'lity-ui';
const app = createApp();
app.use(Switch);</code>
</pre>
</div>
<h2 class="h2">基础用法</h2>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
    &lt;lity-switch v-model="switch1"&gt;&lt;/lity-switch&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue'
export default {
  setup (props) {
    const switch1 = ref(false)
    return {
      switch1
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div class="doc-text">【switch1的值：{{switch1}}】</div>
<lity-switch v-model="switch1"></lity-switch>

<h2 class="h2">自定义</h2>
<div class="doc-text">可以传入属性 <code class="code-tag">color</code>来展示开关选择器的颜色，传入属性 <code class="code-tag">disabled</code> 是禁用，开关大小支持<code class="code-tag">'small', 'normal', 'large'</code>小大默认三种。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-switch v-model="switch2" color="#f00" &gt;&lt;/lity-switch&gt;
&lt;lity-switch v-model="switch3" disabled &gt;&lt;/lity-switch&gt;
&lt;lity-switch v-model="switch4" size="small" &gt;&lt;/lity-switch&gt;
&lt;lity-switch v-model="switch5" size="normal" &gt;&lt;/lity-switch&gt;
&lt;lity-switch v-model="switch6" size="large" &gt;&lt;/lity-switch&gt;
</code>
</pre>
</div>

<div style="display:inline-block;margin-right:20px"><lity-switch v-model="switch2" color="#f00"></lity-switch><div style="margin-top:10px">自定义颜色</div></div>
<div style="display:inline-block;margin-right:20px"><lity-switch v-model="switch3" disabled ></lity-switch><div style="margin-top:10px">禁用的</div></div>
<div style="display:inline-block;margin-right:20px"><lity-switch v-model="switch4" size="small"></lity-switch><div style="margin-top:10px">小开关</div></div>
<div style="display:inline-block;margin-right:20px"><lity-switch v-model="switch5" size="normal"></lity-switch><div style="margin-top:10px">默认的</div></div>
<div style="display:inline-block;margin-right:20px"><lity-switch v-model="switch6" size="large"></lity-switch><div style="margin-top:10px">大开关</div></div>

<h2 class="h2">Props 配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>size</td> <td>开关大小类型</td><td>String</td> <td><code class="code-tag">small</code>, <code class="code-tag">normal</code><code class="code-tag">large</code> </td><td>normal</td>
  </tr>
  <tr>
    <td>color</td> <td>自定义开关选择器的颜色</td><td>String && 常规颜色值</td> <td>-</td><td>#07c160</td>
  </tr>
  <tr>
    <td>disabled</td> <td>禁用开关选择器</td><td>Boolean</td> <td>-</td><td>false</td>
  </tr>
</tbody>
</table>
<h2 class="h2">Event 事件</h2>
<table class="table">
<thead><tr><th>name</th> <th>描述</th></tr></thead>
<tbody>
  <tr>
    <td>change</td> <td>当绑定值变化时触发的事件，回调选中的值</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import { ref } from 'vue'
import LitySwitch from '../components/switch/switch'
export default {
  components: {
    LitySwitch
  },
  setup (props) {
    const switch1 = ref(false)
    const switch2 = ref(true)
    const switch3 = ref(true)
    const switch4 = ref(true)
    const switch5 = ref(true)
    const switch6 = ref(true)
    return {
      switch1,
      switch2,
      switch3,
      switch4,
      switch5,
      switch6
    }
  }
}
</script>

<style scoped lang="scss">
</style>
