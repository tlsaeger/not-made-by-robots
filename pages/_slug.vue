<template>
  <div class="detail-page-main">
    <h2 class="post-title" >{{ post.title }}</h2>
    <nuxt-img class="header-image"  :src="post.image" />
    <!-- <p>{{ post.description }}</p> -->
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
  },
  transition: "slide-bottom"
};
</script>
<style scoped>
.post-title{
  padding-top: 2em;
  font-size: 2em;
}
.header-image{
   border: solid 1px black;
  box-shadow: 5px 3px 3px #a169e6;
  width: 65%;
  /* height: 10%; */
  border-radius: 0.5em;
  transition: 0.2s;
  object-fit: contain;
}

</style>
