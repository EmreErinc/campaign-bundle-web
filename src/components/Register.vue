<template>
  <v-container grid-list-xl fluid>
    <v-layout wrap>
      <v-flex xs12 sm6>
        <v-form>
          <v-text-field class="input-group--focused" v-model="name" label="Name"></v-text-field>
          <v-text-field class="input-group--focused" v-model="lastName" label="Last Name"></v-text-field>
          <v-text-field class="input-group--focused" v-model="email" label="Mail"></v-text-field>
          <v-text-field
            class="input-group--focused"
            v-model="password"
            :type="'password'"
            label="Parola"
          ></v-text-field>
          <v-btn v-on:click="register()" class="ma-2" outlined color="indigo">Register</v-btn>
        </v-form>
      </v-flex>
      <v-flex xs12></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Worker from "../worker/Worker.js";

export default {
  name: "register",
  data: () => ({
    name: "",
    lastName: "",
    email: "",
    password: ""
  }),
  methods: {
    register() {
      var request = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };

      Worker.methods.register(request).then(res => {
        this.$store.dispatch("changeToken", res.data.token);
        this.$store.dispatch("changeRole", res.data.role);
        this.$store.dispatch("changeAccountId", res.data.id);
        this.$router.push("Home");
      });
    }
  }
};
</script>

<style>
</style>
