<template>
  <div class="signup">
    <h1>Sign-up page</h1>
    Email:
    <input v-model="user.email" placeholder="Band name"><br>
    Contact number:
    <input v-model="user.number" placeholder="Contact number"><br>
    Bandname:
    <input v-model="user.bandname" placeholder="edit me"><br>
    Music Genre:
    <input v-model="user.genre" placeholder="edit me"><br>
    Number of band members:
    <input v-model="user.bandmembers" placeholder="edit me"><br>
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
        bandname: "Moron 5",
        meat: "chicken",
        sauce: "mayo"
      }
    }
  },  
  methods: {
    submit(){
      axios.post('http://127.0.0.1:3000/signup', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    },
    sayBun(){
      console.log(this.burger)
    }
  }
};
</script>