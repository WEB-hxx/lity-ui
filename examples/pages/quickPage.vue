<template>
<div class="page-content">
    <div class="introd-box">
        <div style="width:120px;height:120px;margin:0 auto;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
        </div>
        <h1>Lity Ui</h1>
        <p>基于 vue3 开源的高质量、轻量可靠、功能丰富的 Ui 组件库</p>
    </div>
    <h2 class="h2">前言</h2>
    <div class="doc-text"><code class="code-tag">lity-ui</code> 目前由我一人维护开发，个人能力精力有限，纯属是为了学习框架的一颗好奇心而去与更优秀的人开源交流学习，提出的问题不一定能及时处理；如果觉得好的话，请在github上点一下 <code class="code-tag">star</code>。</div>
<h2 class="h2">特性</h2>
<ul>
    <li class="doc-text">高质量、轻量可靠、功能丰富。</li>
    <li class="doc-text">友好的 API ，能自由灵活地使用空间。</li>
    <li class="doc-text">动画流畅、接近原生为目标，在交互体验方面追求极致。</li>
    <li class="doc-text">还原细致、漂亮的 UI设计。</li>
    <li class="doc-text">使用单文件的 Vue 组件化开发模式。</li>
    <li class="doc-text">基于 npm + webpack + babel 开发，支持 ES6+ 以上语法。</li>
</ul>
<h2 class="h2">NPM 安装</h2>
<div class="doc-text">推荐使用 <code class="code-tag">npm</code> 来安装，享受生态圈和工具带来的便利，更好地和 <code class="code-tag">webpack</code> 配合使用，当然，也推荐使用 ES2015。</div>
<div class="code-pre" v-highlight>
<pre>
<code>$ npm install lity-ui --save</code>
</pre>
</div>

<h2 class="h2">全局使用(推荐使用)</h2>
<div class="doc-text">一般在入口文件中：main.js 上配置</div>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import Lity from 'lity-ui';
import 'lity-ui/dist/lity-ui.css';
const app = createApp();
app.use(Lity);</code>
</pre>
</div>
<div class="doc-text"><strong>注意：</strong>Vue2 提供原型链上挂载方法等全局方法，但 Vue 3.0 不再支持直接在 Vue 的原型链上挂载方法，因此从 Vant 3.0 开始，使用全局方法前必须先通过 app.use 将组件注册到对应的 app 上；<code class="code-tag">Toast, Dialog</code>组件是动态创建的dom，需要用到时要单独在你的组件上单独 import 引入：</div>
<div class="code-pre" v-highlight>
<pre>
<code>import { Toast, Dialog } from 'vue';
setup (props) {
    function ToastClick () {
        Toast({ msg: '我是一个轻提示！'})
    }
    function DialogClick () {
       Dialog({
        type: 'alert',
        title: '我是标题',
        content: '我是Alert内容啦'
      })
    }
    return {
        ToastClick,
        DialogClick
    }
}
</code>
</pre>
</div>

<h2 class="h2">按需引入</h2>
<div class="doc-text">可以单独在组件引入</div>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Style, Button } from 'lity-ui';
import 'lity-ui/dist/lity-ui.css';
const app = createApp();
app.use(Button);</code>
</pre>
</div>
<div class="doc-text"><strong style="font-weight: 800;">注意：</strong> 按需引入的话，是没有基础样式部分的，所以还需要全局引用样式。</div>
<h2 class="h2">版本</h2>
<div class="doc-text">版本：<code class="code-tag">1.0.0-alpha</code> 目前在公测中，版本随着组件的添加修改会不断频繁更新版本，直接在真实项目中使用还需谨慎。</div>

<h2 class="h2">奉献代码</h2>
<div class="doc-text">有任何建议或意见你可以 <a href="https://github.com/WEB-hxx/lity-ui/pulls" style="color:blue">Pull Request</a> 进行代码贡献。</div>
<div class="doc-text">在提交 Pull Request 之前，请熟知 <code class="code-tag">ESLint</code> 开发规范，否则可能因为 Commit 信息不规范等原因被关闭 Pull Request。</div>
</div>
</template>
<style lang="scss">
.introd-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0 30px 0;
  text-align: center;
  border-bottom: 1px solid #ddd;
  h1{
      padding: 10px 0 20px 0;
      font-size: 50px;
      font-weight: bold;
      color: #001938;
  }
}
</style>
