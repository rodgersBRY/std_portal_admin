export default {
  state: {
    error: null,
    loading: false,
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },

    SET_ERROR(state, payload) {
      state.error = payload;
    },

    CLEAR_ERROR(state) {
      state.error = null;
    },
  },

  actions: {
    setError({commit}, payload) {
      commit('SET_ERROR', payload);
    },

    clearError({commit}) {
      commit('CLEAR_ERROR')
    }
  },
  
  getters: {
    isLoading: (state) => state.loading,
    error: (state) => state.error,
  },
};
