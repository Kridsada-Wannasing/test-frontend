import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/data-table",
    name: "DataTable",
    meta: { requiresAuth: true },
    component: () => import("@/views/DataTable.vue"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    meta: { requiresAuth: true },
    props: true,
    component: () => import("@/views/Detail.vue"),
    beforeEnter(to, from, next) {
      store.dispatch("table/getDataTable", to.params.id).then((table) => {
        to.params.table = table;
        next();
      });
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn)
    next("/");
  else next();
});

export default router;
