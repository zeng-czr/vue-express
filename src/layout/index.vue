<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside style="overflow: hidden;width:200px">
        <el-menu
        ref="menu"
        :default-active="this.$route.path"
        :unique-opened="false"
        router>
        <sidebar v-for = "item in permission_routes" :item = "item" :key="item.path" :base-path = "item.path"/>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="background-color: #409EFF;">
          <Header></Header>
        </el-header>
        <el-main>
          <app-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {AppMain , Sidebar , Header} from './components/index.js'
import { mapGetters } from 'vuex';
export default {
  name: 'layout',
  components:{
    AppMain,
    Sidebar,
    Header,
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },
  computed:{
    ...mapGetters(['permission_routes','token']),
    activeMenu() {
      // const route = String(this.$route.path)
      // let path = route.substr(route.lastIndexOf("/") + 1)
      return this.$route.path
    },
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
/* .el-main{
  margin: 0 !important;
  padding: 0 !important;
} */
</style>