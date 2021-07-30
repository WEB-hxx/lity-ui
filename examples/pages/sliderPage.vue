<template>
<div class="page-content">
    <h1 class="h1">轮播图 Slider</h1>
    <div class="doc-text">轮播图组件是基于 <code class="code-tag">better-scroll</code> 插件进行二次封装，配置了一些常用的参数，<a href="https://better-scroll.github.io/docs/zh-CN/plugins/slide.html">better-scroll 文档</a></div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Slider, SliderItem } from 'lity-ui';
const app = createApp();
app.use(Slider).use(SliderItem);</code>
</pre>
</div>
<h2 class="h2">基本用法</h2>
<div class="doc-text"><code class="code-tag">lity-slider</code> 需要配合 <code class="code-tag">lity-slider-item</code> 一起使用，传入数据 <code class="code-tag">data</code> 一个数组即可。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
  &lt;div style="width:500px;height:300px;"&gt;
    &lt;lity-slider :data="data"&gt;
      &lt;lity-slider-item v-for="(item, index) in data" :key="index"&gt;
        &lt;a :href="item.url"&gt;
            &lt;img :src="item.path"&gt;
          &lt;/a&gt;
      &lt;/lity-slider-item&gt;
    &lt;/lity-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import { ref } from 'vue'
export default {
  setup (props) {
    const data = ref([
      {
        url: 'https://github.com/WEB-hxx/lity-ui',
        path: 'https://pic.xcar.com.cn/strategy/cos/image/2021/6/25/strategy_20210625112513743431291670164.jpg'
      },
      {
        url: 'https://github.com/WEB-hxx/lity-ui',
        path: 'https://pic.xcar.com.cn/strategy/cos/image/2021/6/17/strategy_20210617155804083503256342684.jpg'
      }, {
        url: 'https://github.com/WEB-hxx/lity-ui',
        path: 'https://pic.xcar.com.cn/strategy/cos/image/2021/6/30/strategy_20210630165136414999459796925.jpg'
      }
    ])
    return {
      data
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>
<div style="width:500px;height:300px;">
   <lity-slider :data="data">
     <lity-slider-item v-for="(item, index) in data" :key="index">
       <a :href="item.url">
          <img :src="item.path">
        </a>
     </lity-slider-item>
   </lity-slider>
</div>
<h2 class="h2">纵向滚动</h2>
<div class="doc-text">支持纵向滚动，需要设置属性 <code class="code-tag">direction="vertical"</code> 即可。</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;
  &lt;div style="width:500px;height:300px;"&gt;
    &lt;lity-slider :data="data" direction="vertical"&gt;
      &lt;lity-slider-item v-for="(item, index) in data" :key="index"&gt;
        &lt;a :href="item.url"&gt;
            &lt;img :src="item.path"&gt;
          &lt;/a&gt;
      &lt;/lity-slider-item&gt;
    &lt;/lity-slider&gt;
  &lt;/div&gt;
&lt;template&gt;
</code>
</pre>
</div>
<div style="width:500px;height:300px;">
   <lity-slider :data="data" direction="vertical">
     <lity-slider-item v-for="(item, index) in data" :key="index">
       <a :href="item.url">
          <img :src="item.path">
        </a>
     </lity-slider-item>
   </lity-slider>
</div>
<h2 class="h2">lity-slider [Props]</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>data</td> <td>轮播图的数据data</td><td>Array</td> <td>-</td><td>[ ]</td>
  </tr>
   <tr>
    <td>speed</td> <td>切换速度（单位毫秒）</td><td>Number</td> <td>-</td><td>300</td>
  </tr>
  <tr>
    <td>direction</td> <td>切换方向</td><td>String</td> <td><code class="code-tag">horizontal</code>, <code class="code-tag">vertical</code></td><td>horizontal</td>
  </tr>
   <tr>
    <td>loop</td> <td>是否循环</td><td>Boolean</td> <td>-</td><td>true</td>
  </tr>
  <tr>
    <td>autoplay</td> <td>是否开启自动播放</td><td>Boolean</td> <td>-</td><td>true</td>
  </tr>
  <tr>
    <td>interval</td> <td>距离下一次播放的间隔（单位毫秒）</td><td>Number</td> <td>-</td><td>3000</td>
  </tr>
   <tr>
    <td>showDot</td> <td>是否显示分页标记, 当图片必须大于2张设置才会生效</td><td>Boolean</td> <td>-</td><td>true</td>
  </tr>
</tbody>
</table>
<h2 class="h2">lity-slider [solt]</h2>
<table class="table">
<thead><tr><th>名称</th> <th>说明</th></tr></thead>
<tbody>
  <tr>
    <td>-</td> <td>用于插入 lity-slider-item 组件</td>
  </tr>
</tbody>
</table>
<h2 class="h2">lity-slider-item [solt]</h2>
<table class="table">
<thead><tr><th>名称</th> <th>说明</th></tr></thead>
<tbody>
  <tr>
    <td>-</td> <td>自定义 item 图片的内容</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import { ref } from 'vue'
import LitySlider from '../components/slider/slider'
import LitySliderItem from '../components/slider/slider-item'
export default {
  components: {
    LitySlider,
    LitySliderItem
  },
  setup (props) {
    const data = ref([
      {
        url: 'https://github.com/WEB-hxx/lity-ui',
        path: 'https://pic.xcar.com.cn/strategy/cos/image/2021/6/25/strategy_20210625112513743431291670164.jpg'
      },
      {
        url: 'https://github.com/WEB-hxx/lity-ui',
        path: 'https://pic.xcar.com.cn/strategy/cos/image/2021/6/17/strategy_20210617155804083503256342684.jpg'
      }, {
        url: 'https://github.com/WEB-hxx/lity-ui',
        path: 'https://pic.xcar.com.cn/strategy/cos/image/2021/6/30/strategy_20210630165136414999459796925.jpg'
      }
    ])
    return {
      data
    }
  }
}
</script>

<style scoped lang="scss">
</style>
