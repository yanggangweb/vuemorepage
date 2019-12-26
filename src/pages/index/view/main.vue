<template>
  <div id="app">
    <img alt="Vue logo" src="../../../assets/logo.png">
    <HelloWorld msg="页面1：index（默认显示）"/>
	<a href="http://localhost:8460/ceshi2.html">页面2URL：http://localhost:8460/ceshi2.html</a>
    <p>页面2URL：http://localhost:8460/ceshi2.html</p>
	
	<home msg="页面首页：index（默认显示）"/>
	<a href="http://localhost:8460">页面2URL：http://localhost:8460</a>
  </div>
</template>

<script>
import HelloWorld from '../../../components/HelloWorld.vue'
import home from './home.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
	home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
