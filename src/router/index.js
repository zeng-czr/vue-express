import Vue from "vue";
import Router from "vue-router"
import Layout from '@/layout/index.vue'
Vue.use(Router)
export const constantRouters = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/aboutme/index.vue'),
        name: 'AboutMe',
        meta: { title: 'AboutMe', icon: 'user', noCache: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'Excel',
      icon: 'excel',
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/export-excel.vue'),
        name: 'ExportExcel',
        meta: { title: 'Export Excel', roles: ['editor'] }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel.vue'),
        name: 'SelectExcel',
        meta: { title: 'Export Selected' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/merge-header.vue'),
        name: 'MergeHeader',
        meta: { title: 'Merge Header', roles: ['visitor'] }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel.vue'),
        name: 'UploadExcel',
        meta: { title: 'Upload Excel' }
      }
    ]
  },
  {
    path: '/directive',
    component: Layout,
    redirect: '/directive/copy',
    name: 'Copy',
    alwayShow: true,
    meta: { title: 'Directive', icon: 'clipboard' },
    children: [
      {
        path: 'copy',
        component: () => import('@/views/directive/copy.vue'),
        name: 'copy',
        meta: { title: 'copy' }
      },
      {
        path: 'debounce',
        component: () => import('@/views/directive/debounce.vue'),
        name: 'debounce',
        meta: { title: 'debounce' }
      },
      {
        path: 'permission',
        component: () => import('@/views/directive/permission.vue'),
        name: 'permission',
        meta: { title: 'permission' }
      }
    ]
  },

  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'PDF', icon: 'pdf' }
  //     }
  //   ]
  // }
]
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouters
})
const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
export default router