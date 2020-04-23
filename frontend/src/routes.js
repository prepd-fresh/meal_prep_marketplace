import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "basic",
      meta: {
        title: "Prep'd Fresh Meal Prep Market Place",
        metaTags: [
          {
            name: "description",
            content: "Find the meal prep company that is tailored to suit your individual needs. Search now."
          },
          {
            property: "og-description",
            content: "Find the meal prep company that is tailored to suit your individual needs. Search now."
          }
        ]
      },
      component: require("@/components/homePage/home.vue").default
    }, {
      path: "/about",
      name: "about",
      meta: {layout: "noSearch"},
      component:require("@/components/aboutPage/about.vue").default
    },{
      path: "/register",
      name: "register",
      meta: {layout: "noSearch"},
      component: require("@/components/registerPage/registerForm").default
    },{
      path:"/login",
      name:"login",
      meta: {layout: "noSearch"},
      component: require("@/components/loginPage/loginForm").default
    },{
      path:"/admin",
      name:"admin",
      meta:{layout: "admin"},
      component: require("@/components/adminPage/adminHome").default
    },{
      path:"/home",
      name:"home",
      meta:{layout:"loggedIn", requireAuth: true},
      component: require("@/components/homePage/home.vue").default
    }
    

  ]
});
