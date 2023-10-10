<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside :class="isCollapse?'collapse':'notCollapse'">
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
        <el-header style="background-color: #409EFF;">
          <app-header></app-header>
        </el-header>
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
<style>
app-wrapper{
  position: relative;
  width: 100%;
  height: 100%;
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
}
</style>