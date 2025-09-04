import layout from "@/layout/index.vue"

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/Index.vue'),
        meta: { title: '首页' }
      },
      {
        path: 'frontend',
        name: 'frontend',
        component: () => import('@/views/frontend/Index.vue'),
        meta: { title: '前端常用' }
      },
      {
        path: 'backend',
        name: 'backend',
        component: () => import('@/views/backend/Index.vue'),
        meta: { title: '后端常用' }
      },
      {
        path: 'hot',
        name: 'hot',
        component: () => import('@/views/hot/Index.vue'),
        meta: { title: '热点排行' }
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('@/views/history/Index.vue'),
        meta: { title: '更新日志' }
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: () => import('@/views/feedback/Index.vue'),
        meta: { title: '留言反馈' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about/Index.vue'),
        meta: { title: '关于本站' }
      }
    ]
  }
]

export default routes