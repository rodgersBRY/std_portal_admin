import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

import Auth from './auth'
import Students from "./students";
import Shared from "./shared";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Students,
    Shared,
  },
  plugins:[createPersistedState()]
});
