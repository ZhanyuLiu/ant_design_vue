<template>
  <div id="app">
<!--      router-link默认渲染出来的是a标签-->
  <router-link to="/demo" tag="button">表</router-link>
  <router-link to="/HelloWorld" tag="button">HelloWorld</router-link>
<!--  <router-link v-bind:to="'/user/'+userid" tag="button">user</router-link>-->
  <router-link to="/user/" tag="button">user</router-link>
<!--  <button @click="democlick">demo</button>-->
<!--  <button @click="helloclick">HelloWorld</button>-->
  <router-view></router-view>
<!--      <demo/>-->
<!--      <HelloWorld></HelloWorld>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import demo from './components/demo.vue'

export default {
  name: 'app',
  data() {
    return {
      userid:'zhangsan',
    }
  },
  components: {
    // HelloWorld,
    // demo
  },
  methods:{
    // democlick(){
    //   // this.$router.push('/demo');
    //   this.$router.replace('/demo');
    // },
    // helloclick(){
    //   // this.$router.push('/HelloWorld');
    //   this.$router.replace('HelloWorld');
    // }
  }
}
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: right;*/
    color: #2c3e50;
    margin: 20px;
    >button{
        margin-right: 15px;
        margin-bottom: 20px;
        width: 90px;
        background: url("./assets/07.jpg") fixed repeat;
        border: none;
    }
  }

</style>
