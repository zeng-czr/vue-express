<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click="handleClick(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb',

  data() {
    return {
      levelList:null,
    };
  },

  create() {
    this.getBreadCrumb()
  },
  watch:{
    $route(){
      // if(route.path.startsWith('/redirect')) {
      //   return 
      // }
      this.getBreadCrumb()
    }
  },
  methods: {
    getBreadCrumb(){
      // 过滤掉没有title的路由,仅展示有title的路由
      let matched = this.$route.matched.filter(item=>item.meta&&item.meta.title)
      console.log(matched)
      const first = matched[0]
      if(!this.isDashBoard(first)){
        matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
      }
      console.log(matched)
      this.levelList = matched.filter(item => item.meta && item.meta.title )
      console.log(this.levelList)

    },
    isDashBoard(route) {
      const name = route && route.name
      if(!name){
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },  
    handleClick(item){
      const {redirect,path} = item
      // 如果点击的sub-menu,则直接redirect
      if(redirect) {
        this.$router.push(redirect)
        return 
      }
      this.$router.push(path)
    },
  },
};
</script>