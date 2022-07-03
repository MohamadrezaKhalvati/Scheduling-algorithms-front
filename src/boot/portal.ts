
import PortalVue from "portal-vue"
import { App } from "vue"

export const PortalPlugin = {
  install(app: App) {
    app.use(PortalVue, {
      portalName: "Portal", // default: 'portal'
      portalTargetName: "PortalTarget", // default:'portal-target'
    })
  }
}