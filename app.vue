<template>
    <div class="font-sans text-gray-800 dark:text-[#e4e4e7] dark:bg-[#0c0c0d] min-h-screen relative">
        <header
            class="sticky top-0 w-full z-10 p-4 bg-white/90 backdrop-blur-sm dark:bg-[#0c0c0d]/90 border-b-[0.5px] border-gray-200 dark:border-gray-800"
        >
            <div class="flex items-center justify-between">
                <svg
                    @click="sidebarOpen = true"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-gray-600 dark:text-gray-300 cursor-pointer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.8"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
                <NuxtLink
                    to="/"
                    class="flex items-center lg:hidden space-x-1 text-gray-900 dark:text-white"
                    aria-label="false"
                    data-v-38c73b55=""
                >
                    <svg class="h-5 sm:h-6" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.6009 1.34267c-.9666-1.65485-3.3832-1.65485-4.3499 0L.71619 19.3781c-.96664 1.6549.24165 3.7234 2.17494 3.7234h8.22407c-.8261-.7188-1.13199-1.9623-.5068-3.0293L18.587 6.45475l-2.9861-5.11208Z"
                            fill="#80EEC0"
                        ></path>
                        <path
                            d="M22.276 5.29879c.8-1.35398 2.7999-1.35398 3.5999 0L34.5944 20.055c.8 1.354-.2 3.0465-1.7999 3.0465h-17.437c-1.5999 0-2.6-1.6925-1.8-3.0465L22.276 5.29879Z"
                            fill="#00DC82"
                        ></path>
                    </svg>
                    <div class="font-bold text-lg -mb-1">Rido's Blog</div>
                </NuxtLink>
                <div class="flex items-center space-x-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-gray-600 dark:text-gray-300 cursor-pointer"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="10" cy="10" r="7"></circle>
                        <line x1="21" y1="21" x2="15" y2="15"></line>
                    </svg>
                    <svg
                        v-if="$colorMode.preference == 'system'"
                        @click="setColorMode('light')"
                        class="text-gray-600 dark:text-gray-300 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="3" y="4" width="18" height="12" rx="1"></rect>
                        <line x1="7" y1="20" x2="17" y2="20"></line>
                        <line x1="9" y1="16" x2="9" y2="20"></line>
                        <line x1="15" y1="16" x2="15" y2="20"></line>
                    </svg>
                    <svg
                        v-if="$colorMode.preference == 'light'"
                        @click="setColorMode('dark')"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-gray-600 dark:text-gray-300 cursor-pointer"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        <line x1="12" y1="5" x2="12" y2="5.01"></line>
                        <line x1="17" y1="7" x2="17" y2="7.01"></line>
                        <line x1="19" y1="12" x2="19" y2="12.01"></line>
                        <line x1="17" y1="17" x2="17" y2="17.01"></line>
                        <line x1="12" y1="19" x2="12" y2="19.01"></line>
                        <line x1="7" y1="17" x2="7" y2="17.01"></line>
                        <line x1="5" y1="12" x2="5" y2="12.01"></line>
                        <line x1="7" y1="7" x2="7" y2="7.01"></line>
                    </svg>

                    <svg
                        v-else-if="$colorMode.preference == 'dark'"
                        @click="setColorMode('system')"
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-gray-600 dark:text-gray-300 cursor-pointer"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                    </svg>
                </div>
            </div>
        </header>
        <!-- Sidebar Menu -->
        <div v-if="sidebarOpen" class="fixed top-0 z-10 h-screen w-full bg-black/10 backdrop-blur-sm" @click="sidebarOpen = false">
        </div>
        <div v-if="sidebarOpen" class="fixed top-0 z-10 h-screen bg-white w-10/12 py-4 px-4 overflow-y-auto">
            <div class="flex items-center justify-between mb-6">
                <svg
                    @click="sidebarOpen = false"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-gray-600 cursor-pointer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <div class="flex items-center space-x-4 text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-twitter"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
                        ></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-github"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                        ></path>
                    </svg>
                </div>
            </div>

            <div class="flex flex-col items-start space-y-3">
                <ContentNavigation v-slot="{ navigation }">
                    <div v-for="link of navigation" :key="link._path">
                        <NuxtLink @click="sidebarOpen = false" :to="link._path" class="flex items-center space-x-1.5 text-gray-500">
                            <div v-html="link.icon"></div>
                            <div>{{ link.title }}</div>
                        </NuxtLink>
                        <ul v-if="link.children && link.children.some(item => item._path !== link._path)" class="py-2">
                            <li
                                class="ml-2 border-l-[0.5px] border-gray-300 pl-4"
                                v-for="children in link.children.filter(item => item._path !== link._path)"
                            >
                                <NuxtLink @click="sidebarOpen = false" :to="children._path" class="flex items-center space-x-1.5 text-gray-500">
                                    <div v-html="children.icon"></div>
                                    <div>{{ children.title }}</div>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </ContentNavigation>
            </div>
        </div>

        <div class="container py-2">
            <NuxtPage />
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const contentQuery = queryContent()
console.log(await fetchContentNavigation());
const colorMode = useColorMode();
const sidebarOpen = ref(false);
const setColorMode = (theme) => {
    colorMode.preference = theme;
};
</script>
