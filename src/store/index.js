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
    nameDialog: null,
    dataDialog: null,
  },
  mutations: {
    SET_NAME_DIALOG(state, nameDialog) {
      state.nameDialog = nameDialog;
    },
    SET_CREATE_DATA_DIALOG(state, dataDialog) {
      state.dataDialog = dataDialog;
    },
  },
  actions: {
    setNameDialog({ commit }, nameDialog) {
      commit("SET_NAME_DIALOG", nameDialog);
    },
    setCreateDataDialog({ commit }, dataDialog) {
      commit("SET_CREATE_DATA_DIALOG", dataDialog);
    },
  },
});
