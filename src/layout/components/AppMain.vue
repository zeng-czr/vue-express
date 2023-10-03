<template>
  <div class="app-main">
    <!-- 二级路由入口 -->
    <router-view :key="key"/>
  </div>
</template>

<script>
export default {
  name: 'appMain',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },
  computed:{
    key(){
      return this.$route.path
    }
  },
  methods: {
    
  },
};
</script>