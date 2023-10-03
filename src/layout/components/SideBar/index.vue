<template>
  <div>
    <template v-if="!item.children">
      <el-menu-item :index="goRoute(item.path)" v-if="!item.hidden" >
        <!-- <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon> -->
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 子组件有1个 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="goRoute(item.children[0].path)"
        v-if="!item.children[0].hidden"
      >
        <svg-icon class="svg" :icon-class="item.children[0].meta.icon" />
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多个子路由 -->
    <el-submenu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <svg-icon class="svg" :icon-class="item.meta.icon" />
        <!-- <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon> -->
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 递归展示子路由 -->
      <sidebar v-for="child in item.children"  :item="child" :key="child.path" :base-path="item.path"></sidebar>
    </el-submenu>
</div>
</template>

<script>
import path from 'path'
import {isExternal} from '@/utils/validate.js'
export default {
  name: 'sidebar',
  props: ['item','basePath'],
  data() {
    return {
      
    };
  },

  mounted() {
    
  },
  methods: {
    goRoute(routePath){
      console.log(routePath)
      // 判断链接是否为外部链接
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
  },
};
</script>
<style lang="scss" scoped>
.el-menu-item ,.el-submenu{
  .svg{
    margin-right: 10px;
  }
  
}
</style>
