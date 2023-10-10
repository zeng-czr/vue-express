<template>
  <div class="upload-container">
    <div class="uploadExcel">
      <span>用的拖拽实现的文件上传功能：每次只能上传一个文件，文件的大小不能超过一兆</span>
      <upload-excel :on-success="handleSuccess" :before-upload="beforeUpload"></upload-excel>
    </div>
    <div class="showData">
      <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
      </el-table>
    </div>
  </div>
</template>

<script>
import UploadExcel from '@/components/uploadExcel/index.vue'
export default {
  name: 'uploadexcel',

  data() {
    return {
      tableData:[],//表数据
      tableHeader:[],//表头
    };
  },
  components:{
    UploadExcel
  },
  mounted() {
    
  },

  methods: {
    // 上传前文件大小校验
    beforeUpload(file){
      const isOneM = file.size / 1024 / 1024 < 1
      if(isOneM){
        return true
      }
      this.$message.warning("please do not upload more than 1mb of file")
      return false
    },
    handleSuccess({results,header}){
      this.tableData =  results
      this.tableHeader = header
    }
  },
};
</script>
<style lang="scss" scoped>
.upload-container{
  .uploadExcel{
    span{
      display: block;
      font-size: 18px;
      margin-bottom: 20px;
    }
    .upload-demo{
      text-align: center;
      margin: 0 auto;
    }
  }
}
</style>