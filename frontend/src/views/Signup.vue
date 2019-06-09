<template>
  <div class="signup">
    <h1>Sign-up page</h1>

    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

    Bandname:
    <input v-model="user.bandname" placeholder="edit me" /><br />
    Music Genre:
    <input v-model="user.genre" placeholder="edit me" /><br />
    Number of band members:
    <input v-model="user.bandmembers" placeholder="edit me" /><br />

    Contact person:
    <input v-model="user.contactperson" placeholder="Band name" /><br />
    Contact number:
    <input v-model="user.number" placeholder="Contact number" /><br />

    Email:
    <input v-model="user.email" placeholder="Band name" /><br />

    Password:
    <input v-model="user.pass" placeholder="edit me" /><br />
    Confirm password:
    <input v-model="user.pass2" placeholder="edit me" /><br />

    <p>Message is: {{ user }}</p>
    <button @click="submit">Submit</button>
    <button @click="sayBun">Say bun</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        bandname: "",
        approval: "Pending"
      },
      errors: []
    };
  },
  methods: {
    submit() {
      this.errors = []; //Resets errors
      //validations      
      if (!this.user.bandname) {
        this.errors.push('Bandname required.');
      }
      if (!this.user.email) {
        this.errors.push('Email required.');
      }


      if (this.errors.length == 0){
        axios
        .post("http://127.0.0.1:3000/signup", this.user)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    },
    sayBun() {
      console.log(this.burger);
    }
  }
};
</script>
