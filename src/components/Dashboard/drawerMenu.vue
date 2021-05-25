<!-- This component is bulding two lists one is foe use data who loged in into system and otheis fo the navigation menu -->
<template>
  <!---------------------------Drawer Card ---------------------------------->
  <v-card elevation="0" color="red darken-1" height="100vh">
    <v-list>
      <v-list-item class="justify-center">
        <v-avatar color="white" rounded size="42"
          ><span class="primary--text text-center"></span></v-avatar
        >
      </v-list-item>

      <v-list-item class="text-center">
        <v-list-item-content>
          <v-list-item-title class="title">
            
          </v-list-item-title>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="fetchData(item)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <!-- loader -->
    <v-dialog v-model="loader" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text class="text-center">
          Loading...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0 mt-1"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    user: {
      initials: "AD",
      fullName: "Muneeb Akhtar",
      userDesgnation: "Admin",
    },
    loader: false,
    items: [
      { title: "Dashboard", linkTo: "/dashboard", icon: "dashboard" },
      { title: "Donors", linkTo: "/", icon: "groups" },
      { title: "Receiver", linkTo: "/", icon: "groups" },
    ],
    employeeData: {
      empName: " ",
      empID: "",
      empEmail: " ",
    },
  }),
  computed: {
    ...mapGetters(["getSignInCredentials"]),

    getInitials() {
      console.log(this.getSignInCredentials);
      let name = this.getSignInCredentials.FullName;
      name = name.split(" ");
      let characters = "";
      if (name.length > 1) {
        for (let index = 0; index < name.length; index++) {
          characters += name[index][0];
        }
        return characters;
      }

      return (
        this.getSignInCredentials.FullName[0] +
        this.getSignInCredentials.FullName[1]
      );
    },
  },
  methods: {
    ...mapActions(["getTranscations", "getVendor" ,"getCustomersData"]),
    fetchData(item) {
      if (item.title == "Transactions") {
        this.loader = true;
        this.getTranscations().then(
          (response) => {
            if (response.status == 200) {
              this.loader = false;
              this.$router.push("/transaction-page");
            }
          },
          (error) => {
            console.log("error::", error);
            this.loader = false;
          }
        );
      } else if (item.title == "Vendors") {
        this.loader = true;
        this.getVendor().then(
          (response) => {
            if (response.status == 200) {
              this.loader = false;
              this.$router.push("/vendor-page").catch(() => {});
            }
          },
          (error) => {
            console.log("error::", error);
            this.loader = false;
          }
        );
      } else if (item.title == "Invoice") {
        this.loader = false;
        this.$router.push("/invoice-page").catch(() => {});
        // this.getInvoicesData().then(
        //   (response) => {
        //     if (response.status == 200) {
        //       this.loader = false;
        //       this.$router.push("/invoice-page").catch(() => {});
        //     }
        //   },
        //   (error) => {
        //     console.log("error::", error);
        //     this.loader = false;
        //   }
        // );
      } else if (item.title == "Employees") {
        this.loader = false;
        this.$router.push("/employee-page").catch(() => {});
        // this.getInvoicesData().then(
        //   (response) => {
        //     if (response.status == 200) {
        //       this.loader = false;
        //       this.$router.push("/invoice-page").catch(() => {});
        //     }
        //   },
        //   (error) => {
        //     console.log("error::", error);
        //     this.loader = false;
        //   }
        // );
      } else if (item.title == "Products") {
        this.loader = false;
        this.$router.push("/product-page").catch(() => {});
        // this.getInvoicesData().then(
        //   (response) => {
        //     if (response.status == 200) {
        //       this.loader = false;
        //       this.$router.push("/invoice-page").catch(() => {});
        //     }
        //   },
        //   (error) => {
        //     console.log("error::", error);
        //     this.loader = false;
        //   }
        // );
      }
      else if (item.title == "Customers") {
        this.loader = false;
        this.$router.push("/customer-page").catch(() => {});
        
      }
    },
  },
};
</script>
