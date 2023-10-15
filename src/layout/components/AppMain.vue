<template>
    <div class="app-main">
      <transition name="fade-transform" mode="out-in">
        <!-- 二级路由入口 -->
        <router-view :key="key"/>
      </transition>
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
<style>
.app-main {
  overflow: hidden;
}
</style>