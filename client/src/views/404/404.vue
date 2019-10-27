<template>
  <div>
    ROUTE NOT FOUND
    <button @click="goHome">GO HOME</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
</style>
