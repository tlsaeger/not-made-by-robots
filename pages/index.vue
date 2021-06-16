<template>
  <div class="home">
       <section class="first_section">
      <h1 class="title"><span class="not">Not</span> Made <br />By Robots</h1>
      <p class="subline body-text">
        A Toolkit for Artificial Intelligence in Design
      </p>
    </section>
    <section class="second_section">
        <h2 class="section-title">
          Tutorials
        </h2>
        <div class="text-block-wrapper">
            <transition name="fade"  v-for="tutorial in tutorials"
            :key="tutorial.slug">
          <NuxtLink :to="tutorial.slug"
            class="card"
           
          >
            <nuxt-img
              class="preview-image"
              :src="tutorial.image"
            />
        
            <h3>{{ tutorial.title }}</h3>
            <p class="body-text">{{ tutorial.description }}</p>
            <p>>></p>
          </NuxtLink>
            </transition>
        </div>

    </section>
  </div>
</template>


<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
   async asyncData({ $content, params, error }) {
    let tutorials;
    try {
      tutorials = await $content("tutorial", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      tutorials,
    };
  },
};
</script>

<style>
.first_section {
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background: rgb(187, 134, 252);
  background: radial-gradient(
    circle,
    rgba(187, 134, 252, 1) 0%,
    rgba(0, 0, 0, 1) 50%
  );
}

.title {
  color: #000;
  font-size: 5em;
  text-transform: uppercase;
}
span.not {
  font-family: "terminal-open", Arial, Helvetica, sans-serif;
  color: #000;
}
.subline {
  color: #000;
  font-size: 1.4em;
}
.text-block-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.section-title {
  font-size: 4em;
  margin: 1em 0 0.3em 1em;
}

.card {
  background-color: #000;
  box-shadow: 10px 3px 5px #bb86fc;
  width: 20%;
  min-height: 300px;
  height: 30%;
  margin: 1em;
  padding: 1em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: 0.2s;
}
.card:hover {
  box-shadow: 5px 2px 10px #bb86fc;
  transform: scale(1.1);
  transition: 0.2s;
}
.preview-image {
  width: 100%;
  height: 30%;
  object-fit: cover;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
