<template>
    <Head>
        <title>Edit {{customer.firstname}}</title>
    </Head>
    <div class="flex flex-wrap justify-between">
        <div><h3 class="text-2xl font-bold text-left text-black"></h3></div>
        <div class="flex items-center"><NavLink href="/admin/customers/1/edit" class="">
            <button
                class="inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm leading-5 rounded-md border-transparent  border-solid border-primary-500 font-normal transition ease-in-out duration-150 text-primary-500 hover:bg-primary-200 shadow-inner focus:ring-primary-500 mr-3">
                Edit
            </button>
        </NavLink>
            <div class="relative inline-block h-full text-left">
                <button id="headlessui-menu-button-19" type="button" aria-haspopup="true" aria-expanded="false"
                        class="focus:outline-none">
                    <button
                        class="inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm leading-5 rounded-md border-transparent shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 mr-3">
                        New Transaction
                    </button>
                </button>
                <div class="z-10 w-56"
                     style="position: fixed; inset: 0px auto auto 0px; margin: 0px; transform: translate(2238px, 144px);"
                     data-popper-placement="bottom-end"><!----></div>
            </div>
            <div class="relative inline-block h-full text-left">
                <button id="headlessui-menu-button-21" type="button" aria-haspopup="true" aria-expanded="false"
                        class="focus:outline-none">
                    <button
                        class="inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm leading-5 rounded-md border-transparent shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             class="h-5 w-5 h-5 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </button>
                </button>
                <div class="z-10 w-56"
                     style="position: fixed; inset: 0px auto auto 0px; margin: 0px; transform: translate(2292px, 144px);"
                     data-popper-placement="bottom-end"><!----></div>
            </div>
        </div>
    </div>
    <div class="bg-white rounded-lg shadow relative flex flex-col mt-6">
        <div class="px-4 py-5 sm:px-8 sm:py-8">
            <div class="grid grid-cols-12">
                <div class="col-span-12 xl:col-span-9 xxl:col-span-10">
                    <div class="flex justify-between mt-1 mb-6">
                        <h6 class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor"
                                 class="h-5 w-5 h-5 text-primary-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            Sales &amp; Expenses
                        </h6>
                        <div class="w-40 h-10">
                            <div tabindex="0"
                                 class="p-0 relative mx-auto w-full flex items-center justify-end box-border cursor-pointer border border-gray-200 rounded-md bg-white text-sm leading-snug outline-none max-h-10"
                                 allow-empty="false" show-labels="false"><!----><!---->
                                <div
                                    class="flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5">
                                    This year
                                </div><!----><!----><!----><!----><span
                                    class="bg-multiselect-caret bg-center bg-no-repeat w-5 h-5 py-px box-content z-5 relative mr-1 opacity-40 shrink-0 grow-0 transition-transform"></span>
                                <div
                                    class="max-h-60 shadow-lg absolute -left-px -right-px -bottom-1 translate-y-full border border-gray-300 mt-1 overflow-y-auto z-50 bg-white flex flex-col rounded-md hidden"
                                    tabindex="-1">
                                    <div class="w-full overflow-y-auto">
                                        <ul class="flex flex-col p-0 m-0 list-none">
                                            <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3 text-white bg-primary-500">
                                                <span>This year</span></li>
                                            <li class="flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3">
                                                <span>Previous year</span></li>
                                        </ul><!----><!----></div>
                                </div><!----><!---->
                                <div class="h-9 py-px box-content"></div>
                            </div>
                        </div>
                    </div>
                    <div class="graph-container h-[300px] sm:w-full">
                        <div class="chartjs-size-monitor">
                            <div class="chartjs-size-monitor-expand">
                                <div class=""></div>
                            </div>
                            <div class="chartjs-size-monitor-shrink">
                                <div class=""></div>
                            </div>
                        </div>
                        <apexchart :width="chart.width" :height="chart.height" :type="chart.type"
                                   :options="chart.options"
                                   :series="chart.series"></apexchart>
                    </div>
                </div>
                <div
                    class="grid col-span-12 mt-6 text-center xl:mt-0 sm:grid-cols-4 xl:text-right xl:col-span-3 xl:grid-cols-1 xxl:col-span-2">
                    <div class="px-6 py-2"><span class="text-xs leading-5 lg:text-sm">Sales</span><br><span
                        class="block mt-1 text-xl font-semibold leading-8"><span style="font-family: sans-serif;">$ 23,200.00</span></span>
                    </div>
                    <div class="px-6 py-2"><span class="text-xs leading-5 lg:text-sm">Receipts</span><br><span
                        class="block mt-1 text-xl font-semibold leading-8" style="color: rgb(0, 201, 156);"><span
                        style="font-family: sans-serif;">$ 0.00</span></span></div>
                    <div class="px-6 py-2"><span class="text-xs leading-5 lg:text-sm">Expenses</span><br><span
                        class="block mt-1 text-xl font-semibold leading-8" style="color: rgb(251, 113, 120);"><span
                        style="font-family: sans-serif;">$ 0.00</span></span></div>
                    <div class="px-6 py-2"><span class="text-xs leading-5 lg:text-sm">Net Income</span><br><span
                        class="block mt-1 text-xl font-semibold leading-8" style="color: rgb(88, 81, 216);"><span
                        style="font-family: sans-serif;">$ 0.00</span></span></div>
                </div>
            </div>
            <div class="pt-6 mt-5 border-t border-solid lg:pt-8 md:pt-4 border-gray-200"><h6
                class="text-gray-500 uppercase text-base">Basic Info</h6>
                <div class="grid gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <div><label class="text-sm not-italic font-medium leading-5 text-primary-800 font-normal mb-1">Display
                            Name</label>
                            <p class="text-sm font-bold leading-5 text-black non-italic">
                                {{ customer.firstname + ' ' + customer.lastname }} </p></div>
                    </div>
                    <div>
                        <div><label class="text-sm not-italic font-medium leading-5 text-primary-800 font-normal mb-1">Primary
                            Contact Name</label>
                            <p class="text-sm font-bold leading-5 text-black non-italic">{{ customer.firstname }} </p>
                        </div>
                    </div>
                    <div>
                        <div><label
                            class="text-sm not-italic font-medium leading-5 text-primary-800 font-normal mb-1">Email</label>
                            <p class="text-sm font-bold leading-5 text-black non-italic">{{ customer.email }} </p>
                        </div>
                    </div>
                </div>
                <div class="grid gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 mt-5">
                    <div>
                        <div><label class="text-sm not-italic font-medium leading-5 text-primary-800 font-normal mb-1">Currency</label>
                            <p class="text-sm font-bold leading-5 text-black non-italic">USD ($) </p></div>
                    </div>
                    <div>
                        <div><label class="text-sm not-italic font-medium leading-5 text-primary-800 font-normal mb-1">Phone
                            Number</label>
                            <p class="text-sm font-bold leading-5 text-black non-italic"></p></div>
                    </div>
                    <div>
                        <div><label class="text-sm not-italic font-medium leading-5 text-primary-800 font-normal mb-1">Website</label>
                            <p class="text-sm font-bold leading-5 text-black non-italic"></p></div>
                    </div>
                </div><!---->
                <div class="grid gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 mt-5"></div><!---->
                <div class="grid gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 mt-5"></div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
        <div class="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
            <div class="flex flex-col space-y-6 md:h-full md:justify-between">
                <div class="flex justify-between">
                            <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Main Account
                            </span>
                    <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Available Funds
                            </span>
                </div>
                <div class="w-full overflow-auto pl-10">
                    <apexchart :width="chart.width" :height="chart.height" :type="chart.type" :options="chart.options"
                               :series="chart.series"></apexchart>
                </div>
            </div>
        </div>
        <div
            class="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-white-500 to-white-800 flex flex-col justify-between">
            <apexchart :width="transaction.width" :height="transaction.height" :type="transaction.type"
                       :options="transaction.options" :series="transaction.series"></apexchart>
        </div>

    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">
        <div class="col-start-1 col-end-5">
            <h2 class="text-xs md:text-sm text-gray-800 font-bold tracking-wide">Summary Transactions</h2>
        </div>
        <div class="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex justify-between items-center">
                <div class="p-4 cursor-pointer border">
                    <span class="text-xs text-gray-500 font-semibold">Daily</span>
                    <h2 class="text-gray-800 font-bold tracking-wider">$ 27.80</h2>
                </div>
                <div class="p-4 cursor-pointer border">
                    <span class="text-xs text-gray-500 font-semibold">Weekly</span>
                    <h2 class="text-gray-800 font-bold tracking-wider">$ 192.92</h2>
                </div>
                <div class="p-4 cursor-pointer border">
                    <span class="text-xs text-gray-500 font-semibold">Monthly</span>
                    <h2 class="text-gray-800 font-bold tracking-wider">$ 501.10</h2>
                </div>
            </div>
            <div class="w-full overflow-auto pl-10">
                <apexchart :width="chart.width" :height="chart.height" :type="chart.type" :options="chart.options"
                           :series="chart.series"></apexchart>
            </div>
        </div>
        <div class="col-span-2 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
            <div class="flex justify-between items-center">
                <h2 class="text-sm text-gray-600 font-bold tracking-wide">Latest Transactions</h2>
                <a href="#"
                   class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">More</a>
            </div>
            <apexchart :width="transaction.width" :height="transaction.height" :type="transaction.type"
                       :options="transaction.options" :series="transaction.series"></apexchart>
        </div>
    </div>
</template>

<script>
import CustomerLayout from "../../Shared/CustomerLayout";
import Layout from "../../Shared/Layout";
import NavLink from "../../Shared/NavLink";

export default {
    components: {NavLink},
    layout: (h, page) => {
        return h(Layout, [
            h(CustomerLayout, [page])
        ])
    },
    props: {
        chart: Object,
        transaction: Object,
        customer: Object
    }
}
</script>

<style scoped>

</style>
