import axios from 'axios';

export default {
  state: {
    students: [],
  },

  mutations: {
    setStudents(state, payload) {
      state.students = payload;
    },

    addStudent(state, payload) {
      state.students.push(payload);
    },
    
    deleteStudent(state, payload) {
      const updatedStudentsList = state.students.filter(
        (stud) => stud.id !== payload
      );
      state.students = updatedStudentsList;
    },
  },

  actions: {
    async fetchStudents({ commit }) {
      commit("setLoading", true);
      
      try {
        const res =await axios.get("/admin/students");

        commit("setStudents", res.data);
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err.message);
        commit("setLoading", false);
      }
    },
  },

  getters: {
    students: (state) => state.students,
  },
};
