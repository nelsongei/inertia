<template>
    <ul class="flex items-center space-x-4 text-sm font-semibold">
        <li>
            <NavLink href="/dashboard" :active="$page.component==='Dashboard/Index'"
                     class="px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200">
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink href="/customers" :active="$page.component==='Customers/Index'"
                     class="px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200">
                Customers
            </NavLink>
        </li>
        <li>
            <NavLink href="/items" :active="$page.component==='Items/Index'"
                     class="px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200">
                Items
            </NavLink>
        </li>
        <li>
            <NavLink href="/users" :active="$page.component==='Users/Index'"
                     class="px-2 xl:px-4 py-2 text-gray-800 rounded-md hover:bg-gray-200">
                Users
            </NavLink>
        </li>
    </ul>
    <ul class="flex space-x-2 xl:space-x-4 text-sm font-semibold">
        <li>
            <a href="#">
                <div class="p-2 rounded hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current text-gray-800"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>
            </a>
        </li>
        <li>
            <a href="#">
                <div class="p-2 rounded hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current text-gray-800"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>
            </a>
        </li>
        <li>
            <a href="#">
                <div class="p-2 rounded hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 stroke-current text-gray-800"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
                </div>
            </a>
        </li>
    </ul>
    <ul class="flex items-center gap-6">
        <li>
            <a href="#" class="text-sm font-sans text-gray-800 font-semibold tracking-wider">
                <p class="text-sm ml-4">Welcome Back,{{ username }} </p>
            </a>
        </li>
        <li>
            <NavLink href="/logout" method="post" title="Logout">
                <div class="p-2 rounded hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 stroke-current text-gray-800"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                </div>
            </NavLink>
        </li>
    </ul>
<!--    <Notification/>-->
</template>
<script>
import NavLink from "./NavLink";
import Notification from "./Notification"

export default {
    name: "Nav",
    components: {NavLink,Notification},
    computed: {
        username() {
            return this.$page.props.auth.user.username;
        },
        toast(){
            return this.$page.props.toast
        }
    },
}
</script>

<style scoped>

</style>
