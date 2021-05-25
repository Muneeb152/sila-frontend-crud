<!-- this component is used to create a registration page -->
<template>
  <v-card class="justify-center pt-20 pa-18" elevation="0">
    <v-row>
      <v-col cols="12" md="8" sm="6" class="mt-8 mx-auto">
        <v-card class="pa-2" max-width="70%" elevation="0" tile>
          <img class="ml-16" width="100%" height="80%" src="@/assets/donation.jpg" />
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="6" class="mt-8">
      <v-card ref="form" width="390" height="1040" class="mx-auto ml-4">
        <v-card-text>
            <div style="text-align:center; color:black">
              <h1 style="color:red">Blood Donation System</h1>
              <br>
              <br>
           <h2 class="font-weight-medium"> Sign Up</h2>
           <br>
           </div>
          <v-text-field
          class="ml-6 mr-6"
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Name"
            required
            outlined
          ></v-text-field>
             <v-select
             v-model="Gender"
             class="ml-6 mr-6"
          :items="items"
          label="Gender"
          outlined
          :rules="[() => !!Gender || 'This field is required']"
            :error-messages="errorMessages"
        ></v-select>
         <v-select
             v-model="UserType"
             class="ml-6 mr-6"
          :items="items2"
          label="User Type"
          outlined
          :rules="[() => !!UserType || 'This field is required']"
            :error-messages="errorMessages"
        ></v-select>
        <v-select
             v-model="BloodGroup"
             class="ml-6 mr-6"
          :items="items1"
          label="Blood Group"
          outlined
          :rules="[() => !!BloodGroup || 'This field is required']"
            :error-messages="errorMessages"
        ></v-select>
        <v-text-field
          class="ml-6 mr-6"
            ref="Contact NO"
            v-model="age"
            :rules="[() => !!age || 'This field is required']"
            :error-messages="errorMessages"
            label="Age"
            required
            outlined
            type="number"
          ></v-text-field>
        <v-text-field
          class="ml-6 mr-6"
            ref="city"
            v-model="city"
            :rules="[() => !!city || 'This field is required']"
            :error-messages="errorMessages"
            label="City"
            required
            outlined
          ></v-text-field>
          <v-text-field
          class="ml-6 mr-6"
            ref="Contact NO"
            v-model="contact"
            :rules="[() => !!contact || 'This field is required']"
            :error-messages="errorMessages"
            label="Contact Number"
            required
            outlined
            type="number"
          ></v-text-field>
           <v-text-field
          class="ml-6 mr-6"
            ref="email"
            v-model="email"
            :rules="emailRules"
            :error-messages="errorMessages"
            label="Email"
            required
            outlined
            type="email"
          ></v-text-field>
           <v-text-field
           v-model="pasword"
            required
            outlined
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            class="input-group--focused ml-6 mr-6"
            @click:append="show3 = !show3"
             :rules="[() => !!pasword || 'This field is required']"
            :error-messages="errorMessages"
          ></v-text-field>
          <v-text-field
           v-model="cpasword"
            required
            outlined
            :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show4 ? 'text' : 'password'"
            name="input-10-2"
            label="Confirm Password"
            class="input-group--focused ml-6 mr-6"
            @click:append="show4 = !show4"
             :rules="[() => !!cpasword || 'This field is required']"
            :error-messages="errorMessages"
          ></v-text-field>
          <br>
        </v-card-text>
        <v-card-actions class="my-n13">
            <router-link to="/"><a class="primary--text font-weight-bold ml-8" href="">LogIn to Account  </a></router-link>
          <v-spacer></v-spacer>
          <v-btn
            class="mr-7 mb-2" 
            color="primary"
            @click="signupInfo"
          >
           Signup
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
      errorMessages: '',
      name: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      country: null,
      formHasErrors: false,
      show3: false,
      show4: false,
      items: ['Male', 'Female'],
      items1: ['A+', 'A-','B+', 'B-','O+', 'O-','AB+', 'AB-'],
      items2: ['Donor', 'Recipient/Receiver'],
      email: '',
emailRules: [
  v => !!v || 'E-mail is required',
  v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
 ],
    }),

    computed: {
      form () {
        return {
          name: this.name,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          country: this.country,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `Hey! I'm required`
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
      signupInfo()
      {
       this.$router.push("/");
      },
    },
  }
</script>
<style scoped>
a{
  text-decoration: none;
}
</style>