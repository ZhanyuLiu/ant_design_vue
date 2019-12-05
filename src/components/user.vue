<template>
  <div>
    <input>
    <h2>{{userid}}</h2>
  </div>
</template>

<script>
  export default {
    name: "user",
    computed: {
      userid() {
        return this.$route.params.abc
      }
    }
  }
</script>

<style scoped>

</style>