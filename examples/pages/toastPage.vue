<template>
<div class="page-content">
    <h1 class="h1">Toast 轻提示</h1>
    <div class="doc-text">Toast 轻提示是一个单例模式，只会存在一个轻提示</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Toast } from 'lity-ui';
const app = createApp();
app.use(Toast);</code>
</pre>
</div>
<h2 class="h2">基础用法</h2>
<div class="doc-text">一个没有任何图标的提示！</div>
<div class="code-pre" v-highlight>
<pre>
<code>setup (props) {
    function ToastClick () {
        Toast({ msg: '我是一个轻提示！'})
    }
    return {
        ToastClick
    }
}</code>
</pre>
</div>
<lity-button :success="true" @click="ToastClick">尝试一下没有任何图标提示效果</lity-button>

<h2 class="h2">自定义图标</h2>
<div class="doc-text">可以传入一个图片的路径 <code class="code-tag">img_url</code>，来展示图标,最好是透明底的png图片</div>
<div class="code-pre" v-highlight>
<pre>
<code>setup (props) {
    function ToastClick () {
        Toast({ msg: '我是有自定义图标的提示！', img_url: 'https://b.yzcdn.cn/vant/logo/github.svg', time: 3000 })
    }
    return {
        ToastClick
    }
}</code>
</pre>
</div>
<lity-button :success="true" @click="ToastClick2">我是有自定义图标的提示</lity-button>

<h2 class="h2">Props 配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>msg</td> <td>提示语信息</td><td>String</td> <td>-</td>
  </tr>
  <tr>
    <td>imgurl</td> <td>自定义图标路径</td><td>String</td> <td>-</td>
  </tr>
   <tr>
    <td>time</td> <td>显示的时间</td><td>Number</td> <td>3000</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import LityButton from '../components/button/button'
import Toast from '../components/toast/index'
export default {
  components: {
    LityButton
  },
  setup (props) {
    function ToastClick () {
      Toast({ msg: '我是一个轻提示！' })
    }
    function ToastClick2 () {
      Toast({ msg: '我是有自定义图标的提示！', img_url: 'https://b.yzcdn.cn/vant/logo/github.svg', time: 3000 })
    }
    return {
      ToastClick,
      ToastClick2
    }
  }
}
</script>

<style scoped lang="scss">
</style>
