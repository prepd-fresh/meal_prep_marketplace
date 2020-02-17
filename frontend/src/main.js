import Vue from 'vue'
import App from './App.vue'
import VueSession from 'vue-session'
import BootstrapVue from 'bootstrap-vue'
import router from "./routes"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//import layouts here
import defaultLayout from "@/layouts/default.vue"


//implement Vue dependences/pacages here
Vue.use(VueSession)
Vue.use(BootstrapVue)

//implement layouts here
Vue.component('default-layout', defaultLayout)

//vue axios implementation (uses it to send data to server)
//Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
