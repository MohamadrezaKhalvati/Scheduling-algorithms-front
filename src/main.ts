// Import icon libraries
import { Dialog, LoadingBar, Notify, Quasar } from "quasar"
import iconSet from "quasar/icon-set/material-icons"
import langFa from "quasar/lang/fa"
import "quasar/src/css/index.sass"
import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import { PortalPlugin } from "./boot/portal"
import "./css/app.scss"
import routes from "./router/routes"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const myApp = createApp(App)

myApp.use(Quasar, {
  iconSet, // Quasar icon set
  lang: langFa,
  rtl: true,
  plugins: {
    Notify,
    Dialog,
    LoadingBar
  },
})


myApp.use(PortalPlugin)
myApp.use(router)
myApp.mount("#app")
