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
        v-else-if="lang == 'en'"
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
    <nuxt-img class="header-image shadow" :src="post.image" />
    <!-- <p>{{ post.description }}</p> -->
    <nuxt-content :document="post" />
    <div class="resourcen-wrapper hands-on-wrapper">
      <h2 class="title-ressources">Hands-On</h2>
      <div
        v-if="post.tutorial_link"
        class="hands-on-wrapper text-block-wrapper text-block-wrapper-mini"
      >
        <nuxt-link
          class="card card-mini refrence-card"
          v-for="tutorial in post.tutorial_link"
          :key="tutorial"
          :to="'/tutorial/' + tutorial"
        >
          {{ tutorialHuman(tutorial) }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showContribution: false
    };
  },
  async asyncData({ $content, params, error }) {
    let lang = navigator.language;
    if (lang != "de") {
      lang = "en";
    } else if (lang == "de") {
      lang = "de";
    }
    let post;
    try {
      post = await $content("wissen", lang, params.slug).fetch();
    } catch (e) {
      error({ message: "Blog Post not found" });
    }
    return {
      post,
      lang
    };
  },
  transition: "slide-bottom",
  computed: {
    refrence_tutorial: function() {
      let updatedLink = this.post.tutorial_link;
      return updatedLink;
    }
  },
  methods: {
    tutorialHuman(el) {
      let humanReadable = el.replaceAll("-", " ");
      humanReadable = humanReadable.replaceAll("ae", "ä");
      return humanReadable;
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
