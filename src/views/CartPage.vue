<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <cart></cart>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavigationBar.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "cartPage",
  components: {
    NavBar,
    Cart
  }
};
</script>
