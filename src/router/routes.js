const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/anchor', name: 'anchor', component: () => import('pages/AnchorItem.vue') },
      { path: '/loading', name: 'loading', component: () => import('pages/LoadingPage.vue') }
    ]
  },
  // { path: '/anchor', name: 'anchor', component: () => import('pages/AnchorItem.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
