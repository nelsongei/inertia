<template>
    <Head>
        <title>Create Customer</title>
    </Head>
    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <form @submit.prevent="submit" >
                        <div class="mt-10 sm:mt-0">
                            <div class="md:grid md:grid-cols-3 md:gap-6">
                                <div class="md:col-span-1">
                                    <div class="px-4 sm:px-0 ml-3 mt-3">
                                        <h3 class="text-lg font-medium leading-6 text-blue-900">Personal
                                            Information</h3>
                                        <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can
                                            receive
                                            mail.</p>
                                    </div>
                                </div>
                                <div class="mt-5 md:mt-0 md:col-span-2">
                                    <div class="shadow overflow-hidden sm:rounded-md">
                                        <div class="px-4 py-5 bg-white sm:p-6">
                                            <div class="grid grid-cols-6 gap-6">
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="firstname"
                                                           class="block text-sm font-medium text-gray-700">First
                                                        name</label>
                                                    <input v-model="form.firstname" type="text" name="firstname"
                                                           id="firstname" autocomplete="given-name"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.firstname" v-text="form.errors.firstname" class="text-red-500 text-xs mt-1"></div>
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="lastname"
                                                           class="block text-sm font-medium text-gray-700">Last
                                                        name</label>
                                                    <input type="text" v-model="form.lastname" name="lastname"
                                                           id="lastname" autocomplete="lastname"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.lastname" v-text="form.errors.lastname" class="text-red-500 text-xs mt-1"></div>
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="email-address"
                                                           class="block text-sm font-medium text-gray-700">Email
                                                        address</label>
                                                    <input type="text" name="email-address" id="email-address"
                                                           autocomplete="email"
                                                           v-model="form.email"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.email" v-text="form.errors.email" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="phone"
                                                           class="block text-sm font-medium text-gray-700">Phone
                                                        No</label>
                                                    <input type="text" name="phone" id="phone"
                                                           autocomplete="email"
                                                           v-model="form.phone"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.phone" v-text="form.errors.phone" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="currency_id"
                                                           class="block text-sm font-medium text-gray-700">Currency</label>
                                                    <select v-model="form.currency_id" id="currency_id"
                                                            name="currency_id" autocomplete="country-name"
                                                            class="border border-gray-400 p-2 w-full rounded-lg">
                                                        <option v-for="currency in currencies" :key="currency.id"
                                                                v-text="currency.name+' '+currency.code" :value="currency.id"></option>
                                                    </select>
                                                    <div v-if="form.errors.currency_id" v-text="form.errors.currency_id" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="website"
                                                           class="block text-sm font-medium text-gray-700">Website</label>
                                                    <input type="text" name="website" id="website"
                                                           v-model="form.website"
                                                           autocomplete="address-level2"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.website" v-text="form.errors.website" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden sm:block" aria-hidden="true">
                            <div class="py-5">
                                <div class="border-t border-gray-200"></div>
                            </div>
                        </div>
                        <div class="mt-10 sm:mt-0">
                            <div class="md:grid md:grid-cols-3 md:gap-6">
                                <div class="md:col-span-1 ml-3 mt-3">
                                    <div class="px-4 sm:px-0">
                                        <h3 class="text-lg font-medium leading-6 text-blue-900">Billing Information</h3>
                                        <p class="mt-1 text-sm text-gray-600">Add Customer's Billing Data.</p>
                                    </div>
                                </div>
                                <div class="mt-5 md:mt-0 md:col-span-2">
                                    <div class="shadow overflow-hidden sm:rounded-md">
                                        <div class="px-4 py-5 bg-white sm:p-6">
                                            <div class="grid grid-cols-6 gap-6">
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="name"
                                                           class="block text-sm font-medium text-gray-700">Name</label>
                                                    <input type="text" name="first-name" id="name"
                                                           v-model="form.name"
                                                           autocomplete="given-name"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.name" v-text="form.errors.name" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="country_id"
                                                           class="block text-sm font-medium text-gray-700">Country</label>
                                                    <select v-model="form.country_id" id="country_id" name="country_id"
                                                            autocomplete="country_id"
                                                            class="border border-gray-400 p-2 w-full rounded-lg">
                                                        <option v-for="country in countries" :key="country.id" :value="country.id"
                                                                v-text="country.name+' '+country.code"></option>
                                                    </select>
                                                    <div v-if="form.errors.country_id" v-text="form.errors.country_id" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="state"
                                                           class="block text-sm font-medium text-gray-700">State</label>
                                                    <input type="text" name="state" id="state"
                                                           v-model="form.state"
                                                           autocomplete="family-name"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.state" v-text="form.errors.state" class="text-red-500 text-xs mt-1"></div>
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="city"
                                                           class="block text-sm font-medium text-gray-700">City</label>
                                                    <input type="text" name="city" id="city"
                                                           autocomplete="email"
                                                           v-model="form.city"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.city" v-text="form.errors.city" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3 relative w-full text-left">
                                                    <label
                                                        class="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between">
                                                        Address
                                                    </label>
                                                    <div class="flex flex-col mt-1">
                                                        <textarea
                                                            v-model="form.address_1"
                                                            placeholder="Street 1"
                                                            type="text" name="address_1"
                                                            class="border border-gray-400 p-2 w-full rounded-lg box-border w-full px-3 py-2 text-sm not-italic font-normal leading-snug text-left text-black placeholder-gray-400 bg-white border border-gray-200 border-solid rounded outline-none focus:ring-primary-400 focus:border-primary-400"></textarea><textarea
                                                        placeholder="Street 2"
                                                        v-model="form.address_2"
                                                        type="text"
                                                        class="border border-gray-400 p-2 w-full rounded-lg mt-3 box-border w-full px-3 py-2 text-sm not-italic font-normal leading-snug text-left text-black placeholder-gray-400 bg-white border border-gray-200 border-solid rounded outline-none focus:ring-primary-400 focus:border-primary-400 mt-3"
                                                        name="address_2"></textarea>
                                                    </div>
                                                    <div v-if="form.errors.address_1" v-text="form.errors.address_1" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="bPhone"
                                                           class="block text-sm font-medium text-gray-700">Phone</label>
                                                    <input v-model="form.bPhone" type="text" name="bPhone" id="bPhone"
                                                           autocomplete="address-level2"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.bPhone" v-text="form.errors.bPhone" class="text-red-500 text-xs mt-1"></div>
                                                    <label for="zip_code"
                                                           class="block text-sm font-medium text-gray-700">Zip Code</label>
                                                    <input type="text" name="region" id="zip_code"
                                                           v-model="form.zip_code"
                                                           autocomplete="address-level1"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.zip_code" v-text="form.errors.zip_code" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden sm:block" aria-hidden="true">
                            <div class="py-5">
                                <div class="border-t border-gray-200"></div>
                            </div>
                        </div>
                        <div class="flex items-center justify-start mb-6 md:justify-end md:mb-1">
                            <div class="p-1">
                                <button
                                    class="inline-flex whitespace-nowrap items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 px-3 py-2 text-sm leading-4 rounded-md border-transparent  border-solid border-blue-500 font-normal transition ease-in-out duration-150 text-blue-500 hover:bg-blue-200 shadow-inner focus:ring-blue-500"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor" class="h-5 w-5 -ml-0.5 mr-2 h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                                    </svg>
                                    Copy from Billing
                                </button>
                            </div>
                        </div>
                        <div class="mt-10 sm:mt-0">
                            <div class="md:grid md:grid-cols-3 md:gap-6">
                                <div class="md:col-span-1">
                                    <div class="px-4 sm:px-0 ml-3 mt-3">
                                        <h3 class="text-lg font-medium leading-6 text-blue-900">Shipping
                                            Information</h3>
                                        <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can
                                            receive
                                            package.</p>
                                    </div>
                                </div>
                                <div class="mt-5 md:mt-0 md:col-span-2">
                                    <div class="shadow overflow-hidden sm:rounded-md">
                                        <div class="px-4 py-5 bg-white sm:p-6">
                                            <div class="grid grid-cols-6 gap-6">
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="sName"
                                                           class="block text-sm font-medium text-gray-700">Name</label>
                                                    <input type="text" name="first-name" id="sName"
                                                           v-model="form.sName"
                                                           autocomplete="given-name"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.sName" v-text="form.errors.sName" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="sCountry_id"
                                                           class="block text-sm font-medium text-gray-700">Country</label>
                                                    <select v-model="form.sCountry_id" id="sCountry_id" name="sCountry_id"
                                                            autocomplete="sCountry_id"
                                                            class="border border-gray-400 p-2 w-full rounded-lg">
                                                        <option v-for="country in countries" :key="country.id"
                                                                v-text="country.name+' '+country.code" :value="country.id"></option>
                                                    </select>
                                                    <div v-if="form.errors.sCountry_id" v-text="form.errors.sCountry_id" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="sState"
                                                           class="block text-sm font-medium text-gray-700">State</label>
                                                    <input type="text" name="sState" id="sState"
                                                           v-model="form.sState"
                                                           autocomplete="family-name"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.sState" v-text="form.errors.sState" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="city"
                                                           class="block text-sm font-medium text-gray-700">City</label>
                                                    <input type="text" name="city" id="sCity"
                                                           autocomplete="sCity"
                                                           v-model="form.sCity"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.sCity" v-text="form.errors.sCity" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3 relative w-full text-left">
                                                    <label
                                                        class="flex text-sm not-italic items-center font-medium text-gray-800 whitespace-nowrap justify-between">
                                                        Address
                                                    </label>
                                                    <div class="flex flex-col mt-1">
                                                        <textarea
                                                            v-model="form.sAddress_1"
                                                            placeholder="Street 1"
                                                            type="text" name="sAddress_1"
                                                            class="border border-gray-400 p-2 w-full rounded-lg box-border w-full px-3 py-2 text-sm not-italic font-normal leading-snug text-left text-black placeholder-gray-400 bg-white border border-gray-200 border-solid rounded outline-none focus:ring-primary-400 focus:border-primary-400"></textarea>
                                                        <div v-if="form.errors.sAddress_1" v-text="form.errors.sAddress_1" class="text-red-500 text-xs mt-1"></div>
                                                        <textarea
                                                        placeholder="Street 2"
                                                        v-model="form.sAddress_2"
                                                        type="text"
                                                        class="border border-gray-400 p-2 w-full rounded-lg mt-3 box-border w-full px-3 py-2 text-sm not-italic font-normal leading-snug text-left text-black placeholder-gray-400 bg-white border border-gray-200 border-solid rounded outline-none focus:ring-primary-400 focus:border-primary-400 mt-3"
                                                        name="sAddress_2"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="SPhone"
                                                           class="block text-sm font-medium text-gray-700">Phone</label>
                                                    <input v-model="form.sPhone" type="text" name="bPhone" id="sPhone"
                                                           autocomplete="address-level2"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.sPhone" v-text="form.errors.sPhone" class="text-red-500 text-xs mt-1"></div>
                                                    <label for="sZip_code"
                                                           class="block text-sm font-medium text-gray-700">Zip Code</label>
                                                    <input type="text" name="region" id="sZip_code"
                                                           v-model="form.sZip_code"
                                                           autocomplete="address-level1"
                                                           class="border border-gray-400 p-2 w-full rounded-lg">
                                                    <div v-if="form.errors.sZip_code" v-text="form.errors.sZip_code" class="text-red-500 text-xs mt-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button type="submit"
                                                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useForm} from "@inertiajs/inertia-vue3";

defineProps({
    countries: Object,
    currencies: Object
});
let form = useForm({
    firstname: '',
    lastname: '',
    email: '',
    currency_id: '',
    phone: '',
    website: '',
    name:'',
    country_id: '',
    state: '',
    city: '',
    bPhone:'',
    address_1: '',
    address_2:'',
    zip_code:'',
    sZip_code:'',
    sPhone:'',
    sAddress_1:'',
    sAddress_2:'',
    sCity:'',
    sState:'',
    sCountry_id:'',
    sName:'',

});
let submit = ()=>{
    form.post('/customers');
}
</script>

<style scoped>

</style>
