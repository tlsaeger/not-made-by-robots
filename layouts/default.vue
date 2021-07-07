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
*{
  font-family: neue-haas-unica, sans-serif;
  font-weight: 500;
  font-style: normal;
  color:#a169e6;
}
html {
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
h1,h2,h3,p{
  margin: 0;
  font-weight: 400;
  margin-block-start: 0em;
  margin-block-end: 0em;
  line-height: 80%;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
body{
  margin: 0;
  background-color: white;
  padding: 1em 1.5em;
}
h3{
  font-size: 3em;
}
a{
  text-decoration: none;
   cursor: pointer;
}
p{
line-height: 120%;
}
.nuxt-content p{
  border: solid 1px black;
  box-shadow: 5px 3px 3px #a169e6;
  width: 80vw;
  height: 10%;
  padding: 1em;
  border-radius: 0.5em;
  transition: 0.2s;
  margin-bottom: 3em;
}
.nuxt-content a{
  font-style: italic;
}
.nuxt-content img{
   /* border: solid 1px black;
  box-shadow: 5px 3px 3px #a169e6; */
  width: 65%;
  /* height: 10%; */
  /* border-radius: 0.5em; */
  transition: 0.2s;
  object-fit: contain;
}
.slide-bottom-enter-active,
.slide-bottom-leave-active {
   transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out; 
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
@media (prefers-color-scheme: dark) {
  body   { background-color: black; }
  *{
    color: #bb86fc
  }
  .nuxt-content p{
    border: solid 1px white;
  }
}
/* TODO better animation */
.burger-enter-active, .burger-leave-active {
  transition: opacity .5s;
}
.burger-enter, .burger-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
