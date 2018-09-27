<template>
  <div class="container">
   <h1> {{ title }} </h1>
  <p>{{description}}</p>
  </div>
</template>

<script>

export default {
  name: 'coming',
  data () {
    return {
      title: 'Coming Soon',
      description: 'Speculative design for Cats'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-family: 'Pacifico', serif;
  font-size: 3em;
  font-weight:400;
  color:lightblue;
}
h1, h2 {
  font-weight: normal;
  padding-top:25%;
  }
p{
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  font-size:1em;
  padding-top:0.175em;
  font-weight: 600;
}
a {
  color: white;
}
</style>
