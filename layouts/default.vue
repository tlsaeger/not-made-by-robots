<template>
  <div>
    <TheBurger @burgerIsClicked="burgerIsClicked"/>
    <transition
        name="burger"
      >
    <TheNav @burgerIsClicked="burgerIsClicked" v-if="burgerClicked" />
    </transition>
    <Nuxt />
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
      console.log("reciving" + value)
      this.burgerClicked = value;
    }
  }

}
</script>

<style>
@import url("https://use.typekit.net/wbf0hbb.css");

</style>
