import axios from "axios";
import currencyFormatter from "currency-formatter";

export default {
  state: {
    courses: [],
    studentsPerCourse: [],
  },

  mutations: {
    setCourses(state, payload) {
      state.courses = payload;
    },
    setStudentsPerCourse(state, payload) {
      state.studentsPerCourse = payload;
    },
    addCourse(state, payload) {
      state.courses.push(payload);
    },
    deleteCourse(state, payload) {
      let courses = state.courses.filter((course) => course._id !== payload);
      state.courses = courses;
    },
  },

  actions: {
    async fetchCourses({ commit }) {
      commit("setLoading", true);

      try {
        const res = await axios.get("/admin/modules");

        // format currency
        let courses = res.data.data.map((course) => {
          let options = {
            symbol: "Ksh",
            thousand: ",",
            precision: 1,
            format: "%s. %v",
          };

          let formattedCurrency = currencyFormatter.format(
            course.feeAmount,
            options
          );

          course.feeAmount = formattedCurrency;

          return course;
        });

        commit("setCourses", courses);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err);
      }
    },

    async newCourse({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.post("/admin/add-module", payload);

        if (res.status === 201) {
          commit("addCourse", res.data.resp);
          commit("setLoading", false);
          commit("clearError");
        }
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err);
      }
    },

    async deleteCourse({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.delete(`/admin/delete-module/${payload}`);

        if (res.status === 201) {
          commit("deleteCourse", payload);
          commit("setLoading", false);
          commit("clearError");
        }
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err);
      }
    },

    async getStudentsPerCourse({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.get(`/admin/module-student/${payload}`);

        if (res.status === 200) {
          commit("setStudentsPerCourse", res.data.studentList);
          commit("setLoading", false);
          commit("clearError");
        }
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err);
      }
    },
  },

  getters: {
    courses: (state) => state.courses,
    studentsPerCourse: (state) => state.studentsPerCourse,
  },
};
