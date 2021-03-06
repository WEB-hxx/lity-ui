<p align="center">
    <br>
    <a href="https://web-hxx.github.io/lity-ui">
          <img width="200" src="https://cn.vuejs.org/images/logo.svg">
    </a>
    <br>
    <span style="font-size:50px;font-weight:bold">一只基于Vue3.x的移动端UI。 -LITYUI Touch</span>
</p>
<br/>

#### 参考文档

Docs: <a href="https://web-hxx.github.io/lity-ui"> https://web-hxx.github.io/lity-ui </a>  


#### NPM 安装

```
$ npm install lity-ui --save
```
#### 全局引用（推荐）
###### 一般在入口文件中：main.js 上引入

```
import { createApp } from 'vue';
import Lity from 'lity-ui';
import 'lity-ui/dist/lity-ui.css';
const app = createApp();
app.use(Lity);
```
#### 按需引用

```
import { createApp } from 'vue';
import { Button } from 'lity-ui';
import 'lity-ui/dist/lity-ui.css';
const app = createApp();
app.use(Button);
```
<p><strong style="font-weight: 800;">注意：</strong> 按需引入的话，是没有基础样式部分的，所以还需要全局引用样式。</p>
