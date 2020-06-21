<template>
  <v-dialog v-model="dataDialog" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Add Data</span>
      </v-card-title>
      <v-form ref="form" v-model="valid">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="first_name"
                  v-model="newData.first_name"
                  :rules="firstNameRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="last_name"
                  v-model="newData.last_name"
                  :rules="lastNameRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="age"
                  v-model="newData.age"
                  :rules="ageRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-radio-group
                  v-model="newData.sex"
                  :rules="sexRules"
                  :mandatory="false"
                >
                  <v-row>
                    <v-col cols="3"><p>sex</p></v-col>
                    <v-col cols="4">
                      <v-radio label="Male" value="M"></v-radio>
                    </v-col>
                    <v-col cols="4"
                      ><v-radio label="Femail" value="F"></v-radio
                    ></v-col>
                  </v-row>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="email"
                  v-model="newData.email"
                  :rules="emailRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="tel"
                  v-model="newData.tel"
                  :rules="telRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-select
                  label="status"
                  :items="items"
                  v-model="newData.status"
                  :rules="statusRules"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="remark"
                  v-model="newData.remark"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="create">Create</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { formValidateMixins } from "@/mixins/formValidateMixins";
export default {
  mixins: [formValidateMixins],
  data() {
    return {
      items: ["active", "deactive"],
      valid: true,
      newData: {
        first_name: "",
        last_name: "",
        age: null,
        sex: "",
        email: "",
        tel: "",
        status: "",
        remark: "",
      },
    };
  },
  methods: {
    create() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("table/createDataTable", this.newData);
        this.dataDialog = false;
      }
    },
    cancel() {
      this.dataDialog = false;
    },
  },
  computed: {
    dataDialog: {
      get() {
        return this.$store.state.dataDialog;
      },
      set(value) {
        this.$store.dispatch("setCreateDataDialog", value);
      },
    },
  },
};
</script>

<style></style>
