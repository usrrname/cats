<template>
<div id="app" class="row">
<!-- menu -->
<nav class="navbar navbar-default flex-sm-column flex-md-row flex-lg-row" role="navigation">
<!-- Brand and toggle get grouped for better mobile display -->
<ul class="nav align-content-start flex-sm-nowrap flex-md-wrap flex-lg-wrap">
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
<button type="button" class="btn btn-default" id="appBrand"><router-link to="/tiddl">Tiddl</router-link></button>
</li>
<li class="btn-group" role="group">
  <button type="button" class="btn btn-default"><router-link to="/about">Our Story</router-link></button>
</li>
</ul>
<ul class="nav navbar-right flex-lg-column flex-sm-wrap flex-sm-row flex-md-nowrap flex-lg-nowrap">
<li class="btn-group" role="group">
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
          <button type="button" class="btn btn-outline-dark">
            <router-link to="/donate">HELP US SUCCEED</router-link></button>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">

            <!-- Links -->

            <ul class="list-unstyled">
              <li>
                <a href="https://en.wikipedia.org/wiki/Cat" target="_blank">About Cats</a>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
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
                <a href="https://postcapitalist.club" target="_blank">Jonathan Carroll</a>
              </li>
              <li>
                <a href="https://jennifer-chan.com" target="_blank">Jennifer Chan</a>
              </li>
              <li>
                <a href="https://precariatcontent.com" target="_blank">Precariat Content</a>
              </li>
            </ul>

          </div>
          <!-- Grid column -->
       <div class="col-md-2 mb-md-0 mb-3">
         <div class="footerLogo"><img src="@/assets/img/icon_50px.png" width=40 height=40 ><span id="appBrand" class="display-md-4 pl-2"><router-link to="/tiddl">Tiddl</router-link></span></div>
         <div class="appbadge"><a href="https://itunes.apple.com/us/app/tiddl/id1435369864" target="_blank"><img src="@/assets/img/app-store-badge.png" width="100"></a></div>
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
</style>
<style>
@import url('https://fonts.googleapis.com/css?family=Pacifico');
#appBrand{
    font-family: 'Pacifico', cursive;
    font-size: 1.175em;
    vertical-align: baseline;
}
.container{
  margin-top:3em;
}
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
.footerLogo{
  margin-bottom:0;
  padding-bottom:0;
}
.appbadge{
margin-top:0;
padding:0px;
display:block;
}
</style>
