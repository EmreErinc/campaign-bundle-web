<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <nav>
        <router-link class="spacing"
          v-for="routes in links"
          v-bind:key="routes.id"
          :to="`${routes.page}`"
        >{{routes.text}}</router-link>
      </nav>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Cart',
          page:'/cart'
        },
        {
          id: 2,
          text: 'Login',
          page:'/login'
        },
        {
          id: 3,
          text: 'Register',
          page:'/register'
        }
      ]
    }
  }
}
</script>

<style> 
  .spacing { 
    margin-right: 10px; 
    text-decoration: none;
  }
</style>
