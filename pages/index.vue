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
    let lang = navigator.language;
    if (lang != "de") {
      lang = "en";
    } else if (lang == "de") {
      lang = "de";
    }
    try {
      tutorials = await $content("tutorial", lang, params.slug).fetch();
    } catch (e) {
      error({ message: "Blog Post not found" });
    }
    return {
      tutorials
    };
  }
};
</script>

<style></style>
