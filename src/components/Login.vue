<template>
  <v-container grid-list-xl fluid>
    <v-layout wrap>
      <v-flex xs12 sm6>
        <v-form>
          <v-text-field class="input-group--focused" v-model="email" label="Mail"></v-text-field>
          <v-text-field
            class="input-group--focused"
            v-model="password"
            :type="'password'"
            label="Parola"
          ></v-text-field>
          <v-btn v-on:click="login()" class="ma-2" outlined color="indigo">Login</v-btn>
        </v-form>
      </v-flex>
      <v-flex xs12></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Worker from "../worker/Worker.js";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    login() {
        var request = {
            email: this.email,
            password: this.password
        }

        Worker.methods.login(request);
    }
  }
};
</script>

<style>
</style>
