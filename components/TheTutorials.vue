<template>
  <section class="second_section">
    <h2 class="section-title" id="tutorials">
      Tutorials
    </h2>
    <div class="text-block-wrapper">
      <transition
        name="fade"
        v-for="tutorial in tutorials"
        :key="tutorial.slug"
      >
        <NuxtLink :to="'tutorial/' + tutorial.slug" class="card">
          <nuxt-img class="preview-image" :src="tutorial.image" />

          <h3>{{ tutorial.title }}</h3>
          <p class="body-text">{{ tutorial.description }} ↗︎</p>
        </NuxtLink>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tutorials: {
      type: Array,
      required: true
    }
  }
};
</script>
