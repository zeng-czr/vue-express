import router from '@/router/index.js'
// import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth.js'
import store from '@/store'
NProgress.configure({ showSpinner: false })
// 白名单--所有权限均可访问的页面--登录和注册
const whiteList = ['/login', '/register']
router.beforeEach(async (to, from, next) => {
  /* must call `next` */
  NProgress.start()
  const token = getToken()
  console.log(token)
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    }
    else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      console.log(hasRoles)
      if (hasRoles) {
        next()
      }
      else {
        console.log("router permission执行了")
        const data = await store.dispatch('user/getInfo')
        const roles = data.role
        const accessedRoutes = await store.dispatch('permission/generateRoutes', roles)
        console.log(accessedRoutes)

        router.addRoutes(accessedRoutes)
        next({ ...to, replace: true })
      }
    }
    // const roles = store.getters['user', 'roles
    // resetRouter()
    // console.log(router)
  }
  else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    }
    else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
});
router.afterEach(() => {
  NProgress.done()
})