<template>
  <div class="home">
    <!-- <TheP5JS /> -->
    <section class="first_section">
      <h1 class="title"><span class="not">Not</span> Made <br />By Robots</h1>
      <p class="subline body-text">
        A Toolkit for Artificial Intelligence in Design
      </p>
      <a @click="scrollToEl('tutorials')" class="arrow">↓</a>
    </section>
    <section class="second_section">
      <h2 class="section-title" id="tutorials">
        Tutorials
      </h2>
      <div class="text-block-wrapper">
        <transition
          name="fade"
          v-for="tutorial in tutorials"
          :key="tutorial.slug"
        >
          <NuxtLink :to="'tutorial/' + tutorial.slug" class="card">
            <nuxt-img class="preview-image" :src="tutorial.image" />

            <h3>{{ tutorial.title }}</h3>
            <p class="body-text">{{ tutorial.description }} ↗︎</p>
          </NuxtLink>
        </transition>
      </div>
    </section>
    <section class="third_section">
      <h2 class="section-title" id="wissenswertes">
        Wissenswertes
      </h2>
      <div class="text-block-wrapper">
        <transition
          name="fade"
          v-for="wissenpost in wissen"
          :key="wissenpost.slug"
        >
          <NuxtLink :to="'wissen/' + wissenpost.slug" class="card">
            <nuxt-img class="preview-image" :src="wissenpost.image" />

            <h3>{{ wissenpost.title }}</h3>
            <p class="body-text">{{ wissenpost.description }} ↗︎</p>
          </NuxtLink>
        </transition>
      </div>
    </section>
    <section class="fourth_section">
      <h2 class="section-title" id="tools">
        Tools
      </h2>
      <div class="text-block-wrapper text-block-wrapper-mini">
        <transition
          name="fade"
          v-for="ressource in ressourcen"
          :key="ressource.slug"
        >
          <a :href="ressource.link" target="_blank" class="card card-mini">
            <nuxt-img
              class="preview-image preview-image-mini"
              :src="ressource.image"
            />
            <div class="desc-text-wrapper">
              <h3>{{ ressource.title }}</h3>
              <p class="body-text">{{ ressource.description }} ↗︎</p>
              <div class="tag-container">
                <div
                  v-for="tag in ressource.tags"
                  :key="tag"
                  class="tag"
                  :class="tag"
                >
                  {{ tag }}
                </div>
              </div>
            </div>
          </a>
        </transition>
      </div>
    </section>
    <section class="fifth_section">
      <h2 class="section-title" id="News">
        News 2
      </h2>
      <div class="text-block-wrapper text-block-wrapper-mini">
        <ul>
          <li v-for="tweet in tweets" :key="tweet.id">
            {{ tweet.text }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import tweets from "@/tweets/tweets";
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/p5.js/[p5_version]/p5.js"
        }
      ],
      script: [
        {
          src: "https://unpkg.com/ml5@latest/dist/ml5.min.js"
        }
      ]
    };
  },
  data() {
    return { tweets };
  },
  methods: {
    scrollToEl: function(element) {
      let scroll = document.getElementById(element);
      console.log(scroll);
      scroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  },
  async asyncData({ $content, params, error }) {
    let tutorials;
    let wissen;
    let ressourcen;
    try {
      tutorials = await $content("tutorial", params.slug).fetch();
      wissen = await $content("wissen", params.slug).fetch();
      ressourcen = await $content("ressourcen", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      tutorials,
      wissen,
      ressourcen
    };
  }
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
}

.title {
  color: #000;
  font-size: 8em;
  text-transform: uppercase;
}
.subline {
  font-size: 2em;
}
.arrow {
  position: absolute;
  bottom: 1em;
  left: 48%;
  font-size: 3em;
  transition: 0.2s;
}
.arrow:hover {
  transform: scale(1.1);
  transform: translateY(10px);
  transition: 0.2s;
}
.text-block-wrapper {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}
.text-block-wrapper-mini {
  justify-content: space-between;
  padding: 0 7em;
}
.section-title {
  padding-top: 2em;
  font-size: 4em;
}

.card {
  border: solid 1px black;
  box-shadow: 10px 3px 5px #a169e6;
  width: 80vw;
  height: 10%;
  margin-bottom: 1em;
  padding: 1em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: 0.2s;
}
.card-mini {
  width: 25%;
  padding: 0;
}
.tag {
  font-size: 0.5em;
  border: solid 1px #63e93a;
  color: #63e93a;
  width: fit-content;
  padding: 0.2em 0.5em;
  text-align: center;
  border-radius: 50em;
  margin: 0.3em;
  transition: 0.1s;
}
.tag:hover {
  background-color: #63e93a;
  color: #000;
  transition: 0.1s;
}
.No-Code {
  border: solid 1px #a169e6;
  color: #a169e6;
}
.No-Code:hover {
  background-color: #a169e6;
  color: black;
}

.No-Code:hover {
  background-color: #a169e6;
  color: black;
}
.tag-container {
  display: flex;
  flex-wrap: wrap;
}
.desc-text-wrapper {
  padding-left: 1em;
  padding-right: 1em;
}
.desc-text-wrapper > h3 {
  font-size: 1.6em;
  line-height: 110%;
}
/* .card > h3{
  padding-left: 1em;
} */
.card:hover {
  box-shadow: 5px 2px 10px #a169e6;
  transform: scale(1.01);
  transition: 0.2s;
}
.preview-image {
  width: 100%;
  height: 30%;
  object-fit: contain;
  /* filter: grayscale(100%) hue-rotate(90deg); */
}
.preview-image-mini {
  padding: 0;
  border-radius: 0.5em 0.5em 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
@media (prefers-color-scheme: dark) {
  .title {
    color: white;
  }
  .card {
    border: solid 1px white;
  }
}
</style>
