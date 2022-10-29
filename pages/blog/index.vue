<template>
    <main class="prose code pre text headings anchor mx-auto">
        <ContentDoc />
    </main>
</template>
<style scoped>
.code {
    @apply prose-code:font-mono prose-code:text-gray-700 prose-code:font-medium prose-code:bg-gray-200/80 dark:prose-code:bg-slate-800 dark:prose-code:text-gray-100 prose-code:py-1 prose-code:px-2 prose-code:rounded-md prose-code:before:hidden prose-code:after:hidden prose-code:prose-pre:bg-none prose-code:prose-pre:p-0 prose-code:prose-pre:font-normal;
}
.pre {
    @apply dark:prose-pre:bg-slate-900 prose-pre:my-3 prose-pre:font-mono prose-pre:px-4 prose-pre:py-2 prose-pre:rounded-xl prose-pre:text-sm prose-pre:leading-loose prose-pre:bg-slate-700 prose-pre:overflow-x-auto;
}
.text {
    @apply prose-p:m-0  leading-relaxed text-gray-800 dark:text-gray-300;
}
.headings {
    @apply prose-headings:my-1.5 dark:prose-headings:text-gray-300;
}
.anchor {
    @apply prose-a:no-underline hover:prose-a:border-b hover:prose-a:border-dashed dark:prose-a:text-gray-300
}
</style>