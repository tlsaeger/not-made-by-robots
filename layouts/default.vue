<template>
  <div>
    <TheNav />
    <Nuxt />
  </div>
</template>

<style>
@import url("https://use.typekit.net/wbf0hbb.css");
@font-face {
  font-family: 'terminal-regular';
  src: url(~/assets/fonts/terminal-grotesque-webfont.ttf) format("truetype");
}
@font-face {
  font-family: 'terminal-open';
  src: url(~/assets/fonts/terminal-grotesque_open.otf) format("opentype");
}
@font-face {
  font-family: 'EB-Garamond';
  src: url(~/assets/fonts/EBGaramond-VariableFont_wght.ttf) format("truetype");
}
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
  padding: .3em 0;
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
.nuxt-content p{
  border: solid 1px black;
  box-shadow: 5px 3px 3px #a169e6;
  width: 80vw;
  height: 10%;
  padding: 1em;
  border-radius: 0.5em;
  transition: 0.2s;
  line-height: 120%;
}
.nuxt-content img{
   border: solid 1px black;
  box-shadow: 5px 3px 3px #a169e6;
  width: 65%;
  /* height: 10%; */
  border-radius: 0.5em;
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
</style>
