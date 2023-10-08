<template>
  <div class="message-container">
    <div class="title">
      <i class="el-icon-info"></i>
      <span>管理系统信息日志</span>
    </div>
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item" alt="" style="width: 80%; height: 100%;">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="btn">
        <i class="el-icon-plus" @click="addDialog = true"></i>
        <i class="el-icon-delete"></i>
        <!-- <el-button type="success">添加</el-button> -->
        <!-- <el-button type="danger">删除</el-button> -->
    </div>
    <div class="toDone">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        height="330px"
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}"
        :show-header="true"
        >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="m_id"
          label="信息序号"
          width="120px">
        </el-table-column>
        <el-table-column
          prop="data"
          label="日期"
          width="120px">
          <template slot-scope="scope">
            <span>{{ scope.row.data.slice(0,10) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="content"
          label="任务"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="操作"
          width="180px">
          <template slot-scope="scope">
            <i class="el-icon-edit" style="font-size: 18px;margin-right: 10px; cursor: pointer;"></i>
            <!-- <el-button type="primary">修改</el-button> -->
            <el-popover
              :ref="`popover-${scope.row.m_id}`"
              placement="top"
              width="160">
              <p>确定要删除这条信息吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="cancal()">取消</el-button>
                <el-button type="primary" size="mini" @click="deleteMessage(scope.row.m_id)">确定</el-button>
              </div>
              <i class="el-icon-delete" slot="reference" style="font-size: 18px;cursor: pointer;"></i>
            </el-popover>
            <!-- <el-button type="danger">删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="添加信息"
      :visible.sync="addDialog"
      :close-on-click-modal="false"
      :show-close="false"
      width="30%"
      >
      <span style=" display: block; margin-bottom: 5px;">请输入要记录的信息</span>
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addMessage">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// ,update
import {getAll,add,deleteOne} from '@/api/message.js'
export default {
  name: 'message',

  data() {
    return {
      selectIndex:'',
      addDialog:false,
      textarea:'',
      tableData:[],
      imgList:[
        "https://t7.baidu.com/it/u=3880073250,1266855579&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=88872022,4285819393&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=595446146,2444232797&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=2840372514,227203520&fm=193&f=GIF",
        "https://t7.baidu.com/it/u=2117998124,2881620724&fm=193&f=GIF"
      ]
    };
  },

  mounted() {
    this.getMessage()
  },

  methods: {
    // 获取信息
    getMessage(){
      getAll().then(res=>{
        console.log(res)
        this.tableData = res
      })
    },
    // 添加信息
    addMessage(){
      let data = {
        data:new Date().toISOString().slice(0,10),
        content:this.textarea
      }
      console.log(data)
      add(data).then(res=>{
        console.log(res.msg)
      })
      this.getMessage()
      this.addDialog = false
    },
    deleteMessage(id){
      console.log(id)
      document.body.click()
    },
    cancal(){
      document.body.click()
    }
  },
};
</script>
<style lang="scss" scoped>
.message-container{
    // position: absolute;
  .title{
    span{
      margin-left: 5px;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .carousel{
    text-align: center;
  }
  .btn{
    position: relative;
    left: calc(100% - 120px);
    .el-icon-plus{
      cursor: pointer;
      font-size: 25px;
      margin-right: 10px;
    }
    .el-icon-delete{
      cursor: pointer;
      font-size: 23px;
    }
  }
  .toDone{
    .el-table{
      ::v-deep .el-table__body-wrapper::-webkit-scrollbar{
        width: 0;
      }
    }
  }

}
</style>