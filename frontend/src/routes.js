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
      meta: {layout: "noSearch"},
      component:() => import("@/components/aboutPage/about.vue")
    },{
      path: "/register",
      name: "register",
      meta: {layout: "noSearch"},
      component: () => import("@/components/registerPage/registerForm")
    },{
      path:"/login",
      name:"login",
      meta: {layout: "noSearch"},
      component:() => import("@/components/loginPage/loginForm")
    }

  ]
});
