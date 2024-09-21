import axios from "axios";

export default {
  state: {
    students: [],
    student: null,
  },

  mutations: {
    SET_STUDENTS(state, payload) {
      state.students = payload;
    },

    SET_STUDENT(state, payload) {
      state.student = payload;
    },

    ADD_STUDENT(state, payload) {
      state.students.push(payload);
    },

    UPDATE_STUDENT(state, payload) {
      state.students = state.students.map((student) => {
        if (student._id === payload._id) {
          return Object.assign(student, payload);
        }

        return student;
      });
    },

    DELETE_STUDENT(state, payload) {
      const updatedStudentsList = state.students.filter(
        (stud) => stud._id !== payload
      );
      state.students = updatedStudentsList;
    },

    CLEAR_STUDENTS(state) {
      state.students = [];
    },
  },

  actions: {
    async fetchStudents({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get("/students");

        if (res.status == 200) {
          let students = res.data.students;

          commit("SET_STUDENTS", students);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async getStudent({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get(`/students/${payload}`);

        if (res.status == 200) {
          let student = res.data;

          commit("SET_STUDENT", student);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async newStudent({ commit }, payload) {
      commit("SET_LOADING", true);

      try {
        const resp = await axios.post("/students", payload);

        if (resp.status == 201) {
          commit("ADD_STUDENT", resp.data.student);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async updateStudent({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const resp = await axios.put(`/students/${payload.userId}`, payload);

        if (resp.status == 201) {
          let updatedStudent = resp.data.updatedStudent;

          commit("UPDATE_STUDENT", updatedStudent);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async deactivateStudent({ commit }, id) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.put(`/students/${id}`, { status: false });

        if (res.status == 201) {
          commit("UPDATE_STUDENT", res.data.updatedStudent);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async enrollStudentToCourse({ commit }, payload) {
      try {
        commit("SET_LOADING", true);
        commit("CLEAR_ERROR");

        const res = await axios.put(`/students/enroll/${payload.id}`, {
          module: payload.module,
        });

        if (res.status == 201) {
          let user = res.data;

          commit("UPDATE_STUDENT", user);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async updateStudentFee({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.put(`/students/update-fee/${payload.id}`, {
          amount: payload.amount,
          desc: payload.desc,
        });

        if (res.status == 201) {
          let updatedUser = res.data;

          commit("UPDATE_STUDENT", updatedUser);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    students: (state) => state.students,
    student: (state) => state.student,
  },
};
