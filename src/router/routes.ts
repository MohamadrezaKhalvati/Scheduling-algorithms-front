import { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "",
    redirect: "/main"
  }, {
    path: "/main",
    component: () => import("src/layouts/home.vue")
  }
]


export default routes
