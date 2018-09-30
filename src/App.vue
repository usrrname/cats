<template>
<div id="app">
<!-- menu -->
<nav class="navbar navbar-default d-flex flex-sm-column flex-md-row flex-lg-row clearfix" role="navigation">
<!-- Brand and toggle get grouped for better mobile display -->
<ul class="nav align-content-start flex-sm-nowrap flex-lg-wrap">
<li class="btn-group" role="group">
  <button type="button" class="btn btn-default"><router-link to="/">Home</router-link></button>
</li>
<li class="btn-group" role="group">
  <button type="button" class="btn btn-default"><router-link to="/process">Our Process</router-link></button>
</li>
<li class="btn-group" role="group">
  <button type="button" class="btn btn-default"><router-link to="/cats">Our Users</router-link></button>
</li>
<li class="btn-group" role="group">
<button type="button" class="btn btn-default" id="appBrand"><router-link to="/tiddl">tiddl</router-link></button>
</li>
<li class="btn-group" role="group">
  <button type="button" class="btn btn-default"><router-link to="/about">Our Story</router-link></button>
</li>
</ul>
<ul class="nav navbar-right flex-sm-column flex-md-wrap flex-sm-nowrap flex-lg-nowrap">
<li class="btn-group align-self-sm-start align-self-md-end align-self-lg-end align-self-xl-end mr-auto" role="group">
  <button type="button" class="btn btn-default"><router-link to="/donate">Donate</router-link></button>
</li>
</ul>
</nav>
<router-view/>
<!-- Footer -->
<footer class="page-footer font-small pl-5 pt-6">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

      <!-- Grid row -->
      <div class="row">

        <!-- Grid column -->
        <div class="col-md-4 mt-md-0 mt-3">

          <!-- Content -->
          <h5 class="text-uppercase">Like What You Saw?</h5>
          <p>ifcatsneed.art is not a business.
          </p>
          <button type="button" class="btn btn-outline-dark"><router-link to="/donate">HELP US SUCCEED</router-link></button>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">

            <!-- Links -->

            <ul class="list-unstyled">
              <li>
                <a href="#!">About Cats</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
              <li>
                <a href="https://postcapitalist.club" target="_blank">Postcapitalist Propaganda</a>
              </li>
              <li>
                <a href="https://brandscape.club" target="_blank">The Brandscape</a>
              </li>
            </ul>

          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">

            <!-- Links -->
            <h6 class="text-uppercase">Made By</h6>

            <ul class="list-unstyled">
              <li>
                <a href="https://catbluemke.com" target="_blank">Cat Bluemke</a>
              </li>
              <li>
                <a href="" target="_blank" class="disabled">Jonathan Carroll</a>
              </li>
              <li>
                <a href="https://jennifer-chan.com" target="_blank">Jennifer Chan</a>
              </li>
              <li>
                <a href="https://precariatcontent.com" target="_blank">Precariant Content</a>
              </li>
            </ul>

          </div>
          <!-- Grid column -->
       <div class="col-md-2 mb-md-0 mb-3">
         <img src="@/assets/img/icon_50px.png" width=40 height=40 ><span id="appBrand" class="display-md-4 pl-2"><router-link to="/tiddl">tiddl</router-link></span>
        </div>
      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->

  </footer>
  <!-- Footer -->
</div>
</template>

<script>
import Landing from '@/components/Landing'
export default {
  name: 'App',
  components: {
    'landing': Landing
  }
}
</script>
<style scoped>
nav, button {
background-color:transparent;
color: white;
}
a:hover{
  text-decoration:none;
}
#appBrand{
    font-family: 'Pacifico', cursive;
    font-size: 1.175em;
    vertical-align: baseline;
}
</style>
<style>
@import url('https://fonts.googleapis.com/css?family=Pacifico');

html, body{
  max-width:100%;
  height: auto;
  margin: 0px;
  padding: 0px;
  background-color: #f68e74;
  background-image: linear-gradient(#f68e74, #EEEEEE);
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display:block;
  margin:0;
  padding-left:0;
  padding-right:0;
}
footer{
  margin-top:3.75em;
  margin-bottom:3.5em;
}
</style>
