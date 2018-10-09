<template>
    <div id="transition-components" class="container">
    <div class="row d-flex">
        <div class="col-md-5 flex-sm-column flex-md-row flex-md-wrap">
            <article class="panel">
                <h4 class="panel-title">Sound Art for Cats</h4>
                <div class="panel-body">
                <p class="lead">tiddl is an application designed for cats and their companions. It contains a library of sounds that cat owners can select and play as ambient soundscapes for cats. The app was created as a pragmatic solution for boredom and depression that at any moment, up to 40% of domestic cats may experience.</p>
                    <ul class="list-group unstyled-list" >
                        <li class="list-group-item panel-heading" @click="collapsed1 = !collapsed1"> Sounds for Cats <span class="mr-auto">&darr;</span></li>
                        <div class="panel-body message-content" :class="{'is-collapsed' : collapsed1 }"> 
                            We created tiddl to assess your cat’s curiosity in a series of discrete and combined sounds. The sounds that can be looped in the app present a selection of natural sounds gathered from user research and testing with cats. We included synthesized sounds based on research into producing music for cats.
                        Imagine crunching paper, rats gnawing, running water, kibble shaking in a bag, chimes in the wind, and birds making a ruckus. We've got 32 sounds and over 200 combinations of soothing soundscapes for every cat mood! 
                        </div>

                        <li class="list-group-item panel-heading" @click="collapsed2 = !collapsed2">Infinite Looping <span class="mr-auto">&darr;</span></li>
                        <div class="message-content" :class="{'is-collapsed' : collapsed2 }">That's right, you select the sounds, and it will loop until you want it to stop!</div>
                        
                        <li class="list-group-item panel-heading" @click="collapsed3 = !collapsed3">Away or At-home Play! <span class="mr-auto">&darr;</span></li>
                        <div class="message-content" :class="{'is-collapsed': collapsed3 }"> Keep kitty entertained! Turn on some sounds when you're leaving the house, or use it as part of playtime!</div>
                    </ul>
                </div>
                </article>
            </div>
        <div class="col-md-5 flex-sm-columm flex-md-row">
            <transition mode="out-in">
            <div v-for="image in images"
                    :key="image.id">
            <img :src="currentImage.imageUrl" class="current-slide active"/>
            </div>
            </transition>
            <nav>
            <ul class="pager list-unstyled">
            <li class="btn previous"  aria-label="previous image" @click="prevImage"><span aria-hidden="true">&larr;</span>previous</li>
            <li class="btn next" aria-label="next image" @click="nextImage">next<span aria-hidden="true">&rarr;</span></li>
            </ul>
            </nav>
            <div class="caption small">
            When using Tiddl, your cat may at points lose interest in the process. Don’t try to control your cat's movement or increase the volume. If your cat loses interest, simply return to testing Tiddl with your cat later on. Several attempts may be required to attract and hold your cat’s attention.
            It is possible some sounds may cause a cat to choose to sleep, others may lead to playfulness.
            If a cat finds a sound uncomfortable they will try to hide or show their distress by dashing to a different room. If this happens you should stop playing the sound(s).
            <b>Do not</b> introduce the cat to Tiddl or play its sounds while the cat is doing an important daily activity such as grooming, eating or using the litter box. 
            There is a chance they may associate the sounds with the experience, leading to unexpected behavioral issues.
                </div>
        </div>
        </div>
    </div>
</template>
<script>
import pad1 from '@/assets/img/pad1.jpg'
import pad2 from '@/assets/img/pad2.jpg'
import pad3 from '@/assets/img/pad3.jpg'

export default {
  name: 'tiddl',
  data () {
    return {
      images: [
        { id: 0, imageUrl: pad1 },
        { id: 1, imageUrl: pad2 },
        { id: 2, imageUrl: pad3 }
      ],
      activeImage: 0,
      collapsed1:true,
      collapsed2:true,
      collapsed3:true,
  }
  },
  computed : {
      currentImage() {
          const imageIndex = this.images[this.activeImage]
            return imageIndex
            }
    },
methods : {
    nextImage() {
            let active = this.activeImage + 1
            if(active >= this.images.length) {
                active = 0
            }
            this.activateImage(active)
            },
            prevImage() {
                let active = this.activeImage - 1
                if(active < 0) {
                    active = this.images.length - 1
                }
                this.activateImage(active)
            },
            activateImage(imageIndex) {
                this.activeImage = imageIndex
            },
        }
}
</script>
<style scoped>
.is-collapsed {
	display: none;
}
.panel-heading {
    cursor: pointer;
    outline:ghostwhite;
    background-color:transparent;
}
.message-content {
    padding: 20px;
}
.previous, .next {
display:inline-block;
z-index:10;
cursor:pointer;
padding:0.5em;
}
.current-slide{
  padding:0px;
  width:100%;
  background: transparent;
  color: #fff;
  font-family: 'Open Sans';
  font-size: 24px;
  text-align: center;
  height:auto;
}
</style>
