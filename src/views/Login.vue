<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-text-field
                label="ชื่อเล่น"
                prepend-icon="mdi-account"
                type="text"
                v-model="name"
                :rules="[(v) => !!v || 'Name is required']"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  components: {},
  data() {
    return {
      valid: true,
      name: "",
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate())
        this.$store
          .dispatch("login/login", this.name)
          .then(() => this.$router.push({ name: "DataTable" }));
    },
  },
};
</script>
