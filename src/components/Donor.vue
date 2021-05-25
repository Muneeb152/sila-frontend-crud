<!-- In this Component we are creating a customer listing screen in which we are using a datatable 
and some crude opertions on custome listing table -->

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
            >Donor Listing
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-card-title class="mr-15">
            <!---------Search Bar----------->
            <v-text-field
              v-model="search"
              dark
              append-icon="mdi-magnify"
              label="Search Donor"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-dialog v-model="dialog" max-width="500px" persistent >
            <template v-slot:activator="{ on, attrs }">
              <!---------Add Customer Button----------->
              <v-btn color="primary" dark class="ma-2" v-bind="attrs" v-on="on">
                +Add Donor
              </v-btn>
            </template>
            <!---------Add/Edit Customer Card----------->
            <v-card shaped rounded>
              <v-card-title>
                <span class="headline " style="color:blue">{{ formTitle }}</span>
                <v-spacer></v-spacer>

                <v-btn icon @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
                           <v-divider></v-divider>
              <br />
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" xs="2">
                      <!--------- Text Field Customer Name----------->
                      <v-text-field
                        outlined
                        dense
                        persistent-hint
                        required
                        v-model="customerDetail.name"
                        label="Customer Name"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" xs="2">
                      <!--------- Text Field Customer Email----------->
                      <v-text-field
                        outlined
                        dense
                        required
                        v-model="customerDetail.CustomerEmail"
                        label="Customer Email"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="12" xs="2"> </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <!---------Cancel Button----------->
                <v-btn text color="info" @click="close"  dark class="mb-2">
                  Cancel
                </v-btn>
                <!---------Save Button----------->
                <v-btn color="info" @click="save" dark class="mb-2">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px" persistent>
            <!---------Delete DialogBox----------->
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <!---------Cancel Button----------->
                <v-btn color="info" text @click="closeDelete">Cancel</v-btn>
                <!---------OK Button----------->
                <v-btn color="error" text @click="deleteItemConfirm"
                  >Delete</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <!---------Edit Icon----------->
        <v-icon class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <!---------Delete Icon----------->
        <v-icon @click="deleteItem(item.CustomerId)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    search: "",
    headers: [
      {
        text: "Donor Id",
        align: "start",
        sortable: true,
        value: "CustomerId",
      },
      { text: "Donor Name", value: "name" },
      { text: "Donor Email", value: "CustomerEmail", sortable: false },
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
