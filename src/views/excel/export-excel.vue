<template>
<div class="export-container">
  <div class="export">
    <el-input type="text" placeholder="请输入导出文件名(默认为test)" v-model="excelName" />
    <el-button type="primary" @click="createExcel">export</el-button>
  </div>
  <div class="table-container">
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
import XLSX from 'xlsx'
import { getAllUser } from '../../api/user';
export default {
  name: 'exportexcel',

  data() {
    return {
      excelName:'',
      userList:[],
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
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
    },
    exportExcel(){
      // this.createExcel()
      console.log(this.excelName)
    },
    createExcel(){
      const worksheet = XLSX.utils.json_to_sheet(this.userList)
      const workbook = XLSX.utils.book_new()
      console.log(worksheet)
      // const COL_INDEX = 2
      // worksheet["!cols"].wpx = 50
      // const max_width = worksheet['!cols'].reduce((w,r)=>Math.max(w,r.name.length),10)
      const workName = this.excelName? this.excelName+'.xlsx':'test.xlsx'
      XLSX.utils.book_append_sheet(workbook,worksheet,'Sheet')
      XLSX.writeFile(workbook,workName)
    }
  },
};
</script>
<style lang="scss" scoped>
.export-container{
  .export{
    display: flex;
    justify-content: left;
    .el-input{
      width: 300px;
      margin-right: 20px;
    }
  }
}
</style>