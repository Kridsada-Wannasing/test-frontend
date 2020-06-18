import Vue from "vue";
import Vuex from "vuex";
import * as login from "./modules/login";
import * as table from "./modules/table";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    table,
  },
  state: {
    dialog: null,
  },
  mutations: {
    SET_DIALOG(state, dialog) {
      state.dialog = dialog;
    },
  },
  actions: {
    setDialog({ commit }, dialog) {
      commit("SET_DIALOG", dialog);
    },
  },
});
