import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'//浏览器重置样式
// import './styles/element-variables.scss'

// 引入剪切插件
Vue.use(window['vue-cropper'].default)
import './icons' // icon
import './style/index.scss'//style
import './router/permission'
// 导入指令
import Directives from '@/directive'
Vue.use(Directives)

Vue.config.productionTip = false


Vue.use(Element);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
