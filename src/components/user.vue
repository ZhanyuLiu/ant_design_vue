<template>
  <div>
<!--    <input>-->
<!--    <h2>{{userid}}</h2>-->
    <router-link to="/user/news">消息</router-link>
    <router-link to="/user/message">新闻</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "user",
    // computed: {
    //   userid() {
    //     return this.$route.params.abc
    //   }
    // }
  }
</script>

<style scoped>

</style>