<template>
<!-- menu -->
<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">
<!-- Brand and toggle get grouped for better mobile display -->
<ul class="nav navbar-left">
<li class="btn-group" role="group">
  <button type="button" class="btn btn-default">Our Process</button>
</li>
<li class="btn-group" role="group">
  <button type="button" class="btn btn-default">Our Users</button>
</li>
<li class="btn-group" role="group">
<button type="button" class="btn btn-default" id="appBrand">tiddl</button>
</li>
</ul>
<ul class="nav navbar-right">
<li class="btn-group" role="group">
  <button type="button" class="btn btn-default">Our Story</button>
</li>
<li class="btn-group" role="group">
  <button type="button" class="btn btn-default">Donate</button>
</li>
</ul>
</div>
</nav>
</template>
<script>
export default {
    name:'menu'
}
</script>
<style scoped>
#appBrand{
    font-family: 'Pacifico', Avenir, Helvetica, sans-serif;
}
</style>