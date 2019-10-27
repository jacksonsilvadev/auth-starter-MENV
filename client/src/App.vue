<template>
  <div id="app">
    <div id="nav">
      <template v-if="getToken()">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <a href="#" @click="logout()">Logout</a>
      </template>
      <template v-else>
        <router-link to="/signup">Signup</router-link>|
        <router-link to="/login">Login</router-link>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
export default {
  data() {
    return {
      login: false
    };
  },
  created() {
    this.getToken();
  },
  methods: {
    logout() {
      this.$store
        .dispatch("user/logout")
        .then(() => this.$router.push("/login"))
        .catch(err => console.log(err));
    },
    getToken() {
      var token = getToken();
      return token;
    }
  }
};
</script>

<style lang="scss">
</style>
