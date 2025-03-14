import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import unfonts from 'unplugin-fonts/vite'

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [
        vue(),
        vueDevTools(),
        unfonts({
            google: {
                families: [
                    { name: 'Manrope', styles: 'wght@200..800' }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
