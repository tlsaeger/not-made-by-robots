<template>
  <div class="detail-page-main">
    <h2>{{ post.title }}</h2>
    <nuxt-img class="header-image"  :src="post.image" />
    <p>{{ post.description }}</p>
    <nuxt-content :document="post" />
    <!-- <p v-for="abschnitte in post.body.children.children" :key="abschnitte.value">{{ abschnitte }}</p> -->

  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("tutorial", params.slug).fetch();
      console.log(post)
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post
    };
  }
};
</script>
<style scoped>
.header-image{
    width: 50%;
    height: auto;
    box-shadow: 10px 3px 5px #bb86fc;
}
</style>
