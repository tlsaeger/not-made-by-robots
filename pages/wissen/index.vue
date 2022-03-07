<template>
  <TheWissen :wissen="wissen"> </TheWissen>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let lang = navigator.language;
    let wissen;
    if (lang != "de") {
      lang = "en";
    } else if (lang == "de") {
      lang = "de";
    }
    try {
      wissen = await $content("wissen", lang, params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }
    return {
      wissen
    };
  }
};
</script>
