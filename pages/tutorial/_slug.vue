<template>
  <div class="detail-page-main">
    <div class="edit-link-wrapper">
      <a
        v-if="lang == 'de'"
        :href="
          'https://github.com/tlsaeger/not-made-by-robots/tree/main/content'
        "
        class="edit-link"
        target="_blank"
        >Seite Bearbeiten
      </a>
      <a
        v-if="lang == 'en'"
        :href="
          'https://github.com/tlsaeger/not-made-by-robots/tree/main/content'
        "
        class="edit-link"
        target="_blank"
        >Edit Page
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
    let lang = navigator.language;
    if (lang != "de") {
      lang = "en";
    } else if (lang == "de") {
      lang = "de";
    }
    let post;
    try {
      post = await $content("tutorial", lang, params.slug).fetch();
    } catch (e) {
      error({ message: "Blog Post not found" });
    }
    return {
      post,
      lang
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
