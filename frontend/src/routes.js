import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    router: [
        {
            path: "/",
            name: "home",
            component: require("@/components/homePage/homePage.vue").default
        }]
});