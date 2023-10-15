<template>
  <div class="header">
    <div class="board-container">
      <div class="collapse-container" @click="toggleCollapse()">
        <svg-icon class="svg-collapse" style="color: #fff;" :icon-class="collapseType"></svg-icon>
      </div>
      <BreadCrumb/>
    </div>
    <div class="info-container">
      <div class="info">
        <div class="userName">
          <span>{{ name }}您好！欢迎您</span>
        </div>
        <div class="vartar">
          <img v-if="imageUrl" :src="imageUrl" alt="">
          <img v-else src="@/assets/vartar.jpg" alt="">
        </div>
        <div class="aboutMe">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              个人中心<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/">
              <el-dropdown-item>Dashboard</el-dropdown-item>
              </router-link>
              <router-link to="/about/index">
                <el-dropdown-item>个人中心</el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BreadCrumb from '@/components//breadCrumb/index.vue'
export default {
  name: 'header',

  data() {
    return {
      imageUrl:'',
      collapseType:'menu-unfold',
    };
  },
  components:{
    BreadCrumb
  },
  computed:{
    ...mapGetters(['isCollapse','name']),
    // isCollapse(){
    //   return this.$store.state.public.isCollapse
    // },
    state_avatar(){
      return this.$store.state.user.avatar
    }
  },
  mounted() {
    this.imageUrl = this.$store.getters.avator
  },
  watch:{
    state_avatar(newVal){
      this.imageUrl = newVal
    },
    isCollapse(newV){
      if(newV==true){
        this.collapseType='menu-fold'
      }else{
        this.collapseType='menu-unfold'
      }
      console.log(newV)
    }
  },
  methods: {
    toggleCollapse(){
      console.log("执行了。。。。。。")
      this.$store.dispatch('public/toggleCollapse')
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/style/theme/handle.scss';
.header{
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .board-container{
    display: flex;
    align-items: center;
    .collapse-container{
      font-size: 24px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
  .info-container{
    margin-right: 40px;
    .info{
      display: flex;
      align-items: center;
      .userName{
        margin-right: 20px;
        span{
        font-weight: bold;
        // @include font_color('bgColor3');
        }
      }
      .vartar{
        width: 40px;
        height: 40px;
        img{
          width: 100%;
          height: 100%;
          border: 1px solid #409EFF;
          border-radius: 20px;
        }
      }
      .aboutMe{
        margin-left: 20px;
        cursor: pointer;
        text-align: center;
        span{
          // @include font_color('fontColor1')
        }
      }
    }
  }
}
</style>