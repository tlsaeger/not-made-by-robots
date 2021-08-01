<template>
<div>
  <section class="third_section section">
    <div class="text-block-wrapper">
      <transition
        name="fade"
        v-for="wissenpost in wissen"
        :key="wissenpost.slug"
      >
        <NuxtLink :to="'wissen/' + wissenpost.slug" class="card shadow shadow-hover">
          <nuxt-img class="preview-image" :src="wissenpost.image" />
          <div class="desc-text-wrapper">
          <h3>{{ wissenpost.title }}</h3>
          <p class="body-text">{{ wissenpost.description }} ↗︎</p>
          </div>
        </NuxtLink>
      </transition>
    </div>
    
  </section>
  <TheFooter />
</div>
</template>
<script>
export default {
  props: {
    wissen: {
      type: Array,
      required: true
    }
  }
};
</script>
