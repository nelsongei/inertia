<template>
    <Head>
        <title>Customers</title>
    </Head>
    <div class="flex flex-wrap justify-between">
        <div><h3 class="text-2xl font-bold text-left text-black">Customers</h3>
            <nav>
                <ol class="flex flex-wrap py-4 text-gray-900 rounded list-reset">
                    <li class="pr-2 text-sm"><NavLink href="/dashboard"
                                                class="m-0 mr-2 text-sm font-medium leading-5 text-gray-900 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400">Dashboard</NavLink><span
                        class="px-1">/</span></li>
                    <li class="pr-2 text-sm"><NavLink aria-current="page" href="/customers#"
                                                class="active router-link-exact-active m-0 mr-2 text-sm font-medium leading-5 text-gray-900 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400">Customers</NavLink>
                    </li>
                </ol>
            </nav>
        </div>
        <div class="flex items-center" v-if="customers.length >0">
            <div class="flex items-center justify-end space-x-5">
                <button
                    class="inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm leading-5 rounded-md border-transparent  border-solid border-blue-500 font-normal transition ease-in-out duration-150 text-primary-500 hover:bg-blue-200 shadow-inner focus:ring-blue-500"
                    style="">Filter
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         class="h-5 w-5 ml-2 -mr-1 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                    </svg>
                </button>
                <NavLink
                    href="customers/create"
                    class="inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm leading-5 rounded-md border-transparent shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         class="h-5 w-5 -ml-1 mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    New Customer
                </NavLink>
            </div>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" v-if="customers.length >0">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name/Email
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Phone
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Currency
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="customer in customers" :key="customer.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10 rounded-full"
                                             :src="customer.avatar"
                                             alt="">
                                    </div>
                                    <Link :href="'customers/'+customer.id+'/edit'">
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900">
                                                {{ customer.firstname + ' ' + customer.lastname }}
                                            </div>
                                            <div class="text-sm text-gray-500">{{ customer.email }}</div>
                                        </div>
                                    </Link>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ customer.phone }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ customer.currency.name }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            </td>
                        </tr>

                        <!-- More people... -->
                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <div class="flex flex-col items-center justify-center mt-16" style="">
                        <div class="flex flex-col items-center justify-center">
                            <svg width="125" height="110" viewBox="0 0 125 110" fill="#3b82f6"
                                 xmlns="http://www.w3.org/2000/svg" class="mt-5 mb-4">
                                <g clip-path="url(#clip0)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M46.8031 84.4643C46.8031 88.8034 43.3104 92.3215 39.0026 92.3215C34.6948 92.3215 31.2021 88.8034 31.2021 84.4643C31.2021 80.1252 34.6948 76.6072 39.0026 76.6072C43.3104 76.6072 46.8031 80.1252 46.8031 84.4643Z"
                                          class="fill-blue-500"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M60.4536 110H64.3539V72.6785H60.4536V110Z" class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M85.8055 76.6072H70.2045C69.1319 76.6072 68.2544 77.4911 68.2544 78.5715V82.5C68.2544 83.5804 69.1319 84.4643 70.2045 84.4643H85.8055C86.878 84.4643 87.7556 83.5804 87.7556 82.5V78.5715C87.7556 77.4911 86.878 76.6072 85.8055 76.6072ZM70.2045 82.5H85.8055V78.5715H70.2045V82.5Z"
                                          class="fill-blue-500"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M91.6556 1.96429C94.8811 1.96429 97.506 4.60821 97.506 7.85714V19.6429H83.8181L85.308 21.6071H99.4561V7.85714C99.4561 3.53571 95.9459 0 91.6556 0H33.152C28.8618 0 25.3516 3.53571 25.3516 7.85714V21.6071H39.3203L40.8745 19.6429H27.3017V7.85714C27.3017 4.60821 29.9265 1.96429 33.152 1.96429H91.6556Z"
                                          class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M122.858 92.3213H117.007C115.935 92.3213 115.057 93.2052 115.057 94.2856V102.143C115.057 103.223 115.935 104.107 117.007 104.107H122.858C123.93 104.107 124.808 103.223 124.808 102.143V94.2856C124.808 93.2052 123.93 92.3213 122.858 92.3213ZM117.007 102.143H122.858V94.2856H117.007V102.143Z"
                                          class="fill-blue-500"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M103.356 43.2142V70.7142H21.4511V43.2142H26.1821V41.2498H19.501V72.6783H105.306V41.2498H98.3541L98.2839 43.2142H103.356Z"
                                          class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M101.406 21.6071C104.632 21.6071 107.257 24.251 107.257 27.5V41.25H98.2257L98.0853 43.2142H109.207V27.5C109.207 23.1609 105.714 19.6428 101.406 19.6428H83.8182L85.0878 21.6071H101.406ZM40.8746 19.6428H23.4016C19.0937 19.6428 15.6011 23.1609 15.6011 27.5V43.2142H26.1961L26.3365 41.25H17.5512V27.5C17.5512 24.251 20.1761 21.6071 23.4016 21.6071H39.3204L40.8746 19.6428Z"
                                          class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M62.4041 9.82153C45.1709 9.82153 31.2021 23.8917 31.2021 41.2501C31.2021 58.6085 45.1709 72.6787 62.4041 72.6787C79.6373 72.6787 93.606 58.6085 93.606 41.2501C93.606 23.8917 79.6373 9.82153 62.4041 9.82153ZM62.4041 11.7858C78.5335 11.7858 91.6559 25.0035 91.6559 41.2501C91.6559 57.4967 78.5335 70.7144 62.4041 70.7144C46.2746 70.7144 33.1523 57.4967 33.1523 41.2501C33.1523 25.0035 46.2746 11.7858 62.4041 11.7858Z"
                                          class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M62.4041 19.6428C45.1709 19.6428 31.2021 23.8916 31.2021 41.25C31.2021 58.6084 45.1709 66.7857 62.4041 66.7857C79.6373 66.7857 93.606 58.6084 93.606 41.25C93.606 23.8916 79.6373 19.6428 62.4041 19.6428ZM62.4041 21.6071C82.6346 21.6071 91.6559 27.665 91.6559 41.25C91.6559 56.0096 80.7216 64.8214 62.4041 64.8214C44.0866 64.8214 33.1523 56.0096 33.1523 41.25C33.1523 27.665 42.1735 21.6071 62.4041 21.6071Z"
                                          class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M101.406 70.7144H23.4014C10.478 70.7144 0 81.2685 0 94.2858V110H124.808V94.2858C124.808 81.2685 114.33 70.7144 101.406 70.7144ZM101.406 72.6786C113.234 72.6786 122.858 82.3724 122.858 94.2858V108.036H1.95012V94.2858C1.95012 82.3724 11.574 72.6786 23.4014 72.6786H101.406Z"
                                          class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M33.152 33.3928H29.2518C27.0969 33.3928 25.3516 35.1509 25.3516 37.3214V45.1785C25.3516 47.3491 27.0969 49.1071 29.2518 49.1071H33.152V33.3928ZM31.2019 35.3571V47.1428H29.2518C28.1773 47.1428 27.3017 46.2609 27.3017 45.1785V37.3214C27.3017 36.2391 28.1773 35.3571 29.2518 35.3571H31.2019Z"
                                          class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M95.556 33.3928H91.6558V49.1071H95.556C97.7109 49.1071 99.4562 47.3491 99.4562 45.1785V37.3214C99.4562 35.1509 97.7109 33.3928 95.556 33.3928ZM95.556 35.3571C96.6305 35.3571 97.5061 36.2391 97.5061 37.3214V45.1785C97.5061 46.2609 96.6305 47.1428 95.556 47.1428H93.6059V35.3571H95.556Z"
                                          class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M94.581 15.7144C94.0447 15.7144 93.606 16.1563 93.606 16.6965V34.3751C93.606 34.9152 94.0447 35.3572 94.581 35.3572C95.1173 35.3572 95.5561 34.9152 95.5561 34.3751V16.6965C95.5561 16.1563 95.1173 15.7144 94.581 15.7144Z"
                                          class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M38.0273 41.2499C37.4891 41.2499 37.0522 40.8099 37.0522 40.2678C37.0522 33.3142 44.1409 25.5356 53.6283 25.5356C54.1665 25.5356 54.6033 25.9756 54.6033 26.5178C54.6033 27.0599 54.1665 27.4999 53.6283 27.4999C45.2564 27.4999 39.0024 34.2414 39.0024 40.2678C39.0024 40.8099 38.5655 41.2499 38.0273 41.2499Z"
                                          class="fill-blue-500"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M97.5059 110H99.456V72.6785H97.5059V110Z" class="fill-gray-600"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M25.3516 110H27.3017V72.6785H25.3516V110Z" class="fill-gray-600"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="124.808" height="110" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="mt-2"><label class="font-medium">You Have No Customers yet!</label></div>
                        <div class="mt-2"><label class="text-gray-500">This section will contain the list of customers
                            invoices.</label></div>
                        <div class="mt-6">
                            <Link
                                href="/customers/create"
                                class="inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm leading-5 rounded-md border-transparent  border-solid border-blue-500 font-normal transition ease-in-out duration-150 text-blue-500 hover:bg-blue-200 shadow-inner focus:ring-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" class="h-5 w-5 -ml-1 mr-2 h-5 w-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 4v16m8-8H4"></path>
                                </svg>
                                Add New Customer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavLink from "../../Shared/NavLink";

defineProps({
    customers: Array,
})
</script>

<style scoped>

</style>
