<template>
<div class="page-content">
    <div class="newsList" @mouseover="mouseOver" @mouseout="mouseOut">
    <div class="title">资讯新闻</div>
       <div class="ul-list" >
         <ul id="con1" ref="domRef" :class="{ anim:animate == true }" :style="{marginTop:-topHight+'px'}">
            <li v-for="(item, key) in items" :key="key" class="newsItem">
                <div>{{item.time}}</div>
                <div>{{item.text}}</div>
            </li>
         </ul>
       </div>
    </div>

    <div id="customerRef" style="width:800px;height:500px"></div>
    <div class="content-box">
      <ul class="ul01">
        <li v-for="(item, key) in 4" :key="key" class="li">{{'00'+key}}</li>
      </ul>
      <ul class="ul02">
        <li>001</li>
        <li>002</li>
        <li>003</li>
        <li>004</li>
      </ul>
   </div>
</div>
</template>

<script>
import { ref, onMounted, inject } from 'vue'
export default {
  setup () {
    const echarts = inject('ec')
    const items = ref([
      {
        time: '2022.07.15  22:11',
        text: '这篇文章主要介绍了vue新闻自下往这篇文章主要上滚动这篇文章主要介绍了vue新闻自下往上滚动效果这篇文章主要介绍了vue新闻自下往上滚动效果效果这篇文章主要介绍了vue新闻自下往这篇文章主要上滚动这篇文章主要介绍了vue新闻自下往上滚动效果这篇文章主要介绍了vue新闻自下往上滚动效果效果这篇文章主要介绍了vue新闻自下往这篇文章主要上滚动这篇文章主要介绍了vue新闻自下往上滚动效果这篇文章主要介绍了vue新闻自下往上滚动效果效果'
      },
      {
        time: '2022.07.15  22:11',
        text: '这篇文章主要介绍了vue新闻自下往上滚动效果,当鼠标鼠标放上暂停滚动朋友可以参考下这篇文章主要介绍了vue新闻自下往上滚动效果'
      },
      {
        time: '2022.07.15  22:11',
        text: '这篇文章主要这篇文章主要这篇文章主要这篇文章主要这篇文章主要这篇文章主要这篇文章主要这篇文章主要'
      },
      {
        time: '2022.07.15  22:11',
        text: '这篇文章主这篇文章主要这篇文章主要这篇文章主要这篇文章主要这篇文章主要要这篇文章主要'
      },
      {
        time: '2022.07.15  22:11',
        text: '这篇文章主要介绍了vue新闻自下往上滚动效果,当鼠标这篇文章主要介绍了vue新闻自下往上滚动效果这篇文章主要介绍了vue新闻自下往上滚动效果鼠标放上暂停滚动'
      }
    ])
    const timer = ref(null)
    const animate = ref(true)
    const topHight = ref(0)
    const domRef = ref(null)
    onMounted(() => {
      const myChart = echarts.init(document.getElementById('customerRef'))
      console.log(myChart)
      myChart.setOption({
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 100,
                name: '大家居产业（18%）'
              },
              {
                value: 200,
                name: '大食品产业（28%）'
              },
              {
                value: 300,
                name: '大健康产业（23%）'
              },
              {
                value: 400,
                name: '大教育产业（15%）'
              },
              {
                value: 180,
                name: '大d务产业（18%）'
              },
              {
                value: 500,
                name: '大服务产业（18%）'
              }
            ],
            color: [
              '#333',
              '#f0f',
              '#d99',
              '#dd0',
              '#ff7',
              '#ff9'
            ],
            roseType: 'area'
          }
        ]
      })
      // timer.value = setInterval(scroll, 3000)
    })
    function scroll () {
      const child = domRef.value.children
      animate.value = true
      topHight.value = child[0].clientHeight
      setTimeout(() => {
        items.value.push(items.value[0])
        items.value.shift()
        topHight.value = 0
        animate.value = false
      }, 1000)
    }
    function mouseOver () {
      console.log('鼠标悬停')
      // this.animate = false;
      clearInterval(timer.value)
    }
    function mouseOut () {
      timer.value = setInterval(scroll, 3000)
    }
    return {
      items,
      mouseOver,
      mouseOut,
      animate,
      topHight,
      domRef
    }
  }
}
</script>

<style scoped lang="scss">
.content-box{
  display: flex;
  ul>li{
    width: 100px;
    height: 50px;
    border:1px solid #333;
    margin: 10px;
  }
}
.newsList{
    position: relative;
    width: 450px;
    height: 300px;
    padding:10px;
    box-sizing: border-box;
    border:1px solid #ccc;
    overflow: hidden;
    .anim {
        transition: all 1s;
    }
    .title{
        padding-bottom: 10px;
        font-size:20px;
        color: #333
    }
    .ul-list {
        position: absolute;
        left: 10px;
        top: 40px;
        height: 250px;
        overflow: hidden;
    }
    li{
        line-height: 1.8
    }
    ul li:nth-child(1){
      color: red
    }
}
</style>
