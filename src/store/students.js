import axios from "axios";
import currencyFormatter from "currency-formatter";

export default {
  state: {
    students: [],
  },

  mutations: {
    setStudents(state, payload) {
      state.students = payload;
    },

    addStudent(state, payload) {
      state.students.unshift(payload);
    },

    deleteStudent(state, payload) {
      const updatedStudentsList = state.students.filter(
        (stud) => stud._id !== payload
      );
      state.students = updatedStudentsList;
    },

    updateStudentFee(state, payload) {
      state.students = state.students.map((student) => {
        if (student._id === payload._id) {
          return Object.assign(student, payload);
        }
        return student;
      });
    },
  },

  actions: {
    async fetchStudents({ commit }) {
      commit("setLoading", true);

      try {
        const res = await axios.get("/admin/students");

        // format fee balance
        let students = res.data.data.map((student) => {
          let formattedFee = currencyFormatter.format(student.fee_balance, {
            symbol: "Ksh",
            thousand: ",",
            precision: 1,
            format: "%s. %v",
          });

          student.fee_balance = formattedFee;

          return student;
        });

        commit("setStudents", students);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async newStudent({ commit }, payload) {
      commit("setLoading", true);

      try {
        await axios.post("/admin/new-user", payload);

        commit("addStudent", payload);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async deleteStudent({ commit }, payload) {
      commit("setLoading", true);

      try {
        await axios.delete(`/admin/user/${payload}`);

        commit("deleteStudent", payload);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async enrollStudentToCourse({ commit }, payload) {
      commit("setLoading", true);

      try {
        await axios.post("/admin/enroll", payload);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async updateStudentFee({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.put(`/admin/update-fee`, payload);

        let updatedUser = res.data;

        commit("updateStudentFee", updatedUser);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },
  },

  getters: {
    students: (state) => state.students,
  },
};
