<template>
    <div class="nav-wrapper">
         <transition
          name="fade"
        ><nuxt-link to='/' class="icon">🤖</nuxt-link> </transition>
        <nuxt-link :to="{path:'/', hash:'#tutorials'}" class="nav-links">Tutorials</nuxt-link>
        <nuxt-link to="/#wissenswertes" class="nav-links">Wissenswertes</nuxt-link>
        <nuxt-link :to="{path:'/', hash:'#tools'}" class="nav-links">Tools</nuxt-link>
        <nuxt-link :to="{path:'/', hash:'#news'}" class="nav-links">News</nuxt-link>
    </div>
</template>
<style scoped>
.nav-wrapper{
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    border: solid 1px black;
    padding-left: 1.5em;
    padding-right:1.5em ;
    z-index: 99;
}
.nav-links{
    font-size: 1.5em;
    margin-left: 2em;
    
}
.icon{
    font-size: 1.5em;
    justify-self: flex-start;
    margin-right: auto;
}
@media (prefers-color-scheme: dark) {
  .nav-wrapper   { background-color: black; border: 1px solid white}

}
</style>