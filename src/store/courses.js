import axios from "axios";

export default {
  state: {
    courses: [],
  },

  mutatons: {
    addCourses(state, payload) {
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
        const resp = await axios.get("/modules");
        
        commit("addCourses", resp.data);
        commit("setLoading", false);
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
