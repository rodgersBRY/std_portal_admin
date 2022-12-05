import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Sidenav from "./components/sidenav.vue";
import axios from "axios";

axios.defaults.withCredentials = false;
// https://std-portal-api.vercel.app
axios.defaults.baseURL = "http://localhost:4000";

Vue.prototype.$http = axios;

// auto authenticate
const userId = localStorage.getItem("userId");
if (userId) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = userId;
}

Vue.config.productionTip = false;

Vue.component("sidenav", Sidenav);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
