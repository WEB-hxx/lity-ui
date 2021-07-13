<template>
<div>
    <h1 class="h1">Button 按钮</h1>
    <h2 class="h2">组件引入</h2>
<div class="code-pre" v-highlight>
<pre>
<code>import { createApp } from 'vue';
import { Button } from 'lity-ui';
const app = createApp();
app.use(Button);</code>
</pre>
</div>
<h2 class="h2">按钮样子</h2>
<div class="doc-text">可以设置 <code class="code-tag">:primary</code>
<code class="code-tag">:success</code><code class="code-tag">:warning</code><code class="code-tag">:danger</code>
 的值为 <code class="code-tag">true</code> 展示不同按钮的样子，默认是 <code class="code-tag">:default</code></div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button :default="true"&gt;默认按钮&lt;/lity-button&gt;
&lt;lity-button :primary="true"&gt;信息按钮&lt;/lity-button&gt;
&lt;lity-button :success="true"&gt;成功按钮&lt;/lity-button&gt;
&lt;lity-button :warning="true"&gt;警告按钮&lt;/lity-button&gt;
&lt;lity-button :danger="true"&gt;危险按钮&lt;/lity-button&gt;</code>
</pre>
</div>
    <lity-button :default="true">默认按钮</lity-button>
    <lity-button :primary="true">信息按钮</lity-button>
    <lity-button :success="true">成功按钮</lity-button>
    <lity-button :warning="true">警告按钮</lity-button>
    <lity-button :danger="true">危险按钮</lity-button>
<h2 class="h2">按钮类型</h2>
<div class="doc-text">可以设置 <code class="code-tag">:type</code> 的值为 <code class="code-tag">submit</code> 展示提交按钮，默认值是 <code class="code-tag">button</code></div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button&gt;按钮&lt;/lity-button&gt;
&lt;lity-button :type="submit"&gt;提交按钮&lt;/lity-button&gt;</code>
</pre>
</div>
<lity-button>按钮</lity-button>
<lity-button :type="submit">提交按钮</lity-button>

<h2 class="h2">内联按钮</h2>
<div class="doc-text">可以设置 <code class="code-tag">:inline</code> 的值为 <code class="code-tag">true</code> 展示内联按钮</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button :inline="true"&gt;内联按钮&lt;/lity-button&gt;</code>
</pre>
</div>
 <lity-button :inline="true">内联按钮</lity-button>

<h2 class="h2">外边框按钮</h2>
<div class="doc-text">可以设置 <code class="code-tag">:outline</code> 的值为 <code class="code-tag">true</code> 展示外边框按钮</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button :outline="true"&gt;Outline 按钮&lt;/lity-button&gt;</code>
</pre>
</div>
<lity-button :outline="true">Outline 按钮</lity-button>

<h2 class="h2">图标按钮</h2>
<div class="doc-text">可以设置 <code class="code-tag">icon</code> 的值为字体图片的名字来展示不同的图标的按钮</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button icon="lityic-arrow-down"&gt;icon 按钮&lt;/lity-button&gt;</code>
</pre>
</div>
<lity-button icon="lityic-arrow-down">icon 按钮</lity-button>

<h2 class="h2">禁用按钮</h2>
<div class="doc-text">可以设置 <code class="code-tag">:disabled</code> 的值为 <code class="code-tag">true</code> 来禁用按钮使用</div>
<div class="code-pre" v-highlight>
<pre>
<code>&lt;lity-button :disabled="true"&gt;禁用按钮&lt;/lity-button&gt;</code>
</pre>
</div>
<lity-button :disabled="true">禁用按钮</lity-button>
</div>
</template>

<script>
import LityButton from '../components/button'
export default {
  components: {
    LityButton
  }
}
</script>

<style scoped>

</style>
