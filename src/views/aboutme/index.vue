<template>
  <div class="about-container">
    <div class="userInfo">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>About Me</span>
        </div>
        <div class="avatar">
          <div class="img">
            <input ref="input" type="file" @change="uploadLocal" style="display: none;">
          <img v-if="imageUrl" ref="img" @click="changeImg" :src="imageUrl" alt="">
          <img v-else ref="img" @click="changeImg" src="@/assets/vartar.jpg" alt="">
          <!-- <img ref="img" @click="uploadLocal()" src="../../assets/vartar.jpg" alt=""> -->
            
        </div>
          <div class="info">
            <span>Super Admin</span>
            <span>Admin</span>
          </div>
        </div>
        <div class="detail">
          <div class="level">
            <h4>技能等级</h4>
            <span>小菜鸡一枚,努力学习中......</span>
          </div>
          <div class="character">
            <h4>性格特点</h4>

            <div class="item">
              <span>敢为型</span>
              <el-progress :percentage="70"></el-progress>
            </div>
            <div class="item">
              <span>聪慧型</span>
              <el-progress :percentage="0"></el-progress>
            </div>
            <div class="item">
              <span>乐群型</span>
              <el-progress :percentage="100" status="success"></el-progress>
            </div>
            <div class="item">
              <span>自律型</span>
              <el-progress :percentage="50" status="exception"></el-progress>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="userDetail">
      <el-card class="box-card">
        <el-tabs v-model="activeTab">
          <!-- <el-tab-pane label="" name="first">用户管理</el-tab-pane> -->
          <el-tab-pane label="message" name="message">
            <message/>
          </el-tab-pane>
          <el-tab-pane label="account" name="account">
            <account/>
          </el-tab-pane>
          <el-tab-pane label="about" name="about">
            <about/>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import message from './components/message.vue'
import account from './components/account.vue'
import about from './components/about.vue'
import {uploadImg} from '@/api/user.js'
export default {
  name: 'aboutme',

  data() {
    return {
      imageUrl:'',
      activeTab:'message',
    };
  },
  components:{
    message,
    account,
    about
  },
  mounted() {
    this.imageUrl = this.$store.getters.avator
  },
  computed:{
    imgURL(){
      return this.$store.getters.avator
    }
  },
  watch:{
    imgURL(newV){
      this.imageUrl = newV
    }
  },
  methods: {
    uploadLocal(e){
      const file = e.target.files[0]
      let formData = new FormData()
      formData.append('file', file)
      uploadImg(formData).then(res => {
        // this.imageUrl = res.data.imgUrl
        this.$store.commit("user/SET_AVATOR",res.data.imgUrl)
        // this.$store.dispatch('user/getInfo')
      })
    },
    changeImg(){
      this.$refs.input.click()
    },
    
  },
};
</script>
<style lang="scss" scoped>
.about-container {
  display: flex;
  height: 100%;
  .userInfo{
    flex: 1;
    margin-right: 20px;
    .avatar{
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .img{
        width: 100px;
        height: 100px;
        cursor: pointer;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50px;
        }
      }
      .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
          margin: 3px 0;
        }
      }
    }
  }
  .userDetail{
    flex: 3;
    .el-card{
      min-height: 680px;
    }
  }
}
</style>