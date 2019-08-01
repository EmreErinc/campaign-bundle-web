<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <detail></detail>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavigationBar.vue";
import Detail from "../components/Detail.vue";

export default {
  name: "detailPage",
  components: {
    NavBar,
    Detail
  }
};
</script>
