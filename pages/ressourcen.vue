<template>
  <TheTools :ressourcen="ressourcen" :wissen="wissen" :tutorials="tutorials">
  </TheTools>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let ressourcen, wissen, tutorials;
    let lang = navigator.language;
    if (lang != "de") {
      lang = "en";
    } else if (lang == "de") {
      lang = "de";
    }

    try {
      ressourcen = await $content("ressourcen", lang, params.slug).fetch();
      wissen = await $content("wissen", lang, params.slug).fetch();
      tutorials = await $content("tutorial", lang, params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      ressourcen,
      wissen,
      tutorials
    };
  }
};
</script>
