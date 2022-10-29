---
title: "Blog"
navigation.icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 21h8a5 5 0 0 0 5 -5v-3a3 3 0 0 0 -3 -3h-1v-2a5 5 0 0 0 -5 -5h-4a5 5 0 0 0 -5 5v8a5 5 0 0 0 5 5z"></path>
   <rect x="7" y="7" width="6" height="3" rx="1.5"></rect>
   <rect x="7" y="14" width="10" height="3" rx="1.5"></rect>
</svg>'
---
# Hello World
### Code Highlighting
Code highlighting allows you to display beautiful code blocks on your website.
Nuxt Content uses Shiki, that colors tokens with VSCode themes.
Code highlighting works both on ProseCode and `ProseCodeInline`.

example of code highlighting :point_down: 
```ts
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
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
```