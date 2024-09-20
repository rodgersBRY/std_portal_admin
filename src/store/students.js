import axios from "axios";

export default {
  state: {
    students: [],
    student: null,
  },

  mutations: {
    setStudents(state, payload) {
      state.students = payload;
    },

    setStudent(state, payload) {
      state.student = payload;
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
      commit("clearError");

      try {
        const res = await axios.get("/students");

        let students = res.data.students;

        commit("setStudents", students);
      } catch (err) {
        commit("setError", err.response.data.message);
      } finally {
        commit("setLoading", false);
      }
    },

    async getStudent({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");

      try {
        const res = await axios.get(`/students/${payload}`);

        let student = res.data;

        commit("setStudent", student);
      } catch (err) {
        commit("setError", err.response.data.message);
      } finally {
        commit("setLoading", false);
      }
    },

    async newStudent({ commit }, payload) {
      commit("setLoading", true);

      try {
        const resp = await axios.post("/students", payload);

        if (resp.status == 201) {
          commit("addStudent", resp.data.student);
          commit("setLoading", false);
        }
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async updateStudent({ commit }, payload) {
      commit("setLoading", true);

      try {
        const resp = await axios.put(`/students/${payload.userId}`, payload);

        if (resp.status == 201) {
          let updatedStudent = resp.data.updatedStudent;
          console.log(updatedStudent);

          commit("updateStudent", updatedStudent);
        }
      } catch (err) {
        commit("setError", err.response.data.message);
      } finally {
        commit("setLoading", false);
      }
    },

    async deleteStudent({ commit }, payload) {
      commit("setLoading", true);

      try {
        await axios.delete(`/students/${payload}`);

        commit("deleteStudent", payload);
        commit("setLoading", false);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async enrollStudentToCourse({ commit }, payload) {
      try {
        commit("setLoading", true);
        const res = await axios.put(`/students/enroll/${payload.id}`, {
          module: payload.module,
        });

        if (res.status == 201) {
          let user = res.data;

          commit("enrollStudent", user);
        }
      } catch (err) {
        commit("setError", err.response.data.message);
      } finally {
        commit("setLoading", false);
      }
    },

    async updateStudentFee({ commit }, payload) {
      commit("setLoading", true);

      try {
        const res = await axios.put(`/students/update-fee`, payload);

        let updatedUser = res.data;

        commit("updateStudentFee", updatedUser);
        commit("setLoading", false);
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
        commit("setAttendanceCount", attendance);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },
  },

  getters: {
    students: (state) => state.students,
    student: (state) => state.student,
  },
};
