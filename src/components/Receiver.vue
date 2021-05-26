<!-- In this Component List of All Blood Donors are Listed -->

<template>
  <div>
    <!--------Data Table--------->
    <v-data-table
      dense
      :headers="headers"
      :items="getCustomersData"
      :search="search"
      sort-by="CustomerId"
      class="elevation-1 ma-3"
    >
      <template v-slot:top>
        <!---------Tool Bar----------->
        <v-toolbar color="red lighten-1" flat>
          <v-toolbar-title class="white--text"
            >Blood  Receiver's Listing
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-card-title class="mr-15">
            <!---------Search Bar----------->
            <v-text-field
              v-model="search"
              dark
              append-icon="mdi-magnify"
              label="Search Receiver"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{item}">
        <!---------Message Button----------->
         <v-btn
       class="red lighten-2 white--text"
       outlined
       @click="editItem(item)">
       <v-icon>message</v-icon>
        Message
      </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    receiver_id:'',
    receiver_name:'',
      Gender:'',
      Email: "",
      pasword:'',
      cpasword:'',
      City:'',
      blood:'',
      Age:'',
      cnumber:'',
    dialog: false,
    dialogDelete: false,
    search: "",
    headers: [
      {
        text: "Receiver Id",
        align: "start",
        sortable: true,
        value: "CustomerId",
      },
      { text: "Receiver Name", value: "name" },
      { text: "Gender", value: "name" },
      { text: "Age", value: "CustomerEmail"},
      { text: "Blood Group", value: "CustomerEmail"},
      { text: "City", value: "CustomerEmail"},
      { text: "Contact Number", value: "CustomerEmail", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    
    editedIndex: -1,
    customerDetail: {},
    customerId: -1,
  }),

  computed: {
    ...mapGetters(["getCustomersData"]),
    formTitle() {
      return this.editedIndex === -1 ? "Add Customer" : "Edit Customer";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    ...mapActions(["addUser", "updateUser", "removeUser"]),
    editItem(item) {
      this.editedIndex = this.getCustomersData.findIndex(
        (customer) => customer.CustomerId == item.CustomerId
      );
      this.customerDetail = item;
      this.dialog = true;
    },
    deleteItem(id) {
      this.customerId = id;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.removeUser(this.customerId);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.customerDetail = {};
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.customerId= -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        this.updateUser({
          customerIndex: this.editedIndex,
          updatedData: this.customerDetail,
        });
      } else {
        this.customerDetail.CustomerId = this.getCustomersData.length
          ? this.getCustomersData[this.getCustomersData.length - 1]
              .CustomerId + 1
          : 1;
        this.addUser(this.customerDetail);
      }
      this.close();
    },
  },
};
</script>
