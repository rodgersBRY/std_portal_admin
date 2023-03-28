import axios from "axios";

export default {
  state: {
    prevMonthStudents: [],
    studentsSummary: {
      totalStudents: 0,
      totalAmountPaid: 0,
      totalAmountPayable: 0,
      registrationFee: 0,
    },
  },

  mutations: {
    setPrevMonthStudents(state, payload) {
      state.prevMonthStudents = payload;
    },

    setStudentsSummary(state, payload) {
      let totalStudents = payload.length;
      let totalAmountPaid = 0;
      let totalAmountPayable = 0;
      let regFeePaid = 0;

      for (let student of payload) {
        totalAmountPaid += student.amount_paid;
        totalAmountPayable += student.amount_payable;
        if (student.registrationFee) {
          regFeePaid += 5000;
        }
      }

      state.studentsSummary = {
        totalStudents: totalStudents,
        totalAmountPaid: totalAmountPaid,
        totalAmountPayable: totalAmountPayable,
        registrationFee: regFeePaid,
      };
    },
  },

  actions: {
    async fetchPrevMonthStudents({ commit }) {
      commit("setLoading", true);

      try {
        const resp = await axios.get("/admin/reports");
        let students = resp.data;

        commit("setLoading", false);

        commit("setPrevMonthStudents", students);
        commit("setStudentsSummary", students);
        commit("clearError");
      } catch (err) {
        commit("setLoading", false);
        console.log(err);
      }
    },
  },

  getters: {
    prevMonthStudents: (state) => state.prevMonthStudents,
    studentsSummary: (state) => state.studentsSummary,
  },
};
