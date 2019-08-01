<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <register></register>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavigationBar.vue";
import Register from "@/components/Register.vue";

export default {
  name: "registerPage",
  components: {
    NavBar,
    Register
  },
};
</script>