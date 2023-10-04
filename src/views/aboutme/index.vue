<template>
  <div class="about-container">
    <div class="userInfo">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>About Me</span>
        </div>
        <div class="avatar">
          <div class="img">
            <input ref="input" type="file" @change="uploadImg" style="display: none;">
          <img ref="img" @click="changeImg()" src="../../assets/vartar.jpg" alt="">
          <!-- <img ref="img" @click="changeImg()" src="http://localhost:8080/07a8ccc9-1dc6-4546-9267-8bcd17896916 " alt="">-->
            
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
        <div slot="header" class="clearfix">
          <span>About Me</span>
        </div>
        <div v-for="o in 14" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutme',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    uploadImg(e){
      console.log(e.target.files)
      const file = e.target.files[0]
      console.log(new Blob(file))
      const url = window.URL.createObjectURL(file)
      this.$refs.img.src=url
      console.log('上传照片')
      console.log(url)
    },
    changeImg(){
      this.$refs.input.click()
    }
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
  }
}
</style>