import { defineConfig } from "vite"
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
import { PrimeVueResolver } from "unplugin-vue-components/resolvers"
import AutoImport from "unplugin-auto-import/vite"
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/subaryaweb.github.io/",
  plugins: [
    vue(),
    Components({
        resolvers: [
            IconsResolver({
                prefix: "i",
            }),
            PrimeVueResolver(),
            
        ],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    Icons({ autoInstall: true }),
    AutoImport({ 
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        // presets
        "vue",
        "vue-router",
      ],
      eslintrc: {
				enabled: false, // Default `false`
				filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			},
    }),
    WindiCSS(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   port: 4000,
  //   hmr: {
  //       host: "127.0.0.1",
  //       port: 4000
  //   },
  // }
})
