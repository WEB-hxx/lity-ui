<template>
<div class="page-content">
    <h1 class="h1">选项卡 Tab</h1>
    <div class="doc-text">支持默认的点击高亮效果，又支持下划线跟随的效果</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Tab, TabPanel } from 'lity-ui';
const app = createApp();
app.use(Tab).use(TabPanel);</code>
</pre>
</div>
  <h2 class="h2">基础用法</h2>
<div class="doc-text">传入如下 <code class="code-tag">:data</code> 的数据结构便能初始化 <code class="code-tag">lity-tab</code>，
必须使用 <code class="code-tag">:value</code> 指令来选中对应的 <code class="code-tag">tab</code> 选中的高亮项， <code class="code-tag">:value</code> 的参数的值必须与某一项 <code class="code-tag">tab</code> 的 <code class="code-tag">label</code> 属性对应，<code class="code-tag">showSlider</code> 是开启下划线跟随的效果。</div>
<div><code class="code-tag">lity-panel</code>必须与<code class="code-tag">lity-tab</code>一起使用才能生效。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
  &lt;lity-tab :data="data" showSlider :value="selectedVal" @click="handClick"&gt;
     &lt;lity-panel v-for="(item,index) in data" :key="index"&gt;
        &lt;ul&gt;
          &lt;li v-for="hero in item.panelData" :key="hero"&gt;{{hero}}&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/lity-panel&gt;
  &lt;/lity-tab&gt;
&lt;/template&gt;
&lt;script&gt;
import {reactive} from 'vue'
export default {
  setup (props) {
    const selectedVal = ref('选项二')
     const data = reactive([
      {
        label: '选项一',
        panelData: ['选项一', '选项1内容啊']
      },
      {
        label: '选项二',
        panelData: ['选项二', '选项2内容啊']
      },
      {
        label: '选项三',
        panelData: ['选项三', '选项3内容啊']
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
    <lity-tab :data="data" showSlider :value="selectedVal" @click="hand">
      <lity-panel v-for="item in data" :key="item.lable">
        <ul>
          <li v-for="hero in item.panelData" :key="hero">{{hero}}</li>
        </ul>
      </lity-panel>
    </lity-tab>
</div>

<h2 class="h2">lity-tab [props]</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>示例</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>data</td> <td>定义的 <code class="code-tag">data</code> 数组里必须含有 <code class="code-tag">lable</code> 字段，否则不显示</td><td>Array</td> <td>[{label: 1, paneldata:[1,2]}， {label: 2, paneldata:[3,2]}]</td><td>-</td>
  </tr>
   <tr>
    <td>showSlider</td> <td>是否开启下划线跟随效果</td><td>Boolean</td> <td><code class="code-tag">true/false</code></td><td>false</td>
  </tr>
</tbody>
</table>
<h2 class="h2">lity-tab 事件</h2>
<table class="table">
<thead><tr><th>事件</th> <th>说明</th><th>参数</th></tr></thead>
<tbody>
  <tr>
    <td>click</td> <td>当 <code class="code-tag">tab</code> 被点击时派发</td><td>点中的 <code class="code-tag">tab</code> 的 <code class="code-tag">label/value</code> 值</td>
  </tr>
</tbody>
</table>
<h2 class="h2">lity-panel [slot]</h2>
<table class="table">
<thead><tr><th>名称</th> <th>说明</th></tr></thead>
<tbody>
  <tr>
    <td>-</td> <td>自定义列表的内容</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import { ref, reactive } from 'vue'
import LityTab from '../components/tab/tab'
import LityPanel from '../components/tab/tab-panel'
export default {
  components: {
    LityTab,
    LityPanel
  },
  setup (props) {
    const selectedVal = ref('选项一')
    const data = reactive([
      {
        label: '选项一',
        panelData: ['选项一', '选项1内容啊']
      },
      {
        label: '选项二',
        panelData: ['选项二', '选项2内容啊']
      },
      {
        label: '选项三',
        panelData: ['选项三', '选项3内容啊']
      }
    ])
    function hand (value) {
      console.log(value)
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
