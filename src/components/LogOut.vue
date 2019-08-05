<template>
  <v-label>Logging out..</v-label>
</template>

<script>
export default {
  name: "logOut",
  created() {
    this.$store.dispatch("logout", "any");
    this.$router.push('/');
  }
};
</script>

<style>
</style>
