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
    // async register({ commit, dispatch }, payload) {
    //   commit("setLoading", true);
    //   try {
    //     await axios.post("/auth/register", payload);

    //     let userForm = new FormData();
    //     userForm.append("email", payload.email);
    //     userForm.append("password", payload.password);

    //     commit("clearError");
    //     dispatch("login", userForm);
    //     commit("setLoading", false);
    //   } catch (err) {
    //     commit("setLoading", false);
    //     commit("setError", err);
    //   }
    // },

    async login({ commit }, payload) {
      commit("setLoading", true);

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
        commit("clearError");
        commit("setLoading", false);
      } catch (err) {
        console.log(err);
        commit("setLoading", false);
        commit("setError", err);

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
