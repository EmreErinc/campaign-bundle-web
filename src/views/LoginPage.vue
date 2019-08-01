<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <login></login>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavigationBar.vue";
import Login from "@/components/Login.vue";

export default {
  name: "loginPage",
  components: {
    NavBar,
    Login
  },
};
</script>