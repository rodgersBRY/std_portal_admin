import axios from "axios";

export default {
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },

    logout(state) {
      state.user = null;
      state.token = "";
      state.error = null;
    },
  },

  actions: {
    // auto logout after 30 minutes
    autoLogout({ commit }) {
      setTimeout(() => {
        commit("clearError");
        commit("logout");
        commit("clearStudents");
        commit("clearInstructors");
        commit("clearCourses");
        commit("clearstudentsPerCourse");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
      }, 30 * 60000);
    },

    async login({ commit, dispatch }, payload) {
      commit("setLoading", true);
      commit("clearError");

      try {
        const res = await axios.post("/auth/login", {
          email: payload.get("email"),
          password: payload.get("password"),
        });

        let user = res.data.loadedUser;
        let token = res.data.token;

        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;

        commit("setUser", { user, token });

        dispatch("autoLogout");
      } catch (err) {
        console.log(err);
        commit("setError", err.response.data.message);

        localStorage.removeItem("token");
      } finally {
        commit("setLoading", false);
      }
    },

    async logout({ commit }) {
      commit("logout");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      commit("clearStudents");
    },

    clearError({ commit }) {
      commit("clearError");
    },
  },

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
  },
};
