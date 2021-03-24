<template>
  <v-container text-xs-center mt-5 pt-5>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm5>
        <h1>Welcome Back !</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <!-- <v-card color="#0B7189" dark>
          <v-container>
            <v-form>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon="face"
                    label="Username"
                    type="text"
                    required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

                <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    prepend-icon="extension"
                    label="Password"
                    type="password"
                    required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

                <v-layout row>
                <v-flex xs12>
               <v-btn color="accent" types="submit" >
                  Signin
               </v-btn>
               <h3>
                     Already have an account ?
                     <router-link > SignUp </router-link>
               </h3>   
                     
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-card> -->
         <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleSigninUser">
          <v-text-field 
            label="Username" 
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Sign In",

  data() {
        return {
              username:"",
              password:""
        }
  },

  methods: {
        handleSigninUser(){
              this.$store.dispatch('signinUser',{
                username:this.username,
                password:this.password    
              })
        }
  },
};
</script>
<style>
</style>