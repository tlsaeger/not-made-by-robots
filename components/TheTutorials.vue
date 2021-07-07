<template>
  <section class="second_section">
    <!-- <h2 class="section-title" id="tutorials">
      Tutorials
    </h2> -->
    <div class="arrowrapper">
          <div @click="scrollSlideshow('next')" class="next arrow">{{counter}}</div>
      <div @click="scrollSlideshow('prev')" class="prev arrow"></div>
    </div>
    <div class="slide-wrapper" id="slide-wrapper">
      <img class="test-video slide" src="~/assets/img/videocall_gesture.gif">
      <transition
        name="fade"
        v-for="tutorial in tutorials"
        :key="tutorial.slug"
      >
        <NuxtLink :to="'tutorial/' + tutorial.slug" class="slide">
          <nuxt-img class="preview-image" :src="tutorial.image" />

          <h3>{{ tutorial.title }}</h3>
          <p class="body-text">{{ tutorial.description }} ↗︎</p>
        </NuxtLink>
      </transition>
    </div>
  </section>
</template>

<script>
// let counter = 0;
export default {
  data () {
    return {
      counter: 0,
    }
  },
  methods: {
    scrollSlideshow(direction) {
         const slideElement = document.getElementsByClassName('slide');
         console.log(slideElement);
    console.log(this.counter)
   slideElement[this.counter].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center"
      });
     if(direction === 'next' && this.counter < this.tutorials.length){
      this.counter++;
     }
     else if(direction === 'next' && this.counter  >= this.tutorials.length){
       this.counter = 0;
     }
     else if(direction === 'prev' && this.counter > 0){
       this.counter--;
     }
 
      
    },
  },
  props: {
    tutorials: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.slide-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  flex-wrap: nowrap;
}
.slide {
  min-width: 100%;
  border: solid 1px black;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;
}
.arrow {
  background-color: blue;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2em;
  z-index: 99;
  cursor: e-resize
}
.next {
right: 0;
}
.prev {
    left: 0;
}
/* .test-video {
  width: 100vw;
  height: 100%;
} */
</style>