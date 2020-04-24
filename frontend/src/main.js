import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import router from "./routes"
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueCookie from 'vue-cookie'


//import layouts here
import Default from "@/layouts/default.vue"
import noSearch from "@/layouts/noSearch.vue"
import adminLayout from "@/layouts/admin.vue"
import loggedInLayout from "@/layouts/loggedIn.vue"


//implement Vue dependences/pacages here
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueCookie)

//implement layouts here
Vue.component('default-layout', Default)
Vue.component('noSearch-layout', noSearch)
Vue.component('admin-layout', adminLayout )
Vue.component('loggedIn-layout',loggedInLayout)


//vue axios implementation (uses it to send data to server)
Vue.prototype.$http = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
