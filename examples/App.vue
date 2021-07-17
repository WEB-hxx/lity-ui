<template>
    <LityHeader></LityHeader>
    <div style="padding-top:64px">
       <LityNav></LityNav>
       <div style="padding:0 50px 0 280px">
         <router-view></router-view>
       </div>
    </div>
</template>

<script>
import LityHeader from './pages/headerPage'
import LityNav from './pages/sildeNav'
export default {
  components: {
    LityHeader,
    LityNav
  }
}
</script>

<style lang="scss">
.page-content{
  padding-bottom:100px;
}
.code-pre{
    position: relative;
    display: block;
    padding: 16px;
    margin-bottom: 30px;
    overflow-x: auto;
    color: #f9f8f8;
    font-weight: 400;
    font-size: 14px;
    font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
    line-height: 26px;
    white-space: pre-wrap;
    word-wrap: break-word;
    -webkit-font-smoothing: auto;
    background-color: #fafafa;
    border-radius: 16px;
  code{
    background-color: #f9f8f8;
    line-height: 2;
  }
}
.h1{
  font-size: 36px;
  color: #333;
  padding: 20px 20px 50px 20px;
}
.h2{
  padding-left: 8px;
  margin: 30px 0;
  font-size: 24px;
  border-left: 8px solid #009688;
}
.doc-text{
  font-size: 16px;
  line-height: 2;
}
.code-tag{
    font-family: monaco;
    margin: 0 5px;
    line-height: 1.4;
    color: #c7254e;
    background: #f9f2f4;
    padding: 2px 4px;
    box-sizing: border-box;
    font-size: .93em;
}
.table {
    width: 100%;
    box-sizing: border-box;
    table-layout: fixed;
    border-collapse: separate;
    border: 1px solid #e7e7e7;
    border-width: 1px 0 0 1px;
    line-height: 1.7;
    border-radius: 4px;
    color: #666;
    font-size:15px;
    th,td{
       padding: 6px 13px;
       border: 1px solid #e7e7e7;
       border-width: 0 1px 1px 0;
       vertical-align: middle;
       text-align: left;
       word-wrap: break-word;
       word-break: break-word;
    }
    tr th:first-child {
       border-top-left-radius: 4px;
    }
    tr th {
       font-weight: 600;
       background-color: #f9f8f8;
    }
}
</style>
