<template>
  <div class="burger">
    <nuxt-link to="/" class="burger-item nav-title"
      ><span class="letter-spacing"><span class="italic">Not</span> Made</span>
      <br />
      By Robots</nuxt-link
    >
    <transition name="burger">
      <h3 class="burger-item page-index">{{ pageName }}</h3>
    </transition>
    <img
      @click="burgerClicked"
      src="~assets/img/bars-solid-dark.svg"
      class="burger-item burger-icon dark-burger"
    />
    <img
      @click="burgerClicked"
      src="~assets/img/bars-solid-light.svg"
      class="burger-item burger-icon light-burger"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      burger: ""
    };
  },
  computed: {
    pageName() {
      let lang = navigator.language;
      let count = 0;
      let pageIndexName = this.$route.path;
      for (let i = 0; i < pageIndexName.length; i++) {
        if (pageIndexName.charAt(i) === "/") {
          count++;
        }
      }
      if (count === 1) {
        pageIndexName = pageIndexName.replace("/", "");
      } else if (count > 1) {
        pageIndexName = pageIndexName.replace(/\/.*?\//, "");
      }
      pageIndexName = pageIndexName.replaceAll("-", " ");
      if (pageIndexName === "") {
        pageIndexName = "Tutorials";
      }
      if (pageIndexName === "wissen" && lang === "de") {
        pageIndexName = "wissen";
      } else if (pageIndexName === "wissen" && lang !== "de") {
        pageIndexName = "Theory";
      } else if (pageIndexName === "ressourcen" && lang === "de") {
        pageIndexName = "Ressourcen";
      } else if (pageIndexName === "ressourcen" && lang !== "de") {
        pageIndexName = "Ressources";
      }
      pageIndexName = pageIndexName.replaceAll("ae", "ä");
      return pageIndexName;
    }
  },
  methods: {
    burgerClicked() {
      this.$emit("burgerIsClicked", true);
    }
  }
};
</script>
<style scoped>
.burger {
  margin: 0;
  padding: 0;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(10, 10, 10);
  border-bottom: solid 1px rgb(245, 245, 245);
}
.burger-item {
  font-size: 2em;
  line-height: 50%;
}
.burger-icon {
  cursor: pointer;
  height: 1.5em;
  width: 1.5em;
  padding: 0.2em;
}
.light-burger {
  display: none;
}
.dark-burger {
  display: inline;
}
.page-index {
  text-transform: capitalize;
  align-self: center;
  font-weight: 400;
  font-style: normal;
  font-size: 2.3em;
  padding-right: 1.3em;
  padding-bottom: 0.2em;
}
.nav-title {
  font-size: 1.2em;
  line-height: 100%;
  padding-left: 0.4em;
}
.italic {
  font-style: italic;
  padding: 0;
}
.letter-spacing {
  letter-spacing: 0.01em;
  padding: 0;
}
@media (prefers-color-scheme: light) {
  .burger {
    background-color: rgb(245, 245, 245);
    border-bottom: solid 1px rgb(10, 10, 10);
  }
  .light-burger {
    display: inline;
  }
  .dark-burger {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .page-index {
    font-size: 1.3em;
  }
  .nav-title {
    font-size: 0.6em;
  }
  .burger-icon {
    font-size: 1.3em;
  }
}
</style>
