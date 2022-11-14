import axios from "axios";

export default {
  state: {
    user: {},
    token: localStorage.getItem("token") || "",
  },

  mutations: {
    setUser(state, user, token) {
      state.user = user;
      state.token = token;
    },

    logout(state) {
      state.user = {};
      state.token = "";
      state.error = "";
    },
  },

  actions: {
    async register({ commit }, payload) {
      commit("setLoading", true);

      try {
        const resp = await axios.post("/auth/register", payload);
        if (resp.statusCode == 200) {
          commit("setError", null);
          commit("setLoading", false);
        }
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.message);
      }
    },

    async login({ commit }, payload) {
      commit("setLoading", true);

      try {
        const user = await axios.post("/auth/login", payload);

        let token = user.data.token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;

        commit("setUser", user.data, token);
        commit("setError", null);
        commit("setLoading", false);
      } catch (err) {
        console.log(payload);
        commit("setError", err.message);
        commit("setLoading", false);
      }
    },

    // async logout({ commit }) {},
  },

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
  },
};
