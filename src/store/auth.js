import axios from "axios";

export default {
  state: {
    user: null,
    userId: localStorage.getItem("userId") || "",
  },

  mutations: {
    setUser(state, user, userId) {
      state.user = user;
      state.userId = userId;
    },

    logout(state) {
      state.user = null;
      state.userId = "";
      state.error = null;
    },
  },

  actions: {
    async register({ commit }, payload) {
      commit("setLoading", true);

      try {
        await axios.post("/admin/register", payload);

        commit("clearError");
        commit("setLoading", false);
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.response.data.message);
      }
    },

    async login({ commit }, payload) {
      commit("setLoading", true);

      try {
        let userData = {
          email: payload.email,
          password: payload.password,
        };

        const res = await axios.post("/admin/login", userData);

        let user = res.data.user;
        let userId = res.data.userId;

        localStorage.setItem("userId", userId);

        commit("setUser", user, userId);
        commit("clearError");
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err.response.data.message);
        commit("setLoading", false);
        localStorage.removeItem("userId");
      }
    },

    async logout({ commit }) {
      commit("logout");

      await axios.post("/admin/logout");
      localStorage.removeItem("userId");
    },
  },

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.userId,
  },
};
