<template>
  <div class="footer-wrapper">
    <div>About</div>
    <div @click="showImprint = true">Impressum</div>
    <transition name="from-corner">
      <TheImprint
        v-if="showImprint"
        v-on:closeTheImprint="closeSomething('Imprint')"
      />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImprint: false
    };
  },
  methods: {
    closeSomething(name) {
      if (name === "Imprint") {
        this.showImprint = false;
      }
    }
  }
};
</script>

<style scoped>
/* TODO Good animation */
.from-corner-enter-active,
.from-corner-leave-active {
  transition: all 0.5s;
  transform: scale(0.5);
}
.from-corner-enter,
.from-corner-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
</style>
