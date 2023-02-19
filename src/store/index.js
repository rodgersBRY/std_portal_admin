import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

import Auth from './auth'
import Students from "./students";
import Courses from './courses'
import Shared from "./shared";
import Instructors from './instructors'
import Reports from './reports'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Students,
    Courses,
    Instructors,
    Reports,
    Shared,
  },
  plugins:[createPersistedState()]
});
