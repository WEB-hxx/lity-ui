<template>
<div class="page-content">
    <h1 class="h1">模态框 Dialog</h1>
    <div class="doc-text"><code class="code-tag">Dialog</code> 模态框组件，提供了多种样式及交互形式。</div>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Dialog } from 'lity-ui';
const app = createApp();
app.use(Dialog);</code>
</pre>
</div>
<h2 class="h2">Alert 框</h2>
<div class="doc-text">这是一个 <code class="code-tag">Alert</code> 框，需要转入 <code class="code-tag">type: 'alert'</code> </div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;&lt;button @click="hanlder"&gt;点击我&lt;/button&gt;&lt;/template&gt;
&lt;script&gt;
export default {
  setup (props) {
    function hanlder () {
      Dialog({
        type: 'alert',
        title: '我是标题',
        content: '我是Alert内容啦'
      })
    }
    return {
      hanlder
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>

<lity-button @click.stop="hanlder1">点击我</lity-button>

<h2 class="h2">confirm 框</h2>
<div class="doc-text">这是一个 <code class="code-tag">confirm</code> 框，需要转入 <code class="code-tag">type: 'confirm'</code> </div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;template&gt;&lt;button @click="hanlder"&gt;点击我confirm&lt;/button&gt;&lt;/template&gt;
&lt;script&gt;
export default {
  setup (props) {
    function hanlder () {
      Dialog({
        type: 'confirm',
        title: '我是标题',
        content: '&lt;div style="color:red"&gt;我是confirm框&lt;/div&gt;',
        confirm: ()=>{
          alert('点击确定，我执行了')
        }
      })
    }
    return {
      hanlder
    }
  }
}
&lt;/script&gt;
</code>
</pre>
</div>

<lity-button @click.stop="hanlder2">点击我confirm</lity-button>
<h2 class="h2">Dialog 参数配置</h2>
<table class="table">
<thead><tr><th>参数</th> <th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead>
<tbody>
  <tr>
    <td>type</td> <td>模态框类型</td><td>String</td> <td><code class="code-tag">alert</code><code class="code-tag">confirm</code> </td><td>confirm</td>
  </tr>
   <tr>
    <td>title</td> <td>模态框标题</td><td>String</td> <td>-</td><td>温馨提示</td>
  </tr>
  <tr>
    <td>content</td> <td>模态框内容，支持HTML字符串</td><td>String</td> <td>-</td><td>-</td>
  </tr>
   <tr>
    <td>confirm</td> <td>点击确定按钮的回调方法</td><td>Function</td> <td>-</td><td>-</td>
  </tr>
</tbody>
</table>
</div>
</template>

<script>
import LityButton from '../components/button/button'
import Dialog from '../components/dialog/index'
export default {
  components: {
    LityButton
  },
  setup (props) {
    function hanlder1 (e) {
      Dialog({
        type: 'alert',
        title: '我是标题',
        content: '我是Alert内容啦'
      })
    }
    function hanlder2 () {
      Dialog({
        type: 'confirm',
        title: '我是标题',
        content: '<div style="color:red">我是confirm框</div>',
        confirm: () => {
          alert('点击确定，我执行了')
        }
      })
    }
    return {
      hanlder1,
      hanlder2
    }
  }
}
</script>

<style scoped lang="scss">
</style>
