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
          <v-btn v-on:click="login()" class="ma-2" outlined color="indigo">Giriş</v-btn>
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
    email: "",
    password: "",
    show: false
  }),
  methods: {
    login() {
        Worker.methods.login(this.email, this.password);
    }
  }
};
</script>

<style>
</style>
