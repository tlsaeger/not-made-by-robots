<template>

  <TheWissen :wissen="wissen"> </TheWissen>
</template>

<script>
export default {
     async asyncData({ $content, params, error }) {
    let wissen;
    try {
      wissen = await $content("wissen", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      wissen,
    };
  }
}
</script>