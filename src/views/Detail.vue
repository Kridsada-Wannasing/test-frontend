<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Detail</h1>
      </v-col>
    </v-row>
    <v-form>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            label="first_name"
            v-model="editTable.first_name"
            outlined
            :readonly="readOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="last_name"
            v-model="editTable.last_name"
            outlined
            :readonly="readOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="age"
            v-model="editTable.age"
            outlined
            :readonly="readOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="sex"
            v-model="editTable.sex"
            outlined
            :readonly="readOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="email"
            v-model="editTable.email"
            outlined
            :readonly="readOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="tel"
            v-model="editTable.tel"
            outlined
            :readonly="readOnly"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            label="status"
            :items="items"
            v-model="editTable.status"
            outlined
            :readonly="readOnly"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="remark"
            v-model="editTable.remark"
            outlined
            :readonly="readOnly"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="readOnly" @click="edit" cols="12" md="1">
          <v-btn>แก้ไข</v-btn>
        </v-col>
        <v-col v-else @click="save" cols="12" md="1">
          <v-btn>บันทึกการเปลี่ยนแปลง</v-btn>
        </v-col>
        <v-col @click="cancel" cols="12" md="1">
          <v-btn>ยกเลิก</v-btn>
        </v-col>
        <v-col @click="remove" cols="12" md="1">
          <v-btn>ลบ</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  props: {
    table: Object,
  },
  data() {
    return {
      editTable: this.table,
      readOnly: true,
      items: ["active", "deactive"],
    };
  },
  created() {
    this.cachedTable = Object.assign({}, this.table);
  },
  methods: {
    edit() {
      this.readOnly = false;
    },
    save() {
      this.editTable.age = parseInt(this.editTable.age);
      this.$store.dispatch("table/updateDataTable", this.editTable).then(() => {
        alert("บันทึกสำเร็จ");
        this.$router.push({ name: "DataTable" });
      });
      this.readOnly = true;
    },
    cancel() {
      this.editTable = Object.assign({}, this.cachedTable);
      this.readOnly = true;
    },
    remove() {
      confirm("คุณต้องการลบหรือไม่") &&
        this.$store
          .dispatch("table/deleteDataTable", this.editTable)
          .then(() => this.$router.push({ name: "DataTable" }));
    },
  },
};
</script>

<style scoped></style>
