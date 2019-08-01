<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <item-list></item-list>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavigationBar.vue";
import ItemList from "../components/ItemList.vue";

export default {
  name: "homePage",
  components: {
    NavBar,
    ItemList
  }
};
</script>
