<template>
    <div class="container">
        <catpage :cats="cats">
            
        </catpage>
    </div>
</template>
<script>
import Cats from '@/assets/cats.json'

export default{
    name: 'cats',
    data () {
        return {
           theCats: []
        }
    },
    components: {
        'catpage': Cats
    },
    created: {
    function() {
    $.getJSON('./builds/cats.json')
      .done( info =>  {
        this.theCats = info;
    }); //getJSON
  }, //created
    }
}
</script>