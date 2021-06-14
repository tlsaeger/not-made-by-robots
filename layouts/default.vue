<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
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
   font-family: 'terminal-regular',Arial, Helvetica, sans-serif;
  color:#bb86fc;
}
html {
  font-size: 16px;
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
h1,h2,p{
  margin: 0;
  font-weight: 400;
  margin-block-start: 0em;
  margin-block-end: 0em;
  line-height: 80%;
}
body{
  margin: 0;
   background-color: black;
}
a{
  text-decoration: none;
}

</style>
