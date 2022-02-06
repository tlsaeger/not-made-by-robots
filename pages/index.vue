<template>
  <div class="home">
    <TheTutorials :tutorials="tutorials"> </TheTutorials>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
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

<style></style>
