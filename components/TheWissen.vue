<template>
    <section class="third_section">
      <h2 class="section-title" id="wissenswertes">
        Wissenswertes
      </h2>
      <div class="text-block-wrapper">
        <transition
          name="fade"
          v-for="wissenpost in wissen"
          :key="wissenpost.slug"
        >
          <NuxtLink :to="'wissen/' + wissenpost.slug" class="card">
            <nuxt-img class="preview-image" :src="wissenpost.image" />

            <h3>{{ wissenpost.title }}</h3>
            <p class="body-text">{{ wissenpost.description }} ↗︎</p>
          </NuxtLink>
        </transition>
      </div>
    </section>
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
      wissen
    };
  }
}
</script>