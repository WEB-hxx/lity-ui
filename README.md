<p align="center">
    <br>
    <a href="https://web-hxx.github.io/lity-ui">
          <img width="200" src="https://cn.vuejs.org/images/logo.svg">
    </a>
    <br>
</p>
<br/>

#### 一只基于Vue3.x的移动端UI。 -LITYUI Touch

中文文档: <a href="https://web-hxx.github.io/lity-ui"> https://web-hxx.github.io/lity-ui </a>  


#### NPM 安装

```
$ npm install lity-ui --save
```
#### 全局引用
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
import { Style, Button } from 'lity-ui';
const app = createApp();
app.use(Button);
```
<p><strong style="font-weight: 800;">注意：</strong> 按需引入的话，是不会打包基础样式部分的，所以在使用的时候需要引入 <code>style</code> 模块。</p>
