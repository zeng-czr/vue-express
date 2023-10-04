<template>
  <div class="header">
    <div class="board-container">
      <BreadCrumb/>
    </div>
    <div class="info-container">
      <div class="info">
        <div class="vartar">
          <img src="../../../assets/vartar.jpg" alt="">
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
import BreadCrumb from '@/components//breadCrumb/index.vue'
export default {
  name: 'header',

  data() {
    return {
      
    };
  },
  components:{
    BreadCrumb
  },
  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
.header{
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .info-container{
    margin-right: 40px;
    .info{
      display: flex;
      align-items: center;
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
      }
    }
  }
}
</style>