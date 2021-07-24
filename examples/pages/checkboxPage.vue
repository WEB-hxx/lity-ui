<template>
<div class="page-content">
    <h1 class="h1">复选框 checkbox</h1>
    <div class="doc-text">支持默认的点击高亮效果，又支持下划线跟随的效果</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-checkbox v-model="checkbox1" @change="handler"&gt;我单个复选框&lt;/lity-checkbox&gt;</code>
</pre>
</div>
{{checkbox1}}
<lity-checkbox v-model="checkbox1" @change="handler">我单个复选框</lity-checkbox>

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
import { ref } from 'vue'
import LityCheckbox from '../components/checkbox/checkbox'
// import LityCheckboxGroup from '../components/checkbox/checkbox-group'
export default {
  components: {
    LityCheckbox
    // LityCheckboxGroup
  },
  setup (props) {
    const checkbox1 = ref(true)
    function handler (value) {
      checkbox1.value = value
    }
    return {
      checkbox1,
      handler
    }
  }
}
</script>

<style lang="scss">
</style>
