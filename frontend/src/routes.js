import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: require("@/components/homePage/home.vue").default
    }, {
      path: "/about",
      name: "about",
      component: require("@/components/homePage/about.vue").default
    },
    //paths to mini 
    {
      path: "/company/menu",
      name: "about",
      component:{
        companyData: require("@/components/homePage/companyComponents/menu")
      }
    }, {
      path: "/company/price",
      name: "about",
      component: require("@/components/homePage/companyComponents/price").default
    }, {
      path: "/company/map",
      name: "about",
      component: require("@/components/homePage/companyComponents/map").default
    }

  ]
});
