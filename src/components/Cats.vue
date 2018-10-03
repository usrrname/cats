<template>
  <div class="cats container" >
    <div class="row">
    <section class="col-md-12">
        <div class="jumbotron">
          <h4 class="display-md-5">Our Furry Friends</h4>
         <p> In the early stages of a UX workflow, researchers create user personas to define individuals that are representative of the ideal target market segment. 
            Art imitates life, but we want to design for real life, so we engaged 24 cats and their owners to find out how different cats like to have fun! </p>
        </div>
    </section>
    <div class="col-sm-4 flex-sm-column card" v-for="(item, i) in cats" :item="item" :key="i">
      <div class="portrait justify-content-around">
          <img class="img-circle" :src="item.photo"></div>
          <section>
          <p class="caption">{{ item.name }}, {{ item.age }} , {{item.sex}}</p>
          <p class="small align-self-start">{{ item.type }}</p>
        </section>
    </div>
  </div>
  </div>
</template>

<script>
import FetchCats from '@/services/FetchCats.js'
export default {
  name: 'cats',
  data () {
    return {
      cats:[]
    }
  },
  mounted () {
    this.getCats()
  },
  methods: {
    async getCats () {
      const response = await FetchCats.fetchCats()
      this.cats = response.data.rows
    }
  }
}
</script>
<style scoped>
section {
margin-top: 0.875em;
text-align: left;
margin-bottom:1.275 em;
padding-left:1em;
padding-right:1.2em;
}
img {
    max-width: 200px;
    height:auto;
}
.portrait{
    max-height:180px;
    overflow:hidden;
    padding-left:1em;
    padding-bottom:0.875em;
}
.card{
  padding:2em;
  background-color:lightpink;
  outline:dotted 1px blue;
  text-align:left;
}
</style>