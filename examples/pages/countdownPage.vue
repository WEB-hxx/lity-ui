<template>
  <div class="page-content">
     <h1 class="h1">countdown 倒计时</h1>
     <h2 class="h2">组件引入</h2>
     <div class="doc-text">组件按需引入，也可以全局引入</div>
       <div class="code-pre" v-highlight>
       <pre>
        <code>import { createApp } from 'vue';
        import { CountDown } from 'lity-ui';
        const app = createApp();
        app.use(CountDown);</code>
       </pre>
     </div>

     <h2 class="h2">默认模版</h2>
     <div class="doc-text">可以设置 <code class="code-tag">time</code>值为日期格式传入</div>
       <div class="code-pre" v-highlight>
        <pre><code>&lt;lity-count-down time="2023/01/01 10:10:10"&gt;&lt;/lity-count-down&gt;</code></pre>
       </div>
       <lity-count-down time="2023/10/01 10:10:10"></lity-count-down>
      <h2 class="h2">时间格式模版</h2>
     <div class="doc-text">可以设置 <code class="code-tag">time</code>值为日期格式传入，<code class="code-tag">format</code>设置格式 {%d}{%h}{%m}{%s}</div>
       <div class="code-pre" v-highlight>
        <pre><code>&lt;lity-count-down time="2023/01/01 10:10:10" format="{%s}秒{%m}分{%h}时{%d}天"&gt;&lt;/lity-count-down&gt;</code></pre>
       </div>
       <lity-count-down time="2023/10/01 10:10:10" format="{%s}秒{%m}分{%h}时{%d}天"></lity-count-down>
      <h2 class="h2">传入时间为（秒）：</h2>
     <div class="doc-text">可以设置 <code class="code-tag">:time</code>值为秒传入，<code class="code-tag">timetype="second"</code></div>
       <div class="code-pre" v-highlight>
        <pre><code>&lt;lity-count-down :time="180000" timetype="second"&gt;&lt;/lity-count-down&gt;</code></pre>
       </div>
       <lity-count-down :time="180000" timetype="second"></lity-count-down>
      <h2 class="h2">传入时间戳：</h2>
      <div class="doc-text">可以设置 <code class="code-tag">:time</code>值为时间戳传入，<code class="code-tag">timetype="timestamp"</code></div>
       <div class="code-pre" v-highlight>
        <pre><code>&lt;lity-count-down :time="1674183278" timetype="timestamp"&gt;&lt;/lity-count-down&gt;</code></pre>
       </div>
       <lity-count-down :time="1674183278" timetype="timestamp"></lity-count-down>

      <h2 class="h2">通过Slot自定义HTML模板</h2>
      <div class="doc-text">可以设置 <code class="code-tag">time</code>值为日期格式传入</div>
       <div class="code-pre" v-highlight>
        <pre><code>&lt;lity-count-down time="2023/01/01 10:10:10" timetype="timestamp"&gt;
          &lt;span style="color:red;"&gt;{ %d }&lt;i&gt;天&lt;/i&gt;&lt;/span&gt;
          &lt;span style="color:gray;"&gt;{ %h }&lt;i&gt;时&lt;/i&gt;&lt;/span&gt;
          &lt;span style="color:blue;"&gt;{ %m }&lt;i&gt;分&lt;/i&gt;&lt;/span&gt;
          &lt;span style="color:orange;"&gt;{ %s }&lt;i&gt;秒&lt;/i&gt;&lt;/span&gt;
&lt;/lity-count-down&gt;</code></pre>
       </div>
       <lity-count-down time="2023/01/01 10:10:10">
          <span style="color:red;">{%d}<i>天</i></span>
          <span style="color:gray;">{%h}<i>时</i></span>
          <span style="color:blue;">{%m}<i>分</i></span>
          <span style="color:orange;">{%s}<i>秒</i></span>
       </lity-count-down>
       <h2 class="h2">Props 配置</h2>
        <table class="table">
        <thead><tr><th>参数</th> <th>说明</th> <th>类型</th>  <th>默认值</th></tr></thead>
        <tbody>
          <tr>
            <td>time</td> <td>时间</td> <td> [String, Number, Date] </td>  <td>-</td>
          </tr>
        <tr><td>format</td> <td>时间格式</td> <td>String</td>  <td> {%d}天{%h}时{%m}分{%s}秒</td></tr>
          <tr><td>timetype</td> <td>时间类型：日期，秒，时间戳</td> <td>['datetime', 'second', 'timestamp']</td> <td>datetime</td></tr>
          <tr><td>doneText</td> <td>倒计时结束要显示的文本</td> <td>Boolean</td> <td>已结束</td></tr>
          <tr><td>callback</td> <td>倒计时结束回调函数</td> <td>Function</td> <td>-</td></tr>
        </tbody>
        </table>

      <h2 class="h2">slot 插槽</h2>
      <table class="table">
      <thead><tr><th>插槽名</th> <th>说明</th></tr></thead>
      <tbody>
        <tr>
          <td>-</td> <td>组件内写入html生效</td>
        </tr>
      </tbody>
      </table>

  </div>
</template>

<script>
import { ref } from 'vue'
import LityCountDown from '../components/countdown/count-down'
export default {
  components: {
    LityCountDown
  },
  setup (props) {
    const time = ref(30 * 60)
    return { time }
  }
}
</script>

<style scoped>

</style>
