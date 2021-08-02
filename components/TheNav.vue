<template>
<transition name="fade">
  <div class="nav-wrapper" id="nav-wrapper"
  > 
    <transition name="moveUp"   v-on:after-leave="afterLeave"> 
      <nuxt-link to="/" class="nav-links" v-if="navOpen"   
        ><div  class="nav-burger" @click="burgerClicked">
          <h3 class="nav-text">Tutorials</h3>
        </div></nuxt-link
      >
    </transition>
    <nuxt-link to="/wissen" class="nav-links" v-if="navOpen"
      ><div class="nav-burger" @click="burgerClicked">
        <h3 class="nav-text">Wissen</h3>
      </div></nuxt-link
    >
    <nuxt-link to="/tools" class="nav-links" v-if="navOpen"
      ><div class="nav-burger" @click="burgerClicked">
        <h3 class="nav-text">Tools</h3>
      </div>
    </nuxt-link>
    <nuxt-link to="/news" class="nav-links" v-if="navOpen"
      ><div class="nav-burger" @click="burgerClicked()">
        <h3 class="nav-text">News</h3>
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
  background-color: rgb(19,19,19);
  display: grid;
  justify-content: flex-end;
  /* text-transform: uppercase; */
  background-color: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  border: solid 1px rgb(10,10,10);
  z-index: 999;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  /* opacity: 0; */
}
.nav-links {
  opacity: 1;
  border: solid 1px rgb(245,245,245);
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
  transition: 0.2s;
  font-size: 4em;
}
.nav-links:hover .nav-text{
  transition: 0.2s;
  transform: scale(1.1);
  /* font-weight: 600; */
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
@media (prefers-color-scheme: light) {
  .nav-wrapper {
    background-color: rgb(245,245,245);
  }
  .nav-links{border: solid 1px rgb(19,19,19);
  }
}
</style>
