<template>
    <div class="flex justify-between">
        <div class="min-w-[20%]">
            <div class="border-b w-40 my-0 pb-3 text-gray-500 border-gray-300" v-for="customer in customers">
                <Link :href="`/customers/${customer.id}/edit`"
                      :class="{'text-sky-500 font-medium transition-colors':$page.url === `/customers/${customer.id}/edit`}"
                      class=" hover:text-sky-500 transition-colors">
                    <span>{{ customer.firstname + ' ' + customer.lastname }}</span>
                </Link>
            </div>
        </div>
        <div class="w-full">
            <slot/>
        </div>
    </div>
    <!--    <div class="max-w-7xl mx-1 px-1 sm:px-1 py-0">-->
    <!--        <div class="flex items-start">-->
    <!--            &lt;!&ndash; left column for names  &ndash;&gt;-->
    <!--            <div class="w-1/5 flex-shrink-0">-->
    <!--                <div class="text-xl text-gray-700 font-semibold mb-8"><span class="pb-4 border-b border-gray-400">All Clients</span>-->
    <!--                </div>-->
    <!--                <div class="border-b w-48 my-3 pb-3 text-gray-500 border-gray-300" v-for="customer in customers">-->
    <!--                    <Link :href="`/customers/${customer.id}/edit`"-->
    <!--                          :class="{'text-sky-500 font-medium transition-colors':$page.url === `/customers/${customer.id}/edit`}"-->
    <!--                          class=" hover:text-sky-500 transition-colors">-->
    <!--                        <span>{{ customer.firstname + ' ' + customer.lastname }}</span>-->
    <!--                    </Link>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--            &lt;!&ndash; Content &ndash;&gt;-->
    <!--            <slot/>-->
    <!--        </div>-->
    <!--    </div>-->
</template>

<script>
export default {
    name: "CustomerLayout",
    computed: {
        customers() {
            return this.$page.props.customers
        }
    }
}
</script>

<style scoped>

</style>
