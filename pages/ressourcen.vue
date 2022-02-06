<template>
  <TheTools :ressourcen="ressourcen" :wissen="wissen" :tutorials="tutorials">
  </TheTools>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let ressourcen, wissen, tutorials;
    try {
      ressourcen = await $content("ressourcen", params.slug).fetch();
      wissen = await $content("wissen", params.slug).fetch();
      tutorials = await $content("tutorial", params.slug).fetch();
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
