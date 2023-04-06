import axios from "axios";
import currencyFormatter from "currency-formatter";

export default {
  state: {
    students: [],
    attendanceCount: 0,
  },

  mutations: {
    setStudents(state, payload) {
      state.students = payload;
    },

    setAttendanceCount(state, payload) {
      state.attendanceCount = payload;
    },

    addStudent(state, payload) {
      state.students.push(payload);
    },

    updateStudent(state, payload) {
      state.students = state.students.map((student) => {
        if (student._id === payload._id) {
          return Object.assign(student, payload);
        }

        return student;
      });
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

    enrollStudent(state, payload) {
      state.students = state.students.map((student) => {
        if (student._id === payload._id) {
          return Object.assign(student, payload);
        }
        return student;
      });
    },

    clearStudents(state) {
      state.students = [];
    },
  },

  actions: {
    async fetchStudents({ commit }) {
      commit("setLoading", true);

      try {
        const res = await axios.get("/admin/students");

        // format currency
        let students = res.data.data.map((student) => {
          let options = {
            symbol: "Ksh",
            thousand: ",",
            precision: 0,
            format: "%s. %v",
          };

          let formattedCurrency = currencyFormatter.format(
            student.fee_balance,
            options
          );

          student.fee_balance = formattedCurrency;

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

    async updateStudent({ commit }, payload) {
      commit("setLoading", true);

      try {
        const resp = await axios.put(
          `/admin/edit-user/${payload.userId}`,
          payload
        );

        commit("updateStudent", resp.data.result);

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
        const res = await axios.put(`/admin/enroll-user/${payload.studentId}`, {
          moduleName: payload.moduleName,
        });

        let user = res.data.updatedUser;

        commit("enrollStudent", user);
        commit("setLoading", false);
        commit("clearError");
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

    async checkStudentIn({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.put(`/admin/check-in/${payload.studentId}`, {
          status: payload.status,
        });

        commit("setAttendanceCount", payload.status);

        console.log(res.data);
        commit("setLoading", false);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async fetchTotalAttendance({ commit }) {
      commit("setLoading", true);

      try {
        const res = await axios.get("/admin/total-attendants");

        let attendance = res.data.totalAttendance;

        commit("setLoading", false);
        commit("clearError");
        commit("setAttendanceCount", attendance);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },
  },

  getters: {
    students: (state) => state.students,
    attendanceCount: (state) => state.attendanceCount,
  },
};
