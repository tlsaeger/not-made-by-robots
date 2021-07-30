<template>
<transition name="fade">
  <div class="nav-wrapper" id="nav-wrapper"
  > 
    <transition name="moveUp"   v-on:after-leave="afterLeave"> 
      <nuxt-link to="/" class="nav-links" v-if="navOpen"   
        ><div  class="nav-burger" @click="burgerClicked">
          <p class="nav-text">Tutorials</p>
        </div></nuxt-link
      >
    </transition>
    <nuxt-link to="/wissen" class="nav-links" v-if="navOpen"
      ><div class="nav-burger" @click="burgerClicked">
        <p class="nav-text">Wissen</p>
      </div></nuxt-link
    >
    <nuxt-link to="/tools" class="nav-links" v-if="navOpen"
      ><div class="nav-burger" @click="burgerClicked">
        <p class="nav-text">Tools</p>
      </div>
    </nuxt-link>
    <nuxt-link to="/news" class="nav-links" v-if="navOpen"
      ><div class="nav-burger" @click="burgerClicked()">
        <p class="nav-text">News</p>
      </div></nuxt-link
    >
  </div>
</transition>
</template>
<script>
export default {

  data () {
    return {
      navOpen: true,
      afterNav: true,
  }
  },
  transition:{
        afterLeave(el) {
      console.log(el)
    }
  },
  methods: {

    //     scrollToEl: function(el) {
    //         const elToScroll = document.querySelector(el);
    //         elToScroll.scrollIntoView();
    // },
    burgerClicked() {
      // this.navOpen = false;
      this.$emit("burgerIsClicked", false);
      
    },
       afterLeave: function(){
         console.log("afterLEave")
        this.afterNav = false;
    }

  }
};
</script>
<style scoped>
.nav-wrapper {
  padding: 0;
  background-color: rgb(10,10,10);
  display: grid;
  justify-content: flex-end;
  text-transform: uppercase;
  background-color: none;
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
  /* opacity: 0; */
}
.nav-links {
  opacity: 1;
  border: solid 1px white;
  display: flex;
  justify-content: center;
  align-items: center;
   transition: 0.2s;
}
.nav-burger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.nav-text {
  font-size: 4em;
}
.nav-links:hover .nav-text{
  transition: 0.2s;
  transform: skew(-10deg);
}
.icon {
  font-size: 1.5em;
  justify-self: flex-start;
  margin-right: auto;
}
/* .moveUp-enter-active, .moveUp-leave-active {
   transition: .5s;
}
.moveUp-enter, .moveUp-leave-to  {
  transform: scale(1);
} */
/* @media (prefers-color-scheme: dark) {
  .nav-wrapper {
    background-color: black;
    border: 1px solid white;
  }
} */
</style>
