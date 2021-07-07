<template>
  <div class="nav-wrapper">
      <nuxt-link to="/" class="nav-links"
        ><div class="nav-burger" @click="burgerClicked">
          <p class="nav-text">Tutorials</p>
        </div></nuxt-link
      >
    <nuxt-link to="/wissen" class="nav-links"
      ><div class="nav-burger" @click="burgerClicked">
        <p class="nav-text">Wissen</p>
      </div></nuxt-link
    >
    <nuxt-link to="/tools" class="nav-links"
      ><div class="nav-burger" @click="burgerClicked">
        <p class="nav-text">Tools</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/news" class="nav-links"
      ><div class="nav-burger" @click="burgerClicked">
        <p class="nav-text">News</p>
      </div></nuxt-link
    >
  </div>
</template>
<script>
export default {
  methods: {
    //     scrollToEl: function(el) {
    //         const elToScroll = document.querySelector(el);
    //         elToScroll.scrollIntoView();
    // },
    burgerClicked() {
      this.$emit("burgerIsClicked", false);
    }
  }
};
</script>
<style scoped>
.nav-wrapper {
  display: grid;
  justify-content: flex-end;
  text-transform: uppercase;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  border: solid 1px black;
  z-index: 999;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.nav-links {
  border: solid 1px white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-burger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.nav-links:hover {
  transition: 0.2s;
  background-color: lightblue;
}
.nav-text {
  font-size: 4em;
}
.icon {
  font-size: 1.5em;
  justify-self: flex-start;
  margin-right: auto;
}
@media (prefers-color-scheme: dark) {
  .nav-wrapper {
    background-color: black;
    border: 1px solid white;
  }
}
</style>
