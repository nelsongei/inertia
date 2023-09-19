import {createApp, h} from 'vue'
import {createInertiaApp, Head, Link} from '@inertiajs/inertia-vue3'
import {InertiaProgress} from "@inertiajs/progress";
import layout from "./Shared/Layout";
import VueApexCharts from "vue3-apexcharts";

createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;
        if (page.layout === undefined){
            page.layout = layout
        }
        // page.layout ??= Layout;
        return page;
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .use(VueApexCharts)
            .component('Link',Link)
            .component('Head',Head)
            .mount(el)
    },
    title: title=>`Invoice | ${title}`
})

InertiaProgress.init({
    color: 'green',
    showSpinner: true
});
