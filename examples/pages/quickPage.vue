<template>
<div class="page-content">
    <h2 class="h2">前言</h2>
    <div class="doc-text"><code class="code-tag">lity-ui</code> 目前由我一人维护开发，个人能力精力有限，开源的初心纯属是为了学习Vue3源码的那份热情支撑着，如果觉得好的话，在github上点一下 <code class="code-tag">star</code>， 提出的问题不一定能及时处理。</div>
<h2 class="h2">特性</h2>
<ul>
    <li class="doc-text">高质量、功能丰富。</li>
    <li class="doc-text">友好的 API ，能自由灵活地使用空间。</li>
    <li class="doc-text">动画流畅、接近原生为目标，在交互体验方面追求极致。</li>
    <li class="doc-text">还原细致、漂亮的 UI设计。</li>
    <li class="doc-text">使用单文件的 Vue 组件化开发模式。</li>
    <li class="doc-text">基于 npm + webpack + babel 开发，支持 ES6+ 以上语法。</li>
</ul>
<h2 class="h2">NPM 安装</h2>
<div class="doc-text">推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，也推荐使用 ES2015。</div>
<div class="code-pre" v-highlight>
<pre>
<code>$ npm install lity-ui --save</code>
</pre>
</div>

<h2 class="h2">全局使用</h2>
<div class="doc-text">一般在入口文件中：main.js 上配置</div>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import Lity from 'lity-ui';
const app = createApp();
app.use(Lity);</code>
</pre>
</div>

<h2 class="h2">按需引入</h2>
<div class="doc-text">一般在入口文件中：main.js 上配置</div>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Style, Button } from 'lity-ui';
const app = createApp();
app.use(Button);</code>
</pre>
</div>
<div class="doc-text"><strong style="font-weight: 800;">注意：</strong> 按需引入的话，是不会打包基础样式部分的，所以在使用的时候需要引入 style 模块。</div>

<h2 class="h2">参与</h2>
<div class="doc-text">使用本项目，意味着你也有义务帮助其变得更好，请大胆奉献你的代码。</div>
<div class="doc-text">有任何建议或意见你可以 <a href="https://github.com/WEB-hxx/lity-ui/pulls">Pull Request</a>。</div>
</div>
</template>
