import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    const userLogin = localStorage.getItem("user");
    if (userLogin) this.$store.commit("login/SET_USER", userLogin);
  },
  render: (h) => h(App),
}).$mount("#app");
