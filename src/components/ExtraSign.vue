<template>
  <!-- --------------Mian Container outsider with contain heading text----------- -->
  <v-container>
    <!-- -------------------------Signup outer Form strat from here------------------------ -->
     <v-app>
        <!-- ------------------------Inner container strat from here-------------- -->
        <v-container>
          <v-layout wrap>
            <v-flex sm12 md6 offset-md3>
              <!-- --------------------------Sign up card start from here------------------- -->
              <v-card class="mx-auto pa-5 pt-0 pb-0" elevation="4" light tag="section" width="90%" rounded.lg>
                <v-card-title>
                  <h3 class="display-1">Sign up</h3>
                </v-card-title>
                <v-card-text>
                  <!-- -------------------------Signup Main Form strat from here------------------------ -->
                  <v-form v-model="isValid" lazy-validation>
                    <v-row>
                      <!-- --------------------input fields form start from here-------------------- -->
                      <v-col cols="12" md="6" sm="6">
                        <v-text-field outlined class="mb-n8" dense label="FirstName" type="text" v-model="firstname"
                          :rules="nameRules" color="#1652f0">
                        </v-text-field>
                      </v-col>
                      &nbsp;
                      <v-col cols="12" md="6" sm="6">
                        <v-text-field outlined dense class="mb-n8" label="Lastname" type="text" v-model="lastname"
                          :rules="nameRules" color="#1652f0">
                        </v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field v-model="phone" :rules="phoneRules" type="number" label="Phone No" maxlength="11"
                          counter="11" required outlined dense class="mb-n8" color="#1652f0">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field outlined dense class="mb-n8" label="Email" type="text" v-model="email"
                          :rules="emailRules" color="#1652f0">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field outlined dense class="mb-n8" v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password"
                          hint="At least 6 characters" @click:append="show1 = !show1" required color="#1652f0">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field dense outlined v-model="verify" class="mb-n8"
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.passwordMatch]"
                          :type="show2 ? 'text' : 'password'" name="input-10-1" label="Confirm Password"
                          @click:append="show2 = !show2" required color="#1652f0">
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <!-- --------------------input fields form end here-------------------- -->
                
        <!-- --------------------radio button start from here------------------ -->
         
          <v-radio-group v-model="Employes" 
                  row  
                  :rules="[rules.required]" 
                  class="pa-0 pt-2 mb-n8"
                   >
            <!-- ---------------------Employee Start----------------- -->     
            <v-flex class="mx-auto" xs12 sm8 md4 lg4>
                  <span>Employee</span>
                  <v-radio  value="Employee" class="float-right" :rules="[value => !value || 'Required.']"></v-radio>
                   </v-flex>
         <!-- --------------------Employer Start----------------- -->
                  <v-flex class="mx-auto" xs12 sm8 md4 lg4>
                   
                      <span>Employeer</span>
                      <v-radio value="Employeer" class="float-right"></v-radio>
                   
                  </v-flex>
                </v-radio-group>
                <!-- --------------------radio button end here------------------ -->
                <!-- ------------------checkbox start from here---------------- -->
                <v-row>
                  <v-col cols="12">
                    <v-checkbox v-model="checkbox" class="mb-n8 ml-2" 
                      :rules="[(v) => !!v || 'You must agree to continue!']" label="I agree with Terms and Conditions"
                      required color="#1652f0"></v-checkbox>
                  </v-col>
                  <!-- ------------------checkbox end here---------------- -->

                  <!-- ---------------Create button with validation start from here-------- -->
                  <v-col cols="12">
                    <v-card-actions>

                      <v-btn class="pa-6 mx-auto d-flex justify-center white--text" block color="#1652f0"
                        :disabled=" firstname.length == 0 || lastname.length == 0 || phone.length == 0 ||  email.length == 0 || password.length == 0 || verify.length == 0 "
                        rounded
                          @click="newUser"
                          >
                        Creat Account
                      </v-btn>

                    </v-card-actions>

                  </v-col>
                  <!-- ---------------Create button with validation end here-------- -->

                  <!-- ------------------Hr Tag  with styling start from here----------- -->
                  <v-col cols="12">
                    <h3 class="or-hr">
                      <span>
                        Or
                      </span>
                    </h3>
                    <!-- ------------------Hr Tag  with styling end here----------- -->

                    <!-- ----------------------Sign in link with route start from here---------------------- -->
                    <div>
                      <h4 class="text-center white--text pb-3">
                        <router-link to="/login" class="text-decoration-none "><a class=" text-md-body-1 text-hover">
                        Have an account?&nbsp;Sign in</a>
                        </router-link>
                      </h4>
                    </div>
                    <!-- ----------------------Sign in link with route end here---------------------- -->
                    <hr />
                    <!-- ------------------Sign up card footer text start from here---------------  -->
                    <div class="foter-text">
                      <p class="text-center pa-5 pb-0 text-capitalize text-md-body-1">
                        By signing up in to your account, you agree to pf poratl
                        <a href="#" class="text-decoration-none">Terms of Service</a>
                        and consent to our
                        <a href="#" class="text-decoration-none">Cookie Policy</a>
                        <a href="#" class="text-decoration-none">and Privacy Policy</a>
                      </p>
                    </div>
                    <!-- ------------------Sign up card footer text end here---------------  -->
                  </v-col>
                </v-row>
                  </v-form>
                  <!-- -------------------------Signup Main Form end here------------------------ -->
                </v-card-text>
              </v-card>
              <!-- --------------------------Sign up card end from here------------------- -->
            </v-flex>
          </v-layout>
          {{getRegistrations}}
        </v-container>
        <!-- ------------------------Inner container end from here-------------- -->
      </v-app>
   
    <!-- -------------------------Signup outer Form strat from here------------------------ -->
    </v-container>
  <!-- --------------Mian Container outsider with contain heading text----------- -->
</template>
<script>

  import {mapActions, mapGetters } from 'vuex'
  export default {
    data() {
        return {

        //Checkbox tarms and conditions 
        checkbox: false,
        // Dailog Box open
        show1: false,
        show2: false,        
        // Form Validation
       isValid: true,
      
      // Input Fields 
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      verify: "",
      Employes:"",
      // Input Fields validtion start from here 
      nameRules: [
        (v) => !!v || "Name is required",
        // (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
        (v) => (v && v.length >= 6) || "Min 6 Characters",
      ],
      phoneRules: [
        (v) => !!v || "Phone No is Required",
        (v) => (v && v.length >= 11) || "Please Give Valid No",
      ],
      emailRules: [
        (v) => !!v || "Required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],


      // Input password Fields validation 
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) =>
          (v && /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) && v.length >= 6) ||
          "Min 6 characters Password must contain at least lowercase letter, one number, a special character and one uppercase letter",
          // Password  match validation
          passwordMatch: (v) =>
          (v && this.password === this.verify) || "Password must match",
         
        },
      };
},


 computed:
    {
        ...mapGetters(["getRegistrations"]),
    },
    methods:
    {
        ...mapActions(["Registrations"]),
        newUser()
        {
            this.Registrations({
                FirstName:this.firstname,
                LastName:this.lastname,
                Phone:this.phone,
                Email:this.email,
                Password:this.password,
                ConfirmPassword:this.verify,
                EmployeeEmployeer:this.Employes
               
            });
        }
        
    }
  };
  
</script>
<style>
  /* Hr Tag Styling Start  */

  .or-hr {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgray;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  .or-hr span {
    background: #fff;
    padding: 0 10px;
  }

  /* Hr Tag Styling End  */
  .text-hover:hover{color:#000;  transition: 0.5s;}
</style>