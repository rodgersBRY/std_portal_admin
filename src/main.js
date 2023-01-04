import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Sidenav from "./components/sidenav.vue";
import axios from "axios";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = "http://128.199.38.66:81/api";

// handle expired tokens
axios.interceptors.response.use(undefined, function(err) {
  if(err) {
    const originalRequest=err.config
    if(err.response.status===401&&!originalRequest._retry) {
      originalRequest._retry=true
      store.dispatch('logout')
      return router.push('/accounts/login')
    }
  }
})

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
