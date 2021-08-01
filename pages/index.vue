<template>
  <div class="home">
    <!-- <TheP5JS /> -->
    <!-- <section class="first_section">
      <h1 class="title"><span class="not">Not</span> Made <br />By Robots</h1>
      <p class="subline body-text">
        A Toolkit for Artificial Intelligence in Design
      </p>
      <a @click="scrollToEl('tutorials')" class="arrow">↓</a> -->
    <!-- </section> -->
    <TheTutorials :tutorials="tutorials"> </TheTutorials>
    <!-- <TheWissen :wissen="wissen"> </TheWissen>
    <TheTools :ressourcen="ressourcen"> </TheTools>
    <TheNews /> -->
  </div>
</template>

<script>
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

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
  data() {
    return {};
  },

  async asyncData({ $content, params, error }) {
    let tutorials;
   
    let ressourcen;
    try {
      tutorials = await $content("tutorial", params.slug).fetch();
      ressourcen = await $content("ressourcen", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      tutorials,
      ressourcen
    };
  }
};
</script>

<style>

</style>
