import transformAssets from "quasar/dist/transforms/loader-asset-urls.json"
import { version } from "quasar/package.json"
import { ComponentResolver } from "unplugin-vue-components"
import AutoComponentImport from "unplugin-vue-components/vite"
import { normalizePath } from "vite"
const defaultOptions = {
    runMode: "web-client",
    autoImportComponentCase: "kebab",
    sassVariables: true,
}

const transformAssetUrls = transformAssets as any

function autoImportComponents() {
    return AutoComponentImport({
        // Stop From Auto-Loading Developer Components.
        dirs: [],
        dts: false,
        resolvers: [QuasarResolver()],
    })
}

function quasarSassPlugin(userOpts = {}) {
    const opts = {
        ...defaultOptions,
        ...userOpts,
    }

    return {
        name: "vite:quasar",

        config(cfg) {
            const vueCfg = cfg.plugins.find(entry => entry.name === "vite:vue")

            if (vueCfg === void 0) {
                console.warn(
                    "In your Vite config file, please add the Quasar plugin after the Vue one",
                )
                process.exit(1)
            }

            return getConfig(opts)
        },
    }
}

function getConfig({ runMode, sassVariables }) {
    const viteCfg = {
        css: null,
        define: {
            __QUASAR_VERSION__: `'${version}'`,
            __QUASAR_SSR__: false,
            __QUASAR_SSR_SERVER__: false,
            __QUASAR_SSR_CLIENT__: false,
            __QUASAR_SSR_PWA__: false,
        },
    }

    if (runMode === "ssr-client") {
        Object.assign(viteCfg.define, {
            __QUASAR_SSR__: true,
            __QUASAR_SSR_CLIENT__: true,
        })
    } else if (runMode === "ssr-server") {
        Object.assign(viteCfg.define, {
            __QUASAR_SSR__: true,
            __QUASAR_SSR_SERVER__: true,
        })
    }

    if (sassVariables) {
        const sassImportCode = [`@import 'quasar/src/css/variables.sass'`, ""]

        if (typeof sassVariables === "string") {
            sassImportCode.unshift(`@import '${normalizePath(sassVariables)}'`)
        }

        viteCfg.css = {
            preprocessorOptions: {
                sass: { additionalData: sassImportCode.join("\n") },
                scss: { additionalData: sassImportCode.join(";\n") },
            },
        }
    }

    return viteCfg
}

function QuasarResolver(): ComponentResolver {
    let components = require("quasar/dist/transforms/api-list.json")
    return {
        type: "component",
        resolve: (name: string) => {
            if (components.includes(name))
                return { importName: name, path: "quasar" }
        },
    }
}

export { quasarSassPlugin, autoImportComponents, transformAssetUrls }
