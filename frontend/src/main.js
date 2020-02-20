import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from "./routes"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//import layouts here
import Default from "@/Layouts/Default.vue"


//implement Vue dependences/pacages here
Vue.use(BootstrapVue)

//implement layouts here
Vue.component('default-layout', Default)

//vue axios implementation (uses it to send data to server)
//Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
