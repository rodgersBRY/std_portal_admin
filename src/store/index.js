import Vue from "vue";
import Vuex from "vuex";

import Auth from './auth'
import Students from "./students";
import Courses from './courses'
import Shared from "./shared";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Students,
    Courses,
    Shared,
  },
});
