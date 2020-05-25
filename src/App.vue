<template>
  <div id="app">
    <!-- <NavBar /> -->
    <router-view />
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  // components: {
  //   NavBar
  // }
}
</script>

<style>

  body {
    margin: 0;
    padding: 0;
    font-family: "Arial";
    max-width: 1440px;
    background-color: #CCCCFE;
  }
  .wrapper {
    max-width: 1400px;
    padding: 0 5%;
  }
</style>
