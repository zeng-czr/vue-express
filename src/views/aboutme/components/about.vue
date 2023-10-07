<template>
  <div class="about-container">
    <div class="title">
      <i class="el-icon-info"></i>
      <span>关于本后台管理系统</span>
    </div>
    <div class="detail">
      <div class="configure">
        <span class="configTitle">此项目使用的主要框架依赖，以及版本号</span>
        <div class="item"><span>vue:</span><span>"@2.6.11"</span></div>
        <div class="item"><span>vue-router:</span><span>"@3.0.2",</span></div>
        <div class="item"><span>vuex:</span><span>"@3.1.0"</span></div>
        <div class="item"><span>sass:</span><span>"@1.26.2"</span></div>
        <div class="item"><span>sass-loader:</span><span>"@8.0.2"</span></div>
        <div class="item"><span>element-ui:</span><span>"@2.15.14"</span></div>
        <div class="item"><span>axios:</span><span>"@0.18.1"</span></div>
        <div class="item"><span>js-cookie:</span><span>"@2.2.0",</span></div>
      </div>
      <div class="study">
        <p>项目是学习开源框架<a href='https://github.com/PanJiaChen/vue-element-admin' target="_blank" style="font-weight: bold;">vue-element-admin-master</a>后写的，其中很多思想都是学习这个框架的作者
        可以说这个项目是非常值得深入学习的。</p>
        <p>目前项目只是写出了一个大致的框架，但是已经遇到了很多问题，作者在处理动态路由和各种工具类的处理方面真的很厉害
        </p>
        <p>在写这个项目的时候，我也会好好写文章，记录出现的问题，提升自己才是王道</p>
        <p>在最后给大家一个这个开源项目的在线<a href="https://panjiachen.gitee.io/vue-element-admin/#/login?redirect=%2Fdashboard" target="_blank">预览地址</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
.about-container{
  display: flex;
  flex-direction: column;
  .title{
    span{
      margin-left: 5px;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .detail{
    display: flex;
    .configure{
      display: flex;
      min-height: 100%;
      border-right: 1px dotted rgb(158, 156, 156);
      flex-direction: column;
      .configTitle{
        margin: 30px 0;
        font-size: 16px;
        font-weight: bold;
      }
      .item{
        margin: 10px 20px 10px 0;
        display: flex;
        span:nth-child(1){
          display: block;
          width: 200px;
          font-size: 20px;
          color: rgb(66, 65, 65);
        }
        span:nth-child(2){
          width: 100px;
          font-size: 18px;
          color: rgb(0, 0, 0);
        }
      }
    }
    .study{
      margin-left: 20px;
    }
  }
}
</style>