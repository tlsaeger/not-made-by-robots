<template>
  <div class="home">
    <!-- <TheP5JS /> -->
    <section class="first_section">
      <h1 class="title"><span class="not">Not</span> Made <br />By Robots</h1>
      <p class="subline body-text">
        A Toolkit for Artificial Intelligence in Design
      </p>
      <a @click="scrollToEl('tutorials')" class="arrow">↓</a>
    </section>
    <section class="second_section">
      <h2 class="section-title" id="tutorials">
        Tutorials
      </h2>
      <div class="text-block-wrapper">
        <transition
          name="fade"
          v-for="tutorial in tutorials"
          :key="tutorial.slug"
        >
          <NuxtLink :to="tutorial.slug" class="card">
            <nuxt-img class="preview-image" :src="tutorial.image" />

            <h3>{{ tutorial.title }}</h3>
            <p class="body-text">{{ tutorial.description }}</p>
            <p>>></p>
          </NuxtLink>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/p5.js/[p5_version]/p5.js"
        }
      ],
      script: [
        {
          src: "https://unpkg.com/ml5@latest/dist/ml5.min.js"
        }
      ]
    };
  },
  methods: {
    scrollToEl: function(element) {
      let scroll = document.getElementById(element);
      console.log(scroll);
      scroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  },
  async asyncData({ $content, params, error }) {
    let tutorials;
    try {
      tutorials = await $content("tutorial", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      tutorials
    };
  }
};
</script>

<style>
.first_section {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.title {
  color: #000;
  font-size: 8em;
  text-transform: uppercase;
}
.subline {
  font-size: 2em;
}
.arrow {
  position: absolute;
  bottom: 1em;
  left: 48%;
  font-size: 3em;
  transition: 0.2s;
}
.arrow:hover {
  transform: scale(1.1);
  transform: translateY(10px);
  transition: 0.2s;
}
.text-block-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.section-title {
  padding-top: 2em;
  font-size: 4em;
}

.card {
  border: solid 1px black;
  box-shadow: 10px 3px 5px #a169e6;
  width: 80vw;
  /* min-height: 300px; */
  height: 10%;
  margin-bottom: 1em;
  padding: 1em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: 0.2s;
}
/* .card > h3{
  padding-left: 1em;
} */
.card:hover {
  box-shadow: 5px 2px 10px #a169e6;
  transform: scale(1.01);
  transition: 0.2s;
}
.preview-image {
  width: 100%;
  height: 30%;
  object-fit: contain;
 /* filter: grayscale(100%) hue-rotate(90deg); */
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
@media (prefers-color-scheme: dark) {
  .title   { color: white; }
  .card{border: solid 1px white;}

}
</style>
