(function(e) {
  function t(t) {
    for (
      var r, a, c = t[0], u = t[1], l = t[2], s = 0, d = [];
      s < c.length;
      s++
    )
      (a = c[s]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]),
        (o[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    f && f(t);
    while (d.length) d.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== o[c] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = u((u.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { app: 0 },
    o = { app: 0 },
    i = [];
  function c(e) {
    return (
      u.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-36cda554": "e1bc2cfc",
        "chunk-d3248680": "e7f9194b",
        "chunk-66b7e6eb": "7b8335ae",
        "chunk-e6b9c7be": "63c6979e",
      }[e] +
      ".js"
    );
  }
  function u(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, u), (n.l = !0), n.exports;
  }
  (u.e = function(e) {
    var t = [],
      n = { "chunk-d3248680": 1, "chunk-66b7e6eb": 1, "chunk-e6b9c7be": 1 };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        t.push(
          (a[e] = new Promise(function(t, n) {
            for (
              var r =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-36cda554": "31d6cfe0",
                    "chunk-d3248680": "6355dd2e",
                    "chunk-66b7e6eb": "09236e98",
                    "chunk-e6b9c7be": "948a1d93",
                  }[e] +
                  ".css",
                o = u.p + r,
                i = document.getElementsByTagName("link"),
                c = 0;
              c < i.length;
              c++
            ) {
              var l = i[c],
                s = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (s === r || s === o)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (c = 0; c < d.length; c++) {
              (l = d[c]), (s = l.getAttribute("data-href"));
              if (s === r || s === o) return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function(t) {
                var r = (t && t.target && t.target.src) || o,
                  i = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = r),
                  delete a[e],
                  f.parentNode.removeChild(f),
                  n(i);
              }),
              (f.href = o);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(f);
          }).then(function() {
            a[e] = 0;
          }))
        );
    var r = o[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var i = new Promise(function(t, n) {
          r = o[e] = [t, n];
        });
        t.push((r[2] = i));
        var l,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          u.nc && s.setAttribute("nonce", u.nc),
          (s.src = c(e));
        var d = new Error();
        l = function(t) {
          (s.onerror = s.onload = null), clearTimeout(f);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = r),
                (d.request = a),
                n[1](d);
            }
            o[e] = void 0;
          }
        };
        var f = setTimeout(function() {
          l({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = l), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (u.m = e),
    (u.c = r),
    (u.d = function(e, t, n) {
      u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (u.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.t = function(e, t) {
      if ((1 & t && (e = u(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (u.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          u.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (u.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return u.d(t, "a", t), t;
    }),
    (u.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (u.p = "/"),
    (u.oe = function(e) {
      throw (console.error(e), e);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var d = 0; d < l.length; d++) t(l[d]);
  var f = s;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r),
      n.d(r, "namespaced", function() {
        return M;
      }),
      n.d(r, "state", function() {
        return F;
      }),
      n.d(r, "mutations", function() {
        return G;
      }),
      n.d(r, "actions", function() {
        return J;
      }),
      n.d(r, "getters", function() {
        return H;
      });
    var a = {};
    n.r(a),
      n.d(a, "namespaced", function() {
        return K;
      }),
      n.d(a, "state", function() {
        return z;
      }),
      n.d(a, "mutations", function() {
        return Q;
      }),
      n.d(a, "actions", function() {
        return W;
      }),
      n.d(a, "getters", function() {
        return X;
      });
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var o = n("2b0e"),
      i = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-app",
          [
            e.loggedIn ? n("AppBar", { staticClass: "mb-5" }) : e._e(),
            n("v-main", { staticClass: "mt-5" }, [n("router-view")], 1),
          ],
          1
        );
      },
      c = [],
      u = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(
              "v-app-bar",
              { attrs: { absolute: "", color: "primary", dark: "" } },
              [
                n("v-app-bar-nav-icon"),
                n("v-toolbar-title", [e._v("AppBar")]),
                n("v-spacer"),
                n(
                  "div",
                  {
                    staticClass: "d-flex mr-5 cursor",
                    attrs: { align: "center" },
                    on: {
                      click: function(t) {
                        return e.setNameDialog(!e.dialog);
                      },
                    },
                  },
                  [e._v(" " + e._s(e.user) + " ")]
                ),
                n(
                  "v-btn",
                  { attrs: { color: "primary" }, on: { click: e.logout } },
                  [e._v("ออกจากระบบ")]
                ),
              ],
              1
            ),
            n("NameDialog", { attrs: { user: e.user } }),
          ],
          1
        );
      },
      l = [],
      s = n("5530"),
      d = n("2f62"),
      f = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "v-row",
          { attrs: { justify: "center" } },
          [
            n(
              "v-dialog",
              {
                attrs: { "max-width": "290" },
                model: {
                  value: e.dialog,
                  callback: function(t) {
                    e.dialog = t;
                  },
                  expression: "dialog",
                },
              },
              [
                n(
                  "v-card",
                  [
                    n("v-card-title", { staticClass: "headline" }, [
                      e._v("เปลี่ยนชื่อ"),
                    ]),
                    n(
                      "v-card-text",
                      [
                        n("v-text-field", {
                          model: {
                            value: e.editUser,
                            callback: function(t) {
                              e.editUser = t;
                            },
                            expression: "editUser",
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      "v-card-actions",
                      [
                        n("v-spacer"),
                        n(
                          "v-btn",
                          {
                            attrs: { color: "green darken-1", text: "" },
                            on: { click: e.cancel },
                          },
                          [e._v(" Cancel ")]
                        ),
                        n(
                          "v-btn",
                          {
                            attrs: { color: "green darken-1", text: "" },
                            on: { click: e.editUserFunc },
                          },
                          [e._v(" Edit ")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      p = [],
      m = {
        props: { user: String },
        data: function() {
          return { editUser: this.user };
        },
        methods: {
          editUserFunc: function() {
            this.$store.dispatch("login/edit", this.editUser),
              (this.dialog = !1);
          },
          cancel: function() {
            this.dialog = !1;
          },
        },
        computed: {
          dialog: {
            get: function() {
              return this.$store.state.dialog;
            },
            set: function(e) {
              this.$store.dispatch("setNameDialog", e);
            },
          },
        },
      },
      b = m,
      g = n("2877"),
      h = n("6544"),
      v = n.n(h),
      T = n("8336"),
      E = n("b0af"),
      A = n("99d9"),
      _ = n("169a"),
      D = n("0fd9"),
      S = n("2fa4"),
      y = n("8654"),
      k = Object(g["a"])(b, f, p, !1, null, null, null),
      O = k.exports;
    v()(k, {
      VBtn: T["a"],
      VCard: E["a"],
      VCardActions: A["a"],
      VCardText: A["b"],
      VCardTitle: A["c"],
      VDialog: _["a"],
      VRow: D["a"],
      VSpacer: S["a"],
      VTextField: y["a"],
    });
    var x = {
        name: "AppBar",
        components: { NameDialog: O },
        methods: Object(s["a"])(
          {
            logout: function() {
              var e = this;
              this.$store.dispatch("login/logout").then(function() {
                return e.$router.push({ name: "Login" });
              });
            },
          },
          Object(d["b"])(["setNameDialog"])
        ),
        computed: Object(s["a"])(
          {},
          Object(d["d"])({
            user: function(e) {
              return e.login.user;
            },
            dialog: "dialog",
          })
        ),
      },
      w = x,
      B = (n("9a5f"), n("40dc")),
      L = n("5bc1"),
      j = n("2a7f"),
      C = Object(g["a"])(w, u, l, !1, null, "036b835e", null),
      I = C.exports;
    v()(C, {
      VAppBar: B["a"],
      VAppBarNavIcon: L["a"],
      VBtn: T["a"],
      VSpacer: S["a"],
      VToolbarTitle: j["a"],
    });
    var U = {
        name: "App",
        components: { AppBar: I },
        data: function() {
          return {};
        },
        computed: Object(d["c"])("login", ["loggedIn"]),
      },
      V = U,
      P = n("7496"),
      R = n("f6c4"),
      $ = Object(g["a"])(V, i, c, !1, null, null, null),
      N = $.exports;
    v()($, { VApp: P["a"], VMain: R["a"] });
    n("45fc"), n("d3b7");
    var q = n("8c4f"),
      M = !0,
      F = { user: "" },
      G = {
        SET_USER: function(e, t) {
          (e.user = t), localStorage.setItem("user", t);
        },
        EDIT_USER: function(e, t) {
          (e.user = t),
            localStorage.removeItem("user"),
            localStorage.setItem("user", t);
        },
        CLEAR_USER: function() {
          (F.user = null), localStorage.removeItem("user"), location.reload();
        },
      },
      J = {
        login: function(e, t) {
          var n = e.commit;
          n("SET_USER", t);
        },
        logout: function(e) {
          var t = e.commit;
          t("CLEAR_USER");
        },
        edit: function(e, t) {
          var n = e.commit;
          n("EDIT_USER", t);
        },
      },
      H = {
        loggedIn: function(e) {
          return !!e.user;
        },
      },
      K = (n("7db0"), n("c740"), n("a434"), !0),
      z = { tables: [] },
      Q = {
        SET_DATA_TABLES: function(e, t) {
          e.tables = t;
        },
        CREATE_DATA_TABLE: function(e, t) {
          e.tables.push(t);
        },
        SET_DATA_TABLE: function(e, t) {
          e.table = t;
        },
        UPDATE_DATA_TABLE: function(e, t, n) {
          e.tables.splice(t, 1, n);
        },
        DELETE_DATA_TABLE: function(e, t) {
          e.tables.splice(t, 1);
        },
      },
      W = {
        setDataTables: function(e, t) {
          var n = e.commit;
          n("SET_DATA_TABLES", t);
        },
        getDataTable: function(e, t) {
          var n = e.commit,
            r = e.getters,
            a = r.findDataTableByID(t);
          return n("SET_DATA_TABLE", a), a;
        },
        createDataTable: function(e, t) {
          var n = e.commit;
          n("CREATE_DATA_TABLE", t);
        },
        updateDataTable: function(e, t) {
          var n = e.commit,
            r = e.getters,
            a = r.indexOfTarget(t.id);
          n("UPDATE_DATA_TABLE", a, t);
        },
        deleteDataTable: function(e, t) {
          var n = e.commit,
            r = e.getters,
            a = r.indexOfTarget(t.id);
          n("DELETE_DATA_TABLE", a);
        },
      },
      X = {
        getDataTables: function(e) {
          return e.tables;
        },
        findDataTableByID: function(e) {
          return function(t) {
            return e.tables.find(function(e) {
              return e.id === t;
            });
          };
        },
        indexOfTarget: function(e) {
          return function(t) {
            return e.tables.findIndex(function(e) {
              return e.id === t;
            });
          };
        },
      };
    o["a"].use(d["a"]);
    var Y = new d["a"].Store({
      modules: { login: r, table: a },
      state: { dialog: null },
      mutations: {
        SET_NAME_DIALOG: function(e, t) {
          e.dialog = t;
        },
      },
      actions: {
        setNameDialog: function(e, t) {
          var n = e.commit;
          n("SET_NAME_DIALOG", t);
        },
      },
    });
    o["a"].use(q["a"]);
    var Z = [
        {
          path: "/",
          name: "Login",
          component: function() {
            return n.e("chunk-36cda554").then(n.bind(null, "a55b"));
          },
        },
        {
          path: "/data-table",
          name: "DataTable",
          meta: { requiresAuth: !0 },
          component: function() {
            return Promise.all([
              n.e("chunk-d3248680"),
              n.e("chunk-e6b9c7be"),
            ]).then(n.bind(null, "27e1"));
          },
        },
        {
          path: "/detail/:id",
          name: "Detail",
          meta: { requiresAuth: !0 },
          props: !0,
          component: function() {
            return Promise.all([
              n.e("chunk-d3248680"),
              n.e("chunk-66b7e6eb"),
            ]).then(n.bind(null, "c84b"));
          },
          beforeEnter: function(e, t, n) {
            Y.dispatch("table/getDataTable", e.params.id).then(function(t) {
              (e.params.table = t), n();
            });
          },
        },
      ],
      ee = new q["a"]({ mode: "history", base: "/", routes: Z });
    ee.beforeEach(function(e, t, n) {
      var r = localStorage.getItem("user");
      e.matched.some(function(e) {
        return e.meta.requiresAuth;
      }) && !r
        ? n("/")
        : n();
    });
    var te = ee,
      ne = n("f309");
    o["a"].use(ne["a"]);
    var re = new ne["a"]({});
    (o["a"].config.productionTip = !1),
      new o["a"]({
        router: te,
        store: Y,
        vuetify: re,
        created: function() {
          var e = localStorage.getItem("user");
          e && this.$store.commit("login/SET_USER", e);
        },
        render: function(e) {
          return e(N);
        },
      }).$mount("#app");
  },
  "9a5f": function(e, t, n) {
    "use strict";
    var r = n("ccf1"),
      a = n.n(r);
    a.a;
  },
  ccf1: function(e, t, n) {},
});
//# sourceMappingURL=app.90bc1eb0.js.map
