import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    modules: ['@nuxtjs/tailwindcss'],
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => /-/.test(tag) && tag != 'router-view'
        }
    },
})
