import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import currencyFormatter from "currency-formatter";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Sidenav from "./components/sidenav.vue";
import errorDialog from "./components/error_dialog.vue";
import userDialogBox from "./components/new_user_dialog_box.vue";

import axios from "axios";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = "http://207.154.244.175:81/api";

// 207.154.244.175:81
const currencyFormat = function (val) {
  let options = {
    symbol: "Ksh",
    thousand: ",",
    precision: 0,
    format: "%s. %v",
  };

  let formattedCurrency = currencyFormatter.format(val, options);

  return formattedCurrency;
};


// auto authenticate
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}

axios.interceptors.response.use(undefined, (err) => {
  return new Promise((_, reject) => {
    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
      store.dispatch("logout");
    }
    reject(err);
  });
});

Vue.config.productionTip = false;

Vue.component("sidenav", Sidenav);
Vue.component("error-dialog", errorDialog);
Vue.component("user-dialog", userDialogBox);
Vue.filter("currencyFormatter", currencyFormat);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
