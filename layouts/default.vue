<template>
  <div>
    <TheBurger @burgerIsClicked="burgerIsClicked"/>
    <transition
        name="burger"
      >
    <TheNav @burgerIsClicked="burgerIsClicked" @pageClicked="pageIsClicked" v-if="burgerClicked" />
    </transition>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      burgerClicked: false,
    };
  },
  methods:{
    burgerIsClicked(value){
      this.burgerClicked = value;
    },
    pageIsClicked(value){
      console.log("reciving" + value)
      this.burgerClicked = value;
    }
  }

}
</script>

<style>
@import url("https://use.typekit.net/wbf0hbb.css");

</style>
