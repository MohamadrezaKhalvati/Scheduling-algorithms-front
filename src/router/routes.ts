import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/main',
    },
    {
        path: '/main',
        component: () => import('src/layouts/home.vue'),
    },
]

export default routes
