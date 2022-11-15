import axios from "axios";

export default {
  state: {
    courses: [],
  },

  mutatons: {
    setCourses(state, payload) {
      state.courses = payload;
    },

    addCourse(state, payload) {
      state.courses.push(payload);
    },

    removeCourse(state, payload) {
      const updatedCourses = state.courses.filter(
        (course) => course.id !== payload
      );
      state.courses = updatedCourses;
    },
  },

  actions: {
    async fetchCourses({ commit }) {
      commit("setLoading", true);

      try {
        const res = await axios.get("/modules");

        console.log(res.data);
        commit('setCourses', res.data)
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
