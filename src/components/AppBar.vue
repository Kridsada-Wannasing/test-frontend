<template>
  <div>
    <v-app-bar absolute color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>AppBar</v-toolbar-title>

      <v-spacer></v-spacer>
      <div
        class="d-flex mr-5 cursor"
        align="center"
        @click="setDialog(!dialog)"
      >
        {{ user }}
      </div>
      <v-btn color="primary" @click="logout">ออกจากระบบ</v-btn>
    </v-app-bar>
    <NameDialog :user="user" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NameDialog from "./NameDialog";
export default {
  name: "AppBar",
  components: { NameDialog },
  methods: {
    logout() {
      this.$store
        .dispatch("login/logout")
        .then(() => this.$router.push({ name: "Login" }));
    },
    ...mapActions(["setDialog"]),
  },
  computed: {
    ...mapState({
      user: (state) => state.login.user,
      dialog: "dialog",
    }),
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
