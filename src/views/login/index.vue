<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <!-- 键盘大写开启提示,提示位置右侧 -->
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

      <div style="position:relative">
        <span>没有密码账号?<router-link to="/register">点击注册</router-link></span>
        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          Or connect with
        </el-button>
      </div>
      </el-form>
  </div>
</template>
<script>
// import {login} from '@/api/user.js'
export default {
  data(){
    const validateUsername = (rule,value,callback)=>{
      if(value.length==0){
        callback(new Error("用户名不能为空"))
      }
      else{
        callback()
      }
    }
    const validatePassword = (rule,value,callback)=>{
      if(value.length<6){
        callback(new Error("密码长度不能少于六位数"))
      }
      else{
        callback()
      }
    }
    return {
      loginForm:{
        username:'admin',
        password:'123456'
      },
      loginRules:{
        username:[{required:true,trigger:'blur',validator:validateUsername}],
        password:[{required:true,trigger:'blur',validator:validatePassword}]
      },
      passwordType:'password',
      capsTooltip:false,
      loadingTooltip:false,
      showDialog:false,
      loading:false
    }
  },
  methods:{
    // 大写键盘开启关闭提示
    checkCapslock(e) {
      // e为点击事件对象
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    // 密码显示与隐藏
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin(){
      this.$refs.loginForm.validate(valid=>{
        if(valid){
          this.loading = true
          this.$store.dispatch('user/login',this.loginForm)
          .then(()=>{
            this.$router.replace({path:'/'})
            this.loading = false
          })
          .catch(()=>{
            this.loading = false
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container{
  width: 100%;
  overflow: hidden;
  .login-form{
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    padding: 160px 35px 0;
    .title-container{
      text-align: center;
    }
    ::v-deep .el-form-item__content{
      display: flex;
      align-items: center;
      border-bottom: 2px solid rgb(129, 127, 127);
      .el-input{
        font-size: 18px;
        input{
          border: none !important;
        }
      }
      .el-form-item__error{
        margin-top: 2px;
        font-size: 13px;
        font-weight: bold;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .thirdparty-button{
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
.show-pwd{
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  cursor: pointer;

}
</style>