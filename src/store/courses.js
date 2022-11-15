import axios from "axios";

export default {
  state: {
    courses: [],
  },

  mutations: {
    setCourses(state, payload) {
      state.courses = payload;
    },
  },

  actions: {
    async fetchCourses({ commit }) {
      commit("setLoading", true);

      try {
        const res = await axios.get("/modules");

        commit("setCourses", res.data.data);
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
