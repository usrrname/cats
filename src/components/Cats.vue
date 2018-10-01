<template>
  <div class="cats container" >
    <div class="row">
    <section class="col-md-12">
        <h4 class="display-md-3">Our Furry Friends</h4>
        <p>In the early stages of a UX workflow, researchers create user personas to define individuals that are representative of the ideal target market segment. 
            We wanted to get closer to real life, so we engaged 24 cats and their owners to conduct user research to find out how different cats like to have fun! </p>
    </section>
    <div class="col-sm-3 flex-sm-column" v-for="(item, i) in cats" :item="item" :key="i">
      <div class="portrait justify-content-around align-content-center">
          <img class="img-circle" :src="item.photo"></div>
          <section width="100">
       <p class="caption mt-1">{{ item.name }}, {{ item.age }} , {{item.sex}}</p>
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
      console.log(this.cats)
    }
  }
}
</script>
<style scoped>
section {
padding-left: 0.835 em;
padding-right: 0.835em;
text-align: left;
margin-bottom:1em;
}
img {
    max-width: 160px;
    height:auto;
}
.portrait{
    max-height:160px;
    overflow:hidden;
}
</style>