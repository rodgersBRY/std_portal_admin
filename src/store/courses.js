import axios from "axios";
import currencyFormatter from "currency-formatter";

export default {
  state: {
    courses: [],
  },

  mutations: {
    setCourses(state, payload) {
      state.courses = payload;
    },
    addCourse(state, payload) {
      state.courses.push(payload);
    },
  },

  actions: {
    async fetchCourses({ commit }) {
      commit("setLoading", true);

      try {
        const res = await axios.get("/modules");

        // format currency
        let courses = res.data.data.map((course) => {
          let options = {
            symbol: "Ksh",
            thousand: ",",
            precision: 1,
            format: "%s. %v",
          }

          let formattedCurrency = currencyFormatter.format(course.feeAmount, options);

          course.feeAmount = formattedCurrency;

          return course;
        });

        commit("setCourses", courses);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setError", err);
        commit("setLoading", false);
      }
    },

    async newCourse({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.post("/admin/add-module", payload);
        
        commit("addCourse", res.data.data);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setError", err);
        commit("setLoading", false);
      }
    },
  },

  getters: {
    courses: (state) => state.courses,
  },
};
