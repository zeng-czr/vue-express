<template>
  <div class="container">
    <div class="header-container">
      <el-button type="primary">添加</el-button>
      <el-button type="primary">导出EXCEL</el-button>
      <el-button type="primary">导入EXCEL</el-button>
    </div>
    <div class="main-container">
      <el-table
        :data="userList"
        stripe
        style="width: 100%"
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="username"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码">
        </el-table-column>
        <el-table-column
          prop="role"
          label="角色">
        </el-table-column>
        <el-table-column
          label="操作">
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getAllUser } from '../../api/user';
export default {
  name: 'dashboard',

  data() {
    return {
      userList:[]
    };
  },

  mounted() {
    this.ceshi()
  },

  methods: {
    async ceshi(){
      await getAllUser().then(res=>{
        console.log(res)
        this.userList = res
        console.log(this.userList)
      })
      
    }
  },
};
</script>
<style lang="scss" scoped>
// .container{
//   position: relative;
//   .header-container{
//     z-index: 2;
//     position:absolute;
//     right: 28px;
//   }
//   .main-container{
//     padding-top: 50px;
//   }
// }

</style>