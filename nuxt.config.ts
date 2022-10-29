// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    ssr: false,
    target: 'static',
    nitro: {
        preset: 'service-worker'
    },
    css: ['~/assets/css/app.css'],
    content: {
        documentDriven: true,
        highlight: {
            preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'c', 'cpp'],
            // Theme used in all color schemes.
            theme: {
                // Default theme (same as single string)
                default: 'github-dark',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai'
            }
        }
    },
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
    }
})
