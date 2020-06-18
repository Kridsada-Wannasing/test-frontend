export const namespaced = true;

export const state = {
  tables: [],
};

export const mutations = {
  SET_DATA_TABLES(state, tables) {
    state.tables = tables;
  },
  CREATE_DATA_TABLE(state, table) {
    state.tables.push(table);
  },
  SET_DATA_TABLE(state, table) {
    state.table = table;
  },
  UPDATE_DATA_TABLE(state, target, table) {
    state.tables.splice(target, 1, table);
  },
  DELETE_DATA_TABLE(state, target) {
    state.tables.splice(target, 1);
  },
};

export const actions = {
  setDataTables({ commit }, data) {
    commit("SET_DATA_TABLES", data);
  },
  getDataTable({ commit, getters }, id) {
    let table = getters.findDataTableByID(id);

    commit("SET_DATA_TABLE", table);

    return table;
  },
  createDataTable({ commit }, table) {
    commit("CREATE_DATA_TABLE", table);
  },
  updateDataTable({ commit, getters }, table) {
    let target = getters.indexOfTarget(table.id);

    commit("UPDATE_DATA_TABLE", target, table);
  },
  deleteDataTable({ commit, getters }, table) {
    let target = getters.indexOfTarget(table.id);

    commit("DELETE_DATA_TABLE", target);
  },
};

export const getters = {
  getDataTables(state) {
    return state.tables;
  },
  findDataTableByID: (state) => (id) => {
    return state.tables.find((table) => table.id === id);
  },
  indexOfTarget: (state) => (id) => {
    return state.tables.findIndex((table) => table.id === id);
  },
};
