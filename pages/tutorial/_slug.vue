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
    <video
      class="header-image shadow"
      :src="post.video"
      autoplay
      loop
      muted
    ></video>
    <p class="nuxt-content post-descritption">{{ post.description }}</p>
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
  data() {
    return {
      showContribution: false
    };
  },
  transition: "slide-bottom",
  methods: {
    closingPanel() {
      this.showContribution = false;
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
</style>
