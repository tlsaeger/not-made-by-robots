<template>
  <div class="detail-page-main">
    <h2>{{ post.slug }}</h2>
   <p>{{post.title}}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>
<style scoped>
.nuxt-content{
    background-color: black;
}
.nuxt-content p{
    color: cadetblue;
}

.detail-page-main{
    background-color: chartreuse;
}
</style>