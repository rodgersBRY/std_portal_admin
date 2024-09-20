import axios from "axios";

export default {
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },

    LOGOUT(state) {
      state.user = null;
      state.token = "";
      state.error = null;
    },
  },

  actions: {
    // auto logout after 30 minutes
    autoLogout({ commit }) {
      setTimeout(() => {
        commit("CLEAR_ERROR");
        commit("LOGOUT");
        commit("CLEAR_STUDENTS");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
      }, 30 * 60000);
    },

    async login({ commit, dispatch }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.post("/auth/login", {
          email: payload.get("email"),
          password: payload.get("password"),
        });

        if (res.status == 200) {
          let user = res.data.loadedUser;
          let token = res.data.token;

          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;

          commit("SET_USER", { user, token });

          dispatch("autoLogout");
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);

        localStorage.removeItem("token");
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async logout({ commit }) {
      commit("LOGOUT");
      commit("CLEAR_STUDENTS");
      commit("CLEAR_ERROR");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    },
  },

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
  },
};
