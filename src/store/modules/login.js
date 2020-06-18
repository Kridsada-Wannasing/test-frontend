export const namespaced = true;

export const state = {
  user: "",
};

export const mutations = {
  SET_USER(state, username) {
    state.user = username;
    localStorage.setItem("user", username);
  },
  EDIT_USER(state, editUsername) {
    state.user = editUsername;
    localStorage.removeItem("user");
    localStorage.setItem("user", editUsername);
  },
  CLEAR_USER() {
    state.user = null;
    localStorage.removeItem("user");
    location.reload();
  },
};

export const actions = {
  login({ commit }, username) {
    commit("SET_USER", username);
  },
  logout({ commit }) {
    commit("CLEAR_USER");
  },
  edit({ commit }, editUsername) {
    commit("EDIT_USER", editUsername);
  },
};

export const getters = {
  loggedIn(state) {
    return !!state.user;
  },
};
