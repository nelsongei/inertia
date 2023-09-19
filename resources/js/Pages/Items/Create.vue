<template>
    <Head>
        <title>Create Item</title>
    </Head>
    <div class="flex-1 p-4 md:p-8 flex flex-col">
        <div class="flex flex-wrap justify-between">
            <div><h3 class="text-2xl font-bold text-left text-black">New Item</h3>
                <nav>
                    <ol class="flex flex-wrap py-4 text-gray-900 rounded list-reset">
                        <li class="pr-2 text-sm">
                            <NavLink href="/admin/items/dashboard"
                                     class="m-0 mr-2 text-sm font-medium leading-5 text-gray-900 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400">
                                Home
                            </NavLink>
                            <span
                                class="px-1">/</span></li>
                        <li class="pr-2 text-sm">
                            <NavLink href="/admin/items"
                                     class="m-0 mr-2 text-sm font-medium leading-5 text-gray-900 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400">
                                Items
                            </NavLink>
                            <span
                                class="px-1">/</span></li>
                        <li class="pr-2 text-sm">
                            <NavLink aria-current="page" href="/admin/items/create#"
                                     class="active router-link-exact-active m-0 mr-2 text-sm font-medium leading-5 text-gray-900 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400">
                                New
                                Item
                            </NavLink><!----></li>
                    </ol>
                </nav>
            </div>
            <div class="flex items-center"></div>
        </div>
        <form class="grid lg:grid-cols-2 mt-6" action="submit">
            <div class="bg-white rounded-lg shadow relative w-full"><!---->
                <div class="px-4 py-5 sm:px-8 sm:py-8">
                    <div class="grid gap-y-6 gap-x-4 grid-cols-1">
                        <div class="relative w-full text-left"><label
                            class="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between">
                            Name</label>
                            <div class="flex flex-col mt-1">
                                <div class="relative rounded-md shadow-sm font-base"><!----><!----><!----><input
                                    type="text"
                                    class="border border-gray-400 p-2 w-full rounded-lg font-base block w-full sm:text-sm border-gray-200 rounded-md text-black focus:ring-primary-400 focus:border-primary-400">
                                </div>
                            </div>
                        </div>
                        <div class="relative w-full text-left"><label
                            class="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between">
                            <div>Price</div>
                        </label>
                            <div class="flex flex-col mt-1">
                                <input type="tel" id="0"
                                       class="border border-gray-400 p-2 w-full rounded-lg font-base block w-full sm:text-sm border-gray-200 rounded-md text-black focus:ring-primary-400 focus:border-primary-400 v-money3">
                            </div>
                        </div>
                        <div class="relative w-full text-left"><label
                            class="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between">
                            <div>Unit <span class="text-sm text-red-500" style="display: none;"> * </span></div><!---->
                            <!----></label>
                            <div class="flex flex-col mt-1">
                                <div tabindex="-1"
                                     class="p-0 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-200 rounded-md bg-white text-sm leading-snug outline-none max-h-10">
                                    <input type="text"
                                           class="w-full absolute inset-0 outline-none appearance-none box-border border-0 text-sm font-sans bg-white rounded-md pl-3.5">
                                    <!----><!----><!---->
                                    <div
                                        class="flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400 text-sm">
                                        select unit
                                    </div><!----><!----><span
                                    class="bg-multiselect-caret bg-center bg-no-repeat w-5 h-5 py-px box-content z-5 relative mr-1 opacity-40 shrink-0 grow-0 transition-transform"></span>
                                    <div
                                        class="max-h-60 shadow-lg absolute -left-px -right-px -bottom-1 translate-y-full border border-gray-300 mt-1 overflow-y-auto z-50 bg-white flex flex-col rounded-md hidden"
                                        tabindex="-1">
                                        <div class="w-full overflow-y-auto">
                                            <ul class="flex flex-col p-0 m-0 list-none">
                                                <li  class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>box</span></li >
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>cm</span></li>
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>dz</span></li>
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>ft</span></li>
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>g</span></li>
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>in</span></li>
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>kg</span></li>
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>km</span></li>
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>lb</span></li>
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>mg</span></li>
                                                <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                    <span>pc</span></li>
                                            </ul><!----><!----></div>
                                        <div
                                            class="flex items-center justify-center w-full px-6 py-2 text-sm bg-gray-200 cursor-pointer text-primary-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke="currentColor"
                                                 class="h-5 w-5 h-4 mr-2 -ml-2 text-center text-primary-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M12 4v16m8-8H4"></path>
                                            </svg>
                                            Add Item Unit
                                        </div>
                                    </div><!----><!---->
                                    <div class="h-9 py-px box-content"></div>
                                </div><!----><!----></div>
                        </div><!---->
                        <div class="relative w-full text-left"><label
                            class="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between">
                            <div>Description</div>
                        </label>
                            <div class="flex flex-col mt-1">
                                <textarea name="description" rows="2"
                                          class="border border-gray-400 p-2 w-full rounded-lg box-border w-full px-3 py-2 text-sm not-italic font-normal leading-snug text-left text-black placeholder-gray-400 bg-white border border-gray-200 border-solid rounded outline-none focus:ring-blue-400 focus:border-blue-400"></textarea>
                            </div>
                        </div>
                        <div>
                            <button
                                class="inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm leading-5 rounded-md border-transparent shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                                type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" class="h-5 w-5 -ml-1 mr-2 h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                                </svg>
                                Save Item
                            </button>
                        </div>
                    </div>
                </div><!----></div>
        </form>
    </div>
</template>

<script setup>
import {useForm} from "@inertiajs/inertia-vue3";
import NavLink from "../../Shared/NavLink";
defineProps({
    units: Object,
});

let form = useForm({});
</script>

<style scoped>

</style>
