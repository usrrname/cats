<template>
  <div id="app">
    <coming-soon/>
  </div>
</template>

<script>
import comingSoon from '@/components/comingSoon'
export default {
  name: 'App',
  components: {
    'coming-soon': comingSoon
  }
}
</script>

<style>
html, body{
  width:100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-image: linear-gradient(#f68e74, #EEEEEE);
}
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
