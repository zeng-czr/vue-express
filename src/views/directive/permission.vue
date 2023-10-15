<template>
  <div>
    <span style=" display: inline-block; font-size: 18px;margin-bottom: 10px;">上方时全部按钮，下方是具有该权限才显示的按钮</span>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button> 
    </div>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary" v-permission="1">拥有权限</el-button>
      <el-button type="success" v-permission="2">拥有权限</el-button>
      <el-button type="info" v-permission="5">暂无权限</el-button>
      <el-button type="warning" v-permission="6">暂无权限</el-button>
      <el-button type="danger" v-permission="7">暂无权限</el-button>
    </div>
    <div>
      <span>权限判断的本质就是,通过遍历角色数组,看是否可以找到当前用户的角色是否在数组内</span>
      <span>如果不在数组内的话,就将当前dom节点移除掉</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueExpressPermission',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style>
.el-button{
  margin-bottom: 10px;
}
</style>