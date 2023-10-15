<template>
  <div class="app-wrapper">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :class="isCollapse?'collapse':'notCollapse'" style="background-color: black; z-index: 20;">
        <div class="logo" v-show="!isCollapse">
          <img src="../assets/logo.png" alt="">
          <span class="title">后台管理系统</span>
        </div>
        <el-menu
        :collapse = "isCollapse"
        ref="menu"
        :default-active="this.$route.path"
        :unique-opened="false"
        router>
        <sidebar v-for = "item in permission_routes" :item = "item" :key="item.path" :base-path = "item.path"/>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部区域 -->
        <el-header style="box-shadow: 0 1px 9px -2px #959595;">
          <app-header></app-header>
        </el-header>
        <!-- 内容区域 -->
        <el-main>
          <app-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {AppMain , Sidebar , AppHeader} from './components/index.js'
import { mapGetters } from 'vuex';
export default {
  name: 'layout',
  components:{
    AppMain,
    Sidebar,
    AppHeader,
  },
  data() {
    return {

    };
  },

  mounted() {
    
  },
  computed:{
    ...mapGetters(['permission_routes','isCollapse']),
  },

  methods: {
  },
};
</script>
<style lang="scss">
@import '@/style/theme/handle.scss';

app-wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
}
.el-header{
  // @include background_color('bgColor1');
}
.collapse{
  width: 64px !important;
  transition: 1s width;
  overflow: hidden !important;
}
.notCollapse{
  width: 200px !important;
  transition: 1s width;
  overflow: hidden !important;
  height: 100%;
}
.el-aside{
  min-height: 100vh;
  // @include background_color('bgColor2');
  background-color: #333 !important;
  .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
    img{
      display: inline-block;
      width: 40px;
      height: 40px;
    }
    .title{
      font-size: 20px;
      color: #fff;
      // @include font_color('fontColor1');
    }
  }
  
}
</style>