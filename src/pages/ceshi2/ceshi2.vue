<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="页面2：ceshi2 "/>
	<a href="http://localhost:8460">页面1URL：http://localhost:8460</a>
    <p>页面1URL：http://localhost:8460</p>
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
