<template>
  <div class="account-container">
    <div class="title">
      <i class="el-icon-info"></i>
      <span>管理系统密码修改</span>
    </div>
    <el-form :model="pwdform" status-icon :rules="rule" ref="pwdForm" label-width="100px" label-position="left" class="demo-ruleForm">
      <el-form-item label="新密码" prop="password">
        <el-input type="password" v-model="pwdform.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="rePassword">
        <el-input type="password" v-model="pwdform.rePassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('pwdForm')">提交</el-button>
        <el-button @click="resetForm('pwdForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'account',

  data() {
    var validatePass = (rule,value,callback)=>{
      if(!value){
        return callback(new Error('密码不能为空'))
      }else if(value.length<6){
        return callback(new Error('密码长度不能少于六位'))
      }else{
        callback()
      }
    }
    var validateRePass = (rule,value,callback)=>{
      if(!value){
        return callback(new Error('确认密码不能为空'))
      }else if(value !=this.pwdform.password){
        return callback(new Error('两次输入的密码不一致，请重新输入'))
      }else{
        return callback()
      }
    }
    return {
      pwdform:{
        password:'',
        rePassword:''
      },
      rule:{
        password:[
          {required:true,trigger:'blur',validator:validatePass}
        ],
        rePassword:[
          {required:true,trigger:'blur',validator:validateRePass}
        ]
      }
    };
  },

  mounted() {
    
  },

  methods: {
    submitForm(formName){
      this.$refs[formName].validate(valid=>{
        if(valid){
          alert('提交修改操作')
        }else{
          console.log('error sumbit')
          return false
        }
      })
    },
    resetForm(formName){
      this.$refs[formName].resetFields()
      alert('重置操作提交')
    }
  },
};
</script>
<style lang="scss" scoped>
.account-container{
  /* margin-top: 100px; */
  width: 400px;
  min-height: 400px;
  // position: relative;
  margin: 0 auto;
  .title{
    position: absolute;
    left: 0;
    top: 0;
    span{
      margin-left: 5px;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .el-form{
    position: relative;
    top: 100px;
    padding-top: 20px;
    border: 1px dotted #ccc;
    ::v-deep .el-form-item__label{
      text-align-last: justify;
    }
  }

}

.el-button{
  margin-left: 20px !important;
}
</style>