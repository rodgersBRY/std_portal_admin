import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import currencyFormatter from "currency-formatter";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Sidenav from "./components/sidenav.vue";
import NavBar from "./components/navbar.vue";
import errorDialog from "./components/error_dialog.vue";
import userDialogBox from "./components/new_user_dialog_box.vue";

import axios from "axios";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;

const currencyFormat = function (val) {
  let options = {
    thousand: ",",
    precision: 0,
    format: "%v",
  };

  let formattedCurrency = currencyFormatter.format(val, options);

  return formattedCurrency;
};

const dateFormat = function (val, locale = "en-US", options = {}) {
  if (!val) return "";
  const date = new Date(val);
  return new Intl.DateTimeFormat(locale, options).format(date);
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
Vue.component("NavBar", NavBar);
Vue.filter("currencyFormatter", currencyFormat);
Vue.filter("dateFormat", dateFormat);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
