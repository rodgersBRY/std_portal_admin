import axios from "axios";

export default {
  state: {
    user: localStorage.getItem("user") || null,
    // token: localStorage.getItem("token") || "",
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
      // state.token = token;
    },

    logout(state) {
      state.user = null;
      // state.token = "";
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

        // let token = user.data.token;
        localStorage.setItem("user", user);
        // axios.defaults.headers.common["Authorization"] = token;

        commit("setUser", user);
        commit("clearError");
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err.response.data.message);
        commit("setLoading", false);
        localStorage.removeItem("user");
      }
    },

    async logout({ commit }) {
      commit("logout");

      localStorage.removeItem("user");
      // delete axios.defaults.headers.common["Authorization"];
    },
  },

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
  },
};
