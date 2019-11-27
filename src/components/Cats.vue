<template>
  <div class="container">
    <section class="row">
      <div class="jumbotron">
        <h4 class="display-4">Our Furry Friends</h4>
        <p class="md-5">
          In the early stages of a UX workflow, researchers create user personas
          to define individuals that are representative of the ideal target
          market segment. Art imitates life, but we want to design for real
          life, so we engaged 24 cats and their owners to find out how different
          cats like to have fun!
        </p>
      </div>
    </section>
    <carousel
      :per-page="3"
      :mouseDrag="true"
      :navigationEnabled="true"
      :paginationEnabled="false"
      :spacePadding="10"
      :adjustableHeight="true"
      class="row"
    >
      <slide
        v-for="(item, i) in cats"
        :item="item"
        :key="i"
        data-index:key
        class="cat__profile panel-body"
      >
        <div>
          <img class="cat__profile_img" :src="item.photo" />
        </div>
        <div>
          <p class="cat__profile__details">
            <span class="cat__profile--name"> {{ item.name }} </span><br />
            {{ item.age }} years old, {{ item.sex }} <br />
            {{ item.type }} <br />
          </p>
          <button class="list-group-item" :key="show" @click="show = !show">
            {{ show ? `About ` + item.name : "More info" }}
          </button>
          <transition name="fade" mode="out-in" tag="p" :key="item">
            <p class="small cat__profile--description" v-if="show">
              {{ item.whatisyourcatlike }}
            </p>
          </transition>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import FetchCats from "@/services/FetchCats.js";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "cats",
  data() {
    return {
      cats: [],
      show: false
    };
  },
  components: {
    carousel: Carousel,
    slide: Slide
  },
  created() {
    this.getCats();
  },
  methods: {
    async getCats() {
      const response = await FetchCats.fetchCats();
      this.cats = response.data.rows;
    }
  }
};
</script>
<style scoped>
.fade-enter,
.fade-leave {
  transition: opacity 0.5s;
}
.VueCarousel-inner {
  visibility: visible;
}
.VueCarousel-slide {
  margin: 0;
  position: relative;
  background: transparent;
  font-family: "Open Sans", Avenir, Arial, Helvetica, sans-serif;
  text-align: left;
  max-height: 500px;
}
.list-group-item {
  outline: lightcoral;
  background-color: transparent;
}
.cat__profile {
  border: none;
  margin: 0.925em;
  padding: 0.5em;
}
.cat__profile__details {
  padding: 1em 0.5em;
  font-size: 0.9em;
  text-align: left;
}
.cat__profile--name {
  font-size: 1.75em;
  font-weight: bold;
}
.cat__profile--description {
  overflow: scroll;
  scrollbar-width: 12px;
  scrollbar-face-color: lavenderblush;
  scrollbar-shadow-color: blue;
  scrollbar-track-color: cadetblue;
  margin: 0.125em;
  padding: 1.25em;
  max-height: 250px;
}
img.cat__profile_img {
  justify-content: flex-start;
  border-radius: 50%;
  max-width: 250px;
  overflow: hidden;
  min-height: 200px;
  padding: 0.125em 1em;
}
</style>
