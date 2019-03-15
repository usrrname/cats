<template>
  <div class="container">
    <section class="row">
      <div class="jumbotron">
        <h4 class>Our Furry Friends</h4>
        <p>
          In the early stages of a UX workflow, researchers create user personas to define individuals that are representative of the ideal target market segment.
          Art imitates life, but we want to design for real life, so we engaged 24 cats and their owners to find out how different cats like to have fun!
        </p>
      </div>
    </section>
    <div class="col-sm-3 cat__profile" v-for="(item, i) in cats" :item="item" :key="i">
      <div>
        <img class="cat__profile_img" :src="item.photo">
      </div>
      <div class="cat__details">
        <p class="cat__details--caption">{{ item.name }}, {{ item.age }} , {{item.sex}}</p>
        <p class="small">{{ item.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import FetchCats from "@/services/FetchCats.js";
export default {
  name: "cats",
  data() {
    return {
      cats: []
    };
  },
  components: {
    xAsyncTest(resolve) {
      console.log("Loading async component...");
      setTimeout(() => resolve(asyncComponent), 4000);
    }
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
.cat__profile {
  background-color: lightpink;
  border-radius: 15px;
  border: none;
  box-shadow: gray 2px 1px 1px;
  margin: 1.2em;
  padding: 0.8em;
  justify-content: space-evenly;
  display: inline-block;
}
img.cat__profile_img {
  max-width: 300px;
  overflow: hidden;
  max-height: 180px;
  padding: 0.825em 1em 0.825em 1em;
}
.cat__details {
  text-align: left;
  margin: 0% 5% 8% 5%;
}
</style>