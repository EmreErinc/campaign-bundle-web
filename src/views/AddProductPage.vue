<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <add-product></add-product>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavigationBar.vue";
import AddProduct from "../components/AddProduct.vue";

export default {
  name: "addProductPage",
  components: {
    NavBar,
    AddProduct
  }
};
</script>
