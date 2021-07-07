<template>
        <TheTools :ressourcen="ressourcen"> </TheTools>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let ressourcen;
    try {
      ressourcen = await $content("ressourcen", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      ressourcen
    };
  }    
}

</script>