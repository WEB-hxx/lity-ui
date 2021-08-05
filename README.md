<p align="center">
    <br>
    <a href="https://web-hxx.github.io/lity-ui" style="width:200px;height:200px">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
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