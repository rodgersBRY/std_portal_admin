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
      state.instructors.push(payload);
    },

    deleteInstructor(state, payload) {
      const updatedInstructorList = state.instructors.filter(
        (instr) => instr._id !== payload
      );
      state.instructors = updatedInstructorList;
    },

    enrollInstructor(state, payload) {
      state.instructors = state.instructors.map((instructor) => {
        if (instructor._id === payload._id) {
          return Object.assign(instructor, payload);
        }
        return instructor;
      });
    },

    clearInstructors(state) {
      state.instructors = [];
    }
  },

  actions: {
    async fetchInstructors({ commit }) {
      commit("setLoading", true);

      try {
        const res = await axios.get("/admin/instructors");

        if (res.status === 200) {
          let instructors = res.data.data;

          commit("setInstructors", instructors);
          commit("setLoading", false);
          commit("clearError");
        }
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async newInstructor({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.post("/admin/new-user", payload);

        if (res.status === 201) {
          commit("addInstructor", payload);
          commit("clearError");
          commit("setLoading", false);
        }
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async deleteInstructor({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.delete(`/admin/user/${payload}`);

        if (res.status === 200) {
          commit("deleteInstructor", payload);
          commit("setLoading", false);
          commit("clearError");
        }
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async enrollInstructor({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.put(`/admin/enroll-user/${payload.instructorId}`, {
          moduleName: payload.moduleName,
        });

        let user=res.data.updatedUser

        commit("enrollInstructor", user);
        commit("setLoading", false);
        commit("clearError");
      }catch(err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    }
  },

  getters: {
    instructors: (state) => state.instructors,
  },
};
