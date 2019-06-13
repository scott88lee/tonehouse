<template>
  <div class="login">
    <h1>Log-in page</h1>

    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

    Username:
    <input v-model="user.email" placeholder="Your signup email" /><br />
    Password:
    <input type="password" v-model="user.pass" placeholder="Your password" /><br />

    <p>Message is: {{ user }}</p>
    <button @click="submit">Submit</button>
  
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        email: "",
        pass: ""
      },
      errors: []
    };
  },
  methods: {
    submit() {
      this.errors = []; //Resets errors
      //validations      
      if (!this.user.email) {
        this.errors.push('Username required.');
      }
      if (!this.user.pass) {
        this.errors.push('Password required.');
      }


      if (this.errors.length == 0){
        axios
        .post("http://127.0.0.1:3000/login", this.user)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    }
  }
};
</script>
