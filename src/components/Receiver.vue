<!-- In this Component List of All Blood Receivers are Listed -->
<template>
 <!-------- Donor Data Table--------->
  <v-data-table
    :headers="headers"
    :items="getReceiversData"
    :search="search"
    sort-by="u_id"
    class="elevation-1 ma-3"
  >
    <template v-slot:top>
      <!---------Tool Bar----------->
      <v-toolbar color="red lighten-1" flat>
          <v-toolbar-title class="white--text" 
            >Blood Receiver's Listing
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
        <v-dialog v-model="dialog" max-width="500px" persistent>
        <!---------Text Fields Used to Display Data in the Data Table----------->
          <v-card>
            <v-divider></v-divider>
            <br />
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" >
                    <v-text-field
                      outlined
                      dense
                      persistent-hint
                      v-model="receiverDetail.u_id"
                      label="Receiver Id"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" >
                    <v-text-field
                      outlined
                      dense
                      persistent-hint
                      v-model="receiverDetail.blood_group"
                      label="Blood Group"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      outlined
                      dense
                      persistent-hint
                      v-model="receiverDetail.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      outlined
                      dense
                      persistent-hint
                      v-model="name"
                      label="City"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <!-------------------------------Message Button-------------------------------->
    <template v-slot:[`item.actions`]="{ }">
       <v-btn
       class="red lighten-2 white--text"
       outlined
       @click="chat">
        Message
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Receiver",
  data: () => ({
    dialog: false,
    search: "",
    dialogDelete: false,
    dialoginfo: false,
    headers: [
       {
        text: "Receiver Id",
        align: "start",
        sortable: true,
        value: "u_id",
      },
      { text: "Receiver Name", value: "name", sortable: false },
      { text: "Gender", value: "gender" },
      { text: "Age", value: "age"},
      { text: "Blood Group", value: "blood_group"},
      { text: "City", value: "city"},
      { text: "Contact Number", value: "phone", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    receiverId: -1,
    editedIndex: -1,
    receiverDetail: {},
  }),

  computed: {
    ...mapGetters(["getReceiversData"]),
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialoginfo(val) {
      val || this.close();
    },
  },

  methods: {
    ...mapActions(["addReceiver"]),
    save() {
      if (this.editedIndex > -1) {
        this.updateReceiver({
          ReceiverIndex: this.editedIndex,
          updatedData: this.doctorDetail,
        });
      } else {
        this.addReceiver(this.receiverDetail);
      }
      this.close();
    },
     chat()
    {
      this.$router.push("/Chat")
    },
  },
};
</script>
