<template>
<div class="page-content">
    <h1 class="h1">选项卡 Tab</h1>
    <div class="doc-text">支持默认的点击高亮效果，又支持下划线跟随的效果</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Tab } from 'lity-ui';
const app = createApp();
app.use(Tab);</code>
</pre>
</div>
  <h2 class="h2">基础用法</h2>
<div class="doc-text">传入如下 <code class="code-tag">:data</code> 的数据结构便能初始化 <code class="code-tag">lity-tab</code>，
必须使用 <code class="code-tag">v-model:value</code> 指令来选中对应的 <code class="code-tag">tab</code> 选中的高亮项， <code class="code-tag">v-model:value</code> 的参数的值必须与某一项 <code class="code-tag">tab</code> 的 <code class="code-tag">label</code> 属性对应，<code class="code-tag">showSlider</code> 是开启下划线跟随的效果。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
  &lt;lity-tab :data="data" showSlider v-model:value="selectedVal" @click="handClick"&gt;&lt;/lity-tab&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  setup (props) {
    const selectedVal = ref('选项二')
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
    function handClick (value) {
      console.log(value)
    }
    return {
      data,
      selectedVal,
      handClick
    }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div style="width:500px">
    <lity-tab :data="data" showSlider v-model:value="selectedVal" @click="hand">
      <lity-panel>
        <ul v-for="item in data" :key="item">
          <li>{{item}}</li>
        </ul>
      </lity-panel>
    </lity-tab>
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
import { ref, reactive } from 'vue'
import LityTab from '../components/tab'
import LityPanel from '../components/tab-panel'
export default {
  components: {
    LityTab,
    LityPanel
  },
  setup (props) {
    const selectedVal = ref('选项二')
    const data = reactive([
      {
        label: '选项一',
        panelData: ['2', '33']
      },
      {
        label: '选项二',
        panelData: ['2', '335588']
      },
      {
        label: '选项三',
        panelData: ['2', '3355']
      }
    ])
    function hand (value) {
      console.log(selectedVal.value)
      // console.log(value)
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
