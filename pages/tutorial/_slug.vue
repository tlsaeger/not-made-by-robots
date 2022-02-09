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
      playsinline
    ></video>
    <p class="nuxt-content post-descritption">{{ post.description }}</p>
    <!-- <p>{{ post.description }}</p> -->
    <nuxt-content :document="post" />
    <div class="resourcen-wrapper hands-on-wrapper">
      <h2 class="title-ressources">Infos</h2>
      <div
        v-if="post.wissen_link"
        class="hands-on-wrapper text-block-wrapper text-block-wrapper-mini"
      >
        <nuxt-link
          class="card card-mini refrence-card"
          v-for="tutorial in post.wissen_link"
          :key="tutorial"
          :to="'/wissen/' + tutorial"
        >
          {{ tutorialHuman(tutorial) }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("tutorial", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }
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
    },
    tutorialHuman(el) {
      let humanReadable = el.replaceAll("-", " ");
      humanReadable = humanReadable.replaceAll("ae", "ä");
      return humanReadable;
    }
  },
  computed: {
    refrence_tutorial: function() {
      let updatedLink = this.post.tutorial_link;
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
</style>
