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
    async register({ commit }, payload) {
      commit("setLoading", true);

      try {
        await axios.post("/auth/register", payload);

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

        const res = await axios.post("/auth/login", userData);
        console.log(res);
        if (res.status === 200) {
          let user = res.data.loadedUser;
          let token = res.data.token;

          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;

          let data = {
            user,
            token,
          };
          commit("setUser", data);
          commit("clearError");
          commit("setLoading", false);
        }
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        commit("setError", err.response.data.message);

        localStorage.removeItem("token");
      }
    },

    async logout({ commit }) {
      commit("logout");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    },
  },

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
  },
};
