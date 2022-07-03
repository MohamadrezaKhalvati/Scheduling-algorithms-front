import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'
import { ManifestOptions, VitePWA } from "vite-plugin-pwa"
import tsconfigPaths from 'vite-tsconfig-paths'
import rtlPostCss from './plugins/postcss-rtl'
import { autoImportComponents, quasarSassPlugin, transformAssetUrls } from './plugins/quasar-loader'

const manualChunks = ["quasar"]

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const foundChunk = manualChunks.find(item => id.includes(item))
            if (foundChunk) return foundChunk
            return "vendor"
          }
        },
      }
    }
  },
  plugins: [
    tsconfigPaths(),

    vue({
      template: { transformAssetUrls }
    }),

    rtlPostCss(),

    autoImportComponents(),

    quasarSassPlugin({
      sassVariables: 'src/css/quasar-variables.scss',
    }),

    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Shanks Reborn',
        short_name: 'Shanks Reborn',
        description: 'Shanks Organization Application.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ],
      } as Partial<ManifestOptions>
    }),

    // visualizer({
    //   brotliSize: true,
    //   gzipSize: true,
    //   filename: "./dist/stats.html"
    // }),

    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 70,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
})

