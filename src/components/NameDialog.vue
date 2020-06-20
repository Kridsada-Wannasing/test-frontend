<template>
  <v-row justify="center">
    <v-dialog v-model="nameDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">เปลี่ยนชื่อ</v-card-title>

        <v-card-text>
          <v-text-field v-model="editUser" />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="cancel">
            Cancel
          </v-btn>

          <v-btn color="green darken-1" text @click="editUserFunc">
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    user: String,
  },
  data() {
    return {
      editUser: this.user,
    };
  },
  methods: {
    editUserFunc() {
      this.$store.dispatch("login/edit", this.editUser);
      this.nameDialog = false;
    },
    cancel() {
      this.nameDialog = false;
    },
  },
  computed: {
    nameDialog: {
      get() {
        return this.$store.state.nameDialog;
      },
      set(value) {
        this.$store.dispatch("setNameDialog", value);
      },
    },
  },
};
</script>

<style></style>
