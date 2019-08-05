<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <nav>
        <!-- <router-link
          class="spacing"
          v-for="routes in links"
          v-bind:key="routes.id"
          :to="`${routes.page}`"
        >{{routes.text}}</router-link>-->

        <template v-if="isUser()">
          <router-link
            class="spacing"
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >{{routes.text}}</router-link>
        </template>

        <template v-if="isSeller()">
          <router-link
            class="spacing"
            v-for="routes in sellerLinks"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >{{routes.text}}</router-link>
        </template>

        <template v-if="isGuest()">
          <router-link
            class="spacing"
            v-for="routes in guestLinks"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >{{routes.text}}</router-link>
        </template>
      </nav>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home",
          page: "/"
        },
        {
          id: 1,
          text: "Cart",
          page: "/cart"
        },
        {
          id: 2,
          text: "LogOut",
          page: "/logout"
        },
      ],
      sellerLinks: [
        {
          id: 0,
          text: "Home",
          page: "/"
        },
        {
          id: 1,
          text: "Add Product",
          page: "/addProduct"
        },
        {
          id: 2,
          text: "Add Campaign",
          page: "/addCampaign"
        },
        {
          id: 3,
          text: "LogOut",
          page: "/logout"
        },
      ],
      guestLinks: [
        {
          id: 0,
          text: "Home",
          page: "/"
        },
        {
          id: 2,
          text: "Login",
          page: "/login"
        },
        {
          id: 3,
          text: "Register",
          page: "/register"
        }
      ]
    };
  },
  methods: {
    isUser() {
      return this.$store.getters.getRole == "USER" ? true : false;
    },
    isSeller() {
      return this.$store.getters.getRole == "SELLER" ? true : false;
    },
    isGuest() {
      return this.$store.getters.getRole == "" ? true : false;
    }
  }
};
</script>

<style>
.spacing {
  margin-right: 10px;
  text-decoration: none;
}
</style>
