<template>
<div class="page-content">
    <h1 class="h1">选项卡 Tab</h1>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Tag } from 'lity-ui';
const app = createApp();
app.use(Tag);</code>
</pre>
</div>

<div style="width:500px">
    <lity-tab :data="data" v-model="selectedVal" @click="hand"></lity-tab>
</div>

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
import LityTab from '../components/tab'
export default {
  components: {
    LityTab
  },
  setup (props) {
    const selectedVal = ref('选项一')
    const data = ref([
      {
        label: '选项一'
      },
      {
        label: '选项二'
      },
      {
        label: '选项三'
      }
    ])
    function hand (item) {
      selectedVal.value = item
    }
    return {
      data,
      selectedVal,
      hand
    }
  }
}
</script>

<style scoped lang="scss">
</style>
