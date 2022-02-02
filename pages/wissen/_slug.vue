<template>
  <div class="detail-page-main">
    <div class="edit-link-wrapper">
      <a
        :href="
          'https://github.com/tlsaeger/not-made-by-robots/blob/main/content' +
            this.$route.path +
            '.md'
        "
        class="edit-link"
        target="_blank"
        >Seite Bearbeiten
      </a>
      <p
        @click="showContribution = !showContribution"
        class="contribution-icon"
      >
        ?
      </p>
    </div>
    <TheContributionInfo
      v-if="this.showContribution"
      @closePanel="closingPanel"
    />
    <h2 class="post-title">{{ post.title }}</h2>
    <nuxt-img class="header-image shadow" :src="post.image" />
    <!-- <p>{{ post.description }}</p> -->
    <nuxt-content :document="post" />
    <h2>Hands-On</h2>
    <nuxt-link v-if="post.tutorial_link" :to="'/tutorial/' + refrence_tutorial">
      {{ post.tutorial_link }}
    </nuxt-link>
    <!-- <p v-for="abschnitte in post.body.children.children" :key="abschnitte.value">{{ abschnitte }}</p> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("wissen", params.slug).fetch();
      console.log(post);
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }
    console.log(params);
    return {
      post
    };
  },
  transition: "slide-bottom",
  computed: {
    refrence_tutorial: function() {
      let updatedLink = this.post.tutorial_link;
      updatedLink = updatedLink.replaceAll(" ", "-").toLowerCase();
      return updatedLink;
    }
  }
};
</script>
<style scoped>
.detail-page-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.post-title {
  padding-top: 2em;
  font-size: 2em;
}
.header-image {
  object-fit: cover;
  overflow: hidden;
  max-height: 35vh;
  padding: 0;
}
</style>
