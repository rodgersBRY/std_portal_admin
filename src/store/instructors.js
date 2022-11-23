import axios from "axios";

export default {
  state: {
    instructors: [],
  },

  mutations: {
    setInstructors(state, payload) {
      state.instructors = payload;
    },

    addInstructor(state, payload) {
      state.instructors.unshift(payload);
    },

    deleteInstructor(state, payload) {
      const updatedInstructorList = state.instructors.filter(
        (instr) => instr._id !== payload
      );
      state.instructors = updatedInstructorList;
    },
  },

  actions: {
    async fetchInstructors({ commit }) {
      commit("setLoading", true);

      try {
        const res = await axios.get("/admin/instructors");

        let instructors = res.data.data;

        commit("setInstructors", instructors);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.message);
      }
    },

    async newInstructor({ commit }, payload) {
      commit("setLoading", true);

      try {
        await axios.post("/admin/new-user", payload);

        commit("addInstructor", payload);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err);
      }
    },

    async deleteInstructor({ commit }, payload) {
      commit("setLoading", true);

      try {
        await axios.delete(`/admin/user/${payload}`);

        commit("deleteInstructor", payload);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err);
      }
    },
  },

  getters: {
    instructors: (state) => state.instructors,
  },
};
