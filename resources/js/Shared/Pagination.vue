<template>
    <!--Paginator-->
    <div>
        <!--        <template v-for="link in users.links">-->
        <!--            <Link-->
        <!--                v-if="link.url"-->
        <!--                :href="link.url"-->
        <!--                v-html="link.label"-->
        <!--            />-->
        <!--            <span v-else v-html="link.label"></span>-->
        <!--        </template>-->
        <Component
            :is="link.url ? 'Link' : 'span'"
            v-for="link in links"
            :href="link.url"
            v-html="link.label"
            class="px-1"
            :class="{'text-gray-500': !link.url,'font-bold': link.active}"
        />
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props:{
        links: Array,
    }
}
</script>

<style scoped>

</style>
