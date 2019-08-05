<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <add-campaign></add-campaign>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavigationBar.vue";
import AddCampaign from "../components/AddCampaign.vue";

export default {
  name: "addCampaignPage",
  components: {
    NavBar,
    AddCampaign
  }
};
</script>
