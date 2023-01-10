import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Sidenav from "./components/sidenav.vue";
import axios from "axios";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = "http://159.89.233.11.81/api";

// 159.89.233.11:81
// auto authenticate
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

Vue.config.productionTip = false;

Vue.component("sidenav", Sidenav);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
