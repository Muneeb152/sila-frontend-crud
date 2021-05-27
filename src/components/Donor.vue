<!-- In this Component List of All Blood Donors are Listed -->
<template>
 <!-------- Donor Data Table--------->
  <v-data-table
    :headers="headers"
    :items="getDonorsData"
    :search="search"
    sort-by="u_id"
    class="elevation-1 ma-3"
  >
    <template v-slot:top>
      <!---------Tool Bar----------->
      <v-toolbar color="red lighten-1" flat>
          <v-toolbar-title class="white--text" 
            >Blood Donor's Listing
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
        <!---------Text Fields Used to Display Data in the Data Table----------->
        <v-dialog v-model="dialog" max-width="500px" persistent>
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
                      v-model="donorDetail.u_id"
                      label="Donor Id"
                    ></v-text-field>
                  </v-col>
                  
                  <v-col cols="12" >
                    <v-text-field
                      outlined
                      dense
                      persistent-hint
                      v-model="donorDetail.blood_group"
                      label="Blood Group"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      outlined
                      dense
                      persistent-hint
                      v-model="donorDetail.name"
                      label="Donor Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      outlined
                      dense
                      persistent-hint
                      v-model="name"
                      label="Donor Address"
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
    <template v-slot:[`item.actions`]="{  }">
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
  name: "Donor",
  data: () => ({
    dialog: false,
    search: "",
    dialogDelete: false,
    dialoginfo: false,
    headers: [
       {
        text: "Donor Id",
        align: "start",
        sortable: true,
        value: "u_id",
      },
      { text: "Donor Name", value: "name", sortable: false },
      { text: "Gender", value: "gender" },
      { text: "Age", value: "age"},
      { text: "Blood Group", value: "blood_group"},
      { text: "City", value: "city"},
      { text: "Contact Number", value: "phone", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    donorId: -1,
    editedIndex: -1,
    donorDetail: {},
  }),

  computed: {
    ...mapGetters(["getDonorsData"]),
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
    ...mapActions(["addDonor"]),
    save() {
      if (this.editedIndex > -1) {
        this.updateDonor({
          donorIndex: this.editedIndex,
          updatedData: this.donorDetail,
        });
      } else {
        this.addDonor(this.donorDetail);
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
