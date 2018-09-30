<template>
    <div id="transition-components" class="container">
            <transition mode="out-in">
            <div v-for="image in images"
                    :key="image.id">
            <img :src="currentImage.imageUrl" class="current-slide active"/>
            </div>
            </transition>
            <button class="btn" @click="nextImage">Forward</button>
            <button class="btn" @click="prevImage">Back</button>
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
      activeImage: 0
  }
  },
  computed : {
      currentImage() {
          const imageIndex = this.images[this.activeImage]
          console.log(imageIndex)
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
            }
        }
}
</script>
<style scoped>
.btn {
display:inline-flex;
z-index:5;
}
    .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for <2.1.8 */ {
    opacity: 0;
    }
.current-slide{
  padding:0px;
  width:500px;
  background: transparent;
  color: #fff;
  font-family: 'Open Sans';
  font-size: 24px;
  text-align: center;
  height:auto;
}
</style>
