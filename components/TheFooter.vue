<template>
  <div class="footer-wrapper">
    <div @click="showAbout = true">About</div>
    <div @click="showImprint = true">Impressum</div>
    <transition name="from-corner">
      <TheImprint
        v-if="showImprint"
        v-on:closeTheImprint="closeSomething('Imprint')"
      />
      <TheAbout v-if="showAbout" v-on:closeTheAbout="closeSomething('About')" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImprint: false,
      showAbout: false
    };
  },
  methods: {
    closeSomething(name) {
      if (name === "Imprint") {
        this.showImprint = false;
      } else if (name === "About") {
        this.showAbout = false;
      }
    }
  }
};
</script>

<style scoped>
.f .footer-wrapper > div {
  cursor: pointer;
}
/* TODO Good animation */
.from-corner-enter-active,
.from-corner-leave-active {
  transition: all 0.5s;
  transform: scale(1) translateY(0) translateX(0);
}
.from-corner-enter,
.from-corner-leave-to {
  transform: scale(0) translateX(-200%) translateY(200%);
  opacity: 0;
}
/* @keyframes corner {
} */
</style>
