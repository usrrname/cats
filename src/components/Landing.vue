<template>
  <div id="ssenseCarousel" class="container-fluid">
    <carousel :per-page="1" :mouse-drag="false" :paginationEnabled="true" class="row">
      <slide class="vue-carousel-slide" data-index="0">
        <img src="@/assets/img/velizar-ivanov-540528-unsplash.jpg">
        <button type="button" class="btn btn-outline-light">
          <router-link to="/tiddl">{{cta2}}</router-link>
        </button>
      </slide>
      <slide class="vue-carousel-slide" data-index="1">
        <button type="button" class="btn btn-outline-light">
          <router-link to="/process">{{cta1}}</router-link>
        </button>
        <img src="@/assets/img/ferenc-horvath-461706-unsplash.jpg">
      </slide>
      <slide class="vue-carousel-slide" data-index="2">
        <button type="button" class="btn btn-outline-light">
          <router-link to="/process">{{cta3}}</router-link>
        </button>
        <img src="@/assets/img/sarah-dorweiler-128578-unsplash.jpg">
      </slide>
    </carousel>
    <div class="row">
      <div class="col-md-12">
        <section class="col-sm-12">
          <h3 class="display-5">Speculative Design For Happier Cats</h3>
          <p>
            Is your cat listless? Peeing outside their litter box?
            Not cleaning themselves enough? Meowing whenever you stop petting them?
            Following you around? Sleeping all the time? Overeating or not touching their food?
            Skittish and hiding under the bed? Sleeping at&nbsp;daybreak?
          </p>
          <p class="lead">Maybe they’re sick. Maybe they’re&nbsp;depressed!</p>
          <hr class="my-0">
        </section>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <img class="img__grid" src="@/assets/img/michael-sum-565770-unsplash.jpg">
      </div>
      <div class="col-md-6">
        <section class="textbox">
          <h5 class="display-5">Boredom Equals Sadness</h5>
          <p>At any moment in time, up to 40% of domestic cats are depressed due to boredom. Though they survive 3-5 years longer when kept indoors, home life puts cats at risk of diabetes, obesity, and a whole range of behavioural&nbsp;issues.</p>
        </section>
      </div>
      <div class="w-100"></div>
      <div class="col-md-6">
        <section class="textbox">
          <h5 class="display-5">Iterate, Test, Develop</h5>
          <p>We’re artists and designers, but we follow an agile approach and apply user-testing methodologies from the tech industry to make things for cats. We believe that conducting data-informed design in collaboration with our feline users will help us arrive at the best product for our feline&nbsp;companions.</p>
        </section>
      </div>
      <div class="col-md-6">
        <img class="img__grid" src="@/assets/img/kelly-sikkema-411622-unsplash.jpg">
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "landing",
  data() {
    return {
      cta1: "UX that's not only for Humans",
      cta2: "Reach Out To Your Cat",
      cta3: "Our Pawsitive Space"
    };
  },
  components: {
    carousel: Carousel,
    slide: Slide
  }
};
</script>
<style scoped>
.col-md-6 {
  max-height: 400px;
  padding-right: 0;
  padding-left: 0;
  display: block;
}
.img__grid {
  display: block;
  padding: 0.25em;
  margin: 0;
  max-width: 100%;
  height: auto;
  overflow: hidden;
}
section.textbox {
  text-align: left;
  vertical-align: middle;
}
.VueCarousel-inner {
  visibility: visible;
}
h3 {
  text-align: center;
}
h5 {
  padding: 0.5em 2em 0.5em 2em;
  text-align: left;
  margin: 2.5em 2em 1em 2.5em;
}
p {
  width: 75%;
  display: block;
  margin: auto;
  text-align: left;
  line-height: 1.5em;
  padding: 0.825em;
}
.btn {
  position: absolute;
  right: 20%;
  font-weight: 400;
  z-index: 15;
  top: 60%;
}
a {
  text-decoration: none;
}
.vue-carousel-slide {
  padding: 0px;
  margin: 0;
  position: relative;
  background: transparent;
  color: #fff;
  font-family: "Open Sans", Avenir, Arial, Helvetica, sans-serif;
  font-size: 24px;
  text-align: center;
  font-style: bold;
  max-height: 600px;
  width: 100%;
}
.fade {
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;
}
</style>
