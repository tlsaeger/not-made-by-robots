<template>
  <div class="burger">
    <nuxt-link to="/" class="burger-item nav-title"><span class="letter-spacing"><span class="italic">Not</span> Made</span> <br> By Robots</nuxt-link>
    <transition name="page">
    <p class="burger-item page-index">{{ pageName }}</p>
    </transition>
    <img
      @click="burgerClicked"
      src="~assets/img/bars-solid.svg"
      class="burger-item burger-icon"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      burger: "",
    };
  },
  computed: {
    pageName() {
    let count = 0;
     let pageIndexName = this.$route.path;
     for (let i = 0; i < pageIndexName.length; i++) {
       if(pageIndexName.charAt(i) === "/"){
         count++;
       }
     }
     if (count === 1) {
       pageIndexName =  pageIndexName.replace("/", " ");
     }
     else if(count > 1){
       pageIndexName = pageIndexName.replace( /\/.*?\//, '' );
     }
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
  border: solid 1px white;
}
.burger-item {
  font-size: 2.5em;
  line-height: 50%;
}
.burger-icon {
  cursor: pointer;
  height: 1.5em;
  width: 1.5em;
  padding: 0.2em;
}
.page-index {
  text-transform: uppercase;
  align-self: center;
}
.nav-title{
  font-size: 1.2em;
  line-height: 100%;
}
.italic {
  font-style: italic;
  padding: 0;
}
.letter-spacing {
  letter-spacing: 0.01em;
  padding: 0;
}
</style>
