<template>
<div class="page-content">
    <h1 class="h1">评分 rate</h1>
    <div class="doc-text">评分 <code class="code-tag">rate</code> 网页星形评分组件</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Rate } from 'lity-ui';
const app = createApp();
app.use(Rate);</code>
</pre>
</div>
<h2 class="h2">基础用法</h2>
<div class="doc-text">可以传入属性 <code class="code-tag">color, active-color</code>显示颜色和点击激活的颜色，<code class="code-tag">count</code>来展示多个星星, <code class="code-tag">:size</code>星星大小，<code class="code-tag">:readonly</code> 设置为 <code class="code-tag">true</code> 可读状态不能点击操作。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-rate v-model="rate1"&gt;&lt;/lity-rate&gt;
&lt;lity-rate v-model="rate2" count="7" &gt;&lt;/lity-rate&gt;
&lt;lity-rate v-model="rate3" color="#00F" active-color="#007" &gt;&lt;/lity-rate&gt;
&lt;lity-rate v-model="rate4" :size="30" &gt;&lt;/lity-rate&gt;
&lt;lity-rate v-model="rate5" :readonly="true" &gt;&lt;/lity-rate&gt;
&lt;script&gt;
import { ref } from 'vue'
setup (props) {
    const rate1 = ref(5)
    const rate2 = ref(1)
    const rate3 = ref(2)
    const rate4 = ref(0)
    const rate5 = ref(1)
    return {
      rate1,
      rate2,
      rate3,
      rate4,
      rate5
    }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div class="doc-text" style="border-bottom:1px solid #eee;">
     <span>值是: {{rate1}}</span>
    <lity-rate v-model="rate1"></lity-rate>
</div>
<div class="doc-text" style="border-bottom:1px solid #eee;">
     <span>设置多个星星</span>
    <lity-rate v-model="rate2" count="7"></lity-rate>
</div>
<div class="doc-text" style="border-bottom:1px solid #eee;">
     <span>自定义颜色</span>
    <lity-rate v-model="rate3" color="#00F" active-color="#007"></lity-rate>
</div>
<div class="doc-text" style="border-bottom:1px solid #eee;">
     <span>自定义大小</span>
    <lity-rate v-model="rate4" :size="30"></lity-rate>
</div>
<div class="doc-text">
     <span>只读状态</span>
    <lity-rate v-model="rate5" :readonly="true"></lity-rate>
</div>

<h2 class="h2">自定义文本描述</h2>
<div class="doc-text">可以传入属性 <code class="code-tag">showText</code>来展示每个星星对应的描述。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-rate v-model="rate1" :show-text="['差评','一般','很好','挺好','么么哒']"&gt;&lt;/lity-rate&gt;
&lt;lity-rate v-model="rate2" :show-text="textInfo"&gt;&lt;/lity-rate&gt;
&lt;script&gt;
import { ref } from 'vue'
setup (props) {
    const rate1 = ref(1)
    const rate2 = ref(1)
    const textInfo = ref([
      '&lt;span style="color:red;"&gt;差评&lt;/span&gt;',
      '&lt;span style="color:garn;"&gt;一般&lt;/span&gt;',
      '&lt;span style="color:pink;"&gt;很好&lt;/span&gt;',
      '&lt;span style="color:black;"&gt;挺好&lt;/span&gt;',
      '&lt;span style="color:green;"&gt;么么哒&lt;/span&gt;'
    ])
    return {
      rate1,
      rate2,
      textInfo
    }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div class="doc-text">
    <span>提示文字</span>
    <lity-rate v-model="rate6" :show-text="['差评','一般','很好','挺好','么么哒']"></lity-rate>
</div>

<div class="doc-text">
    <span>HTML模版</span>
    <lity-rate v-model="rate7" :show-text="textInfo"></lity-rate>
</div>

<h2 class="h2">Props 配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>v-model</td> <td>绑定初始化点亮多少个星星</td><td>Number</td> <td>-</td><td>0</td>
  </tr>
  <tr>
    <td>count</td> <td>星星个数</td><td>Number</td> <td>-</td><td>5</td>
  </tr>
   <tr>
    <td>size</td> <td>星星图标大小</td><td>String</td> <td>-</td><td>20(单位px)</td>
  </tr>
  <tr>
    <td>color</td> <td>星星颜色</td><td>String && 常规颜色值</td> <td>-</td><td>#EAEAEA</td>
  </tr>
   <tr>
    <td>active-color</td> <td>星星激活的颜色</td><td>String && 常规颜色值</td> <td>-</td><td>#FF5D50</td>
  </tr>
   <tr>
    <td>show-text</td> <td>提示文字数组</td><td>Array</td> <td>-</td><td>[]</td>
  </tr>
  <tr>
    <td>readonly</td> <td>只读状态</td><td>Boolean</td> <td>-</td><td>false</td>
  </tr>
   <tr>
    <td>justify</td> <td>两颗星星间的距离</td><td>Number</td> <td>-</td><td>5(单位px)</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import { ref } from 'vue'
import LityRate from '../components/rate/rate'
export default {
  components: {
    LityRate
  },
  setup (props) {
    const rate1 = ref(5)
    const rate2 = ref(1)
    const rate3 = ref(2)
    const rate4 = ref(0)
    const rate5 = ref(1)
    const rate6 = ref(1)
    const rate7 = ref(1)
    const textInfo = ref([
      '<span style="color:red;">差评</span>',
      '<span style="color:garn;">一般</span>',
      '<span style="color:pink;">很好</span>',
      '<span style="color:black;">挺好</span>',
      '<span style="color:green;">么么哒</span>'
    ])
    return {
      rate1,
      rate2,
      rate3,
      rate4,
      rate5,
      rate6,
      rate7,
      textInfo
    }
  }
}
</script>

<style scoped lang="scss">
</style>
