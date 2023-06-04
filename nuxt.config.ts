// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
    ],
    nitro: {
        devProxy: {
            '/api': {
                target: 'http://localhost:3001',
                prependPath: true,
                changeOrigin: true,
            },
        }
    }

})