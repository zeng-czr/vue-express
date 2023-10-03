<template>
  <div>
    首页
    <button @click="ceshi">测试</button>
  </div>
</template>

<script>
export default {
  name: 'dashboard',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    ceshi(){
      this.$store.dispatch('permission/generateRoutes',['editor']).then(res=>{
        console.log(res)
        console.log(this.$store.getters.permission_routes)
       
      })
    }
  },
};
</script>