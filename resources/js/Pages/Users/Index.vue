<template>
    <Head>
        <title>Users</title>
    </Head>
    <div class="flex justify-between mb-6">
        <div class="flex items-center">
            <h1 class="text-3xl">Users</h1>
            <Link v-if="can.createUser" href="/users/create" class="text-blue-500 text-sm ml-2">New User</Link>
        </div>
        <input v-model="search" type="text" placeholder="Search..." class="border px-2 rounded-lg">
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="user in users.data" :key="user.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">{{ user.firstname+' '+user.lastname }}</div>
                                        <div class="text-sm text-gray-500">{{user.email}}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                                <div class="text-sm text-gray-500">Optimization</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                            <td v-if="user.can.edit" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Link :href="`/users/${user.id}+/edit`" class="text-indigo-600 hover:text-indigo-900">
                                    Edit
                                </Link>
                            </td>
                        </tr>

                        <!-- More people... -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <Pagination :links="users.links" class="mt-6"/>
</template>

<script setup>
import Pagination from "../../Shared/Pagination";
import {ref,watch} from "vue";
import {Inertia} from "@inertiajs/inertia";
import debounce from "lodash/debounce";

let  props = defineProps({
    users: Object,
    filters: Object,
    can: Object,
});

let search = ref(props.filters.search);
watch(search,debounce(function (value){
    console.log('Triggered');
    Inertia.get('/users',{search: value},{
        preserveState: true,
        replace: true
    });
},500));
</script>

<style scoped>

</style>
