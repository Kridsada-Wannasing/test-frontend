<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>รายชื่อลูกค้า</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="tables"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <router-link
              :to="{ name: 'Detail', params: { id: item.id } }"
              class="router-link"
            >
              <v-icon title="แก้ไข" small class="mr-2">
                mdi-pencil
              </v-icon>
            </router-link>
            <v-icon title="ลบ" small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="setCreateDataDialog(!dataDialog)">Create Data </v-btn>
      </v-col>
    </v-row>
    <CreateDataDialog />
  </v-container>
</template>
<script>
import customers from "@/db/customers";
import CreateDataDialog from "../components/CreateDataDialog";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    CreateDataDialog,
  },
  data() {
    return {
      headers: [
        {
          text: "ชื่อ-นามสกุล",
          align: "start",
          value: "first_name",
        },
        {
          text: "อายุ",
          value: "age",
        },
        {
          text: "เพศ",
          value: "sex",
        },
        {
          text: "สถานะ",
          value: "status",
        },
        {
          text: "การจัดการ",
          value: "actions",
          sortable: false,
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("table/setDataTables", customers);
  },
  methods: {
    deleteItem(item) {
      confirm(`คุณต้องการที่จะลบข้อมูลของ ${item.first_name} ใช่หรือไม่`) &&
        this.$store.dispatch("table/deleteDataTable", item);
    },
    ...mapActions(["setCreateDataDialog"]),
  },
  computed: {
    ...mapState({
      tables: (state) => state.table.tables,
      dataDialog: "dataDialog",
    }),
  },
};
</script>
<style scoped>
.router-link {
  text-decoration: none;
}
.active {
  color: green;
}
.deactive {
  color: red;
}
</style>
