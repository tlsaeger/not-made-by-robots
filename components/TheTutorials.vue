<template>
  <section class="second_section">
    <!-- <div class="arrowrapper">
      <div @click="scrollSlideshow('next')" class="next arrow">
        {{ counter }}
      </div>
      <div @click="scrollSlideshow('prev')" class="prev arrow"></div>
    </div> -->
    <splide :options="options">
      <transition
        name="fade"
        v-for="tutorial in tutorials"
        :key="tutorial.slug"
      >
        <splide-slide>
          <NuxtLink :to="'tutorial/' + tutorial.slug" class="slide">
            <video
              @mouseover="videoHovering = true"
              @mouseleave="videoHovering = false"
              class="slider-image"
              :src="tutorial.image"
              autoplay
              loop
              muted
            ></video>
            <transition name="moveUp">
              <div class="tutorial-text-wrapper" v-if="videoHovering">
                <h3 class="preview-title">{{ tutorial.title }}</h3>
                <p class="body-text">{{ tutorial.description }} ↗︎</p>
              </div>
            </transition>
          </NuxtLink>
        </splide-slide>
      </transition>
    </splide>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

// let counter = 0;
export default {
  data() {
    return {
      counter: 1,
      videoHovering: false,
      options: {
        rewind: true
      }
    };
  },
  components: {
    Splide,
    SplideSlide
  },
  methods: {
    scrollSlideshow(direction) {
      const slideElement = document.getElementsByClassName("slide");
      console.log(slideElement);
      console.log(this.counter);
      slideElement[this.counter].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center"
      });
      if (direction === "next" && this.counter < this.tutorials.length - 1) {
        this.counter++;
      } else if (
        direction === "next" &&
        this.counter >= this.tutorials.length - 1
      ) {
        this.counter = 0;
      } else if (direction === "prev" && this.counter > 0) {
        this.counter--;
      }
    }
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
.second_section {
  margin-top: -1.7em;
}
.slide-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  flex-wrap: nowrap;
}
.slide {
  width: 100vw;
  cursor: pointer;
  object-fit: contain;
  transition: 0.2s;
}
.slider-image {
  width: 100%;
  height: 100vh;
  object-fit: contain;
  overflow: hidden;
}
.preview-title {
  padding-left: 0;
}
.arrow {
  /* background-color: blue; */
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10%;
  z-index: 99;
  cursor: e-resize;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
.tutorial-text-wrapper {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  bottom: 0;
  z-index: 99;
}
.moveUp-enter-active,
.moveUp-leave-active {
  transition: opacity 0.5s;
  transform: translateX(0);
}
.moveUp-enter, .moveUp-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
