<template>
  <div id="app">
    
    <router-view/>
    <Root></Root>
  </div>
</template>

<script>
  import Root from './components/root/root.vue'
  export default {
    components:{
      Root
    }
  }
</script>


<style src="./w3ds/w3ds.css"></style>
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
