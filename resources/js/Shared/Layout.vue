<template>
    <Head >
        <title>My App</title>
        <meta type="description" content="Information about my app." head-key="description">
    </Head>
    <nav class="p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto">
        <div class="hidden lg:flex lg:justify-between lg:items-center">
            <a href="#" class="flex items-start gap-2 group">
                <div class="bg-blue-600 text-white p-2 rounded-md group-hover:bg-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <p class="text-sm font-light uppercase">
                    Invoice
                    <span class="text-base block font-bold tracking-widest">
                        App
                    </span>
                </p>
            </a>
            <Nav/>
            <notification :toast="$page.props.toast" :popstate="$page.props.popstate" />
        </div>
    </nav>
    <main class="container mx-w-6xl mx-auto py-4">
        <div class="flex flex-col space-y-8">
            <slot/>
        </div>
    </main>
</template>

<script>
import Nav from "./Nav";
import {Head} from '@inertiajs/inertia-vue3'
import Notification from './Notification'

export default {
    components: {Nav,Head,Notification},
    computed: {
        username() {
            return this.$page.props.auth.user.username;
        },
        toast(){
            return this.$page.props.toast;
        }
    },
}
</script>

<style scoped>

</style>
