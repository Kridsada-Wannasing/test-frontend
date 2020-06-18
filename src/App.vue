<template>
  <v-app>
    <AppBar class="mb-5" v-if="loggedIn" />
    <v-main class="mt-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",

  components: {
    AppBar,
  },

  data: () => ({
    //
  }),

  computed: mapGetters("login", ["loggedIn"]),
};
</script>
