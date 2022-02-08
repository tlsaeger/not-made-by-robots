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
              :src="tutorial.video"
              autoplay
              loop
              muted
              playsinline
            ></video>
            <transition name="moveUp">
              <div class="tutorial-text-wrapper">
                <h3 class="preview-title">{{ tutorial.title }}</h3>
                <p class="body-text">{{ tutorial.preview }} ↗︎</p>
                <div class="tag-container">
                  <div v-for="levels in tutorial.level" :key="levels">
                    <p class="level filter-tag medi-tag" :class="levels">
                      {{ levels }}
                    </p>
                  </div>
                </div>
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
        rewind: true,
        autoHeight: false,
        height: "100vh",
        autotransition: true,
        speed: 500,
        gap: "0px",
        arrows: "slider",
        autoplay: true,
        pauseOnHover: true,
        resetProgress: false,
        pagination: false,
        easing: "ease"
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
  font-size: 1.8em;
  padding-bottom: 0.2em;
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
  background-color: rgba(10, 10, 10);
  border: solid 1px white;
  border-radius: 0.5em;
  padding: 0.3em;
  bottom: 0;
  z-index: 99;
  width: 45%;
  margin: 0 0.5em;
  transition: 0.4s;
  padding-left: 0.3em;
}
.medi-tag {
  margin-top: 0.8em;
  margin-left: -0.3em;
  margin-right: 0.6em;
}
.tutorial-text-wrapper:hover {
  transform: scale(1.01) translateY(-0.5em) translateX(0.3em);
  transition: 0.4s;
}
.moveUp-enter-active,
.moveUp-leave-active {
  transition: opacity 0.5s;
  transform: translateX(0);
}
.moveUp-enter, .moveUp-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
splide__arrow--prev {
  background-image: url("/assets/outline_arrow_forward_black_24dp.png");
}

@media (prefers-color-scheme: light) {
  .tutorial-text-wrapper {
    background-color: rgb(245, 245, 245);
    border: solid 1px rgb(10, 10, 10);
  }
}
@media only screen and (max-width: 600px) {
  .tutorial-text-wrapper {
    width: 90%;
  }
}
</style>
