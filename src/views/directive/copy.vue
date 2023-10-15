<template>
  <div> 
    <span class="title">复制粘贴页面</span>
    <div class="container">
      <el-input v-model="message" placeholder="请输入内容" style="width: 300px; margin-right: 20px;"></el-input>
      <el-button type="primary" v-copy="message">复制</el-button>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'copy',

  data() {
    return {
      message:'将会被复制的东西'
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
.title{
  display: inline-block;
  padding-bottom: 20px;
}
.container{
  display: flex;
}
</style>