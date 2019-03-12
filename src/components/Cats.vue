<template>
  <div class="container" >
    <div class="row">
    <section class="col-md-12">
        <div class="jumbotron">
          <h4 class="">Our Furry Friends</h4>
         <p> In the early stages of a UX workflow, researchers create user personas to define individuals that are representative of the ideal target market segment. 
            Art imitates life, but we want to design for real life, so we engaged 24 cats and their owners to find out how different cats like to have fun! </p>
        </div>
    </section>
    <div class="grid col-sm-3 flex-sm-column card" v-for="(item, i) in cats" :item="item" :key="i">
          <div>
          <img class="portrait" :src="item.photo">
          </div>
        <div class="cat_desc">
          <p class="caption">{{ item.name }}, {{ item.age }} , {{item.sex}}</p>
          <p class="small align-self-start">{{ item.type }}</p>
        </div>
        </div>
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
  components: {
  xAsyncTest(resolve) {
			console.log("Loading async component...")
			setTimeout(() => resolve(asyncComponent), 4000)
		}
  },
  created() {
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

img.portrait{
  max-width: 300px;
  overflow:hidden;
    max-height:180px;
    padding: 0.825em 1em 0.825em 1em;
    justify-content: center;
}
.cat_desc{
  text-align: left;
  margin: 0% 5% 8% 5%;
}
.card {
  background-color:lightpink;
  border-radius: 15px;
  width: 100%;
  margin: 1em;
  border: none;
  box-shadow: gray 2px 1px 1px
}

</style>