<template>
     <section class="fourth_section">
      <h2 class="section-title" id="tools">
        Tools
      </h2>
      <!-- <div class="filter">
        <div
          class="filter-element tag"
          :class="[filterValue, {active: filterActive}]"
          v-for="filterValue in filteredArray"
          :key="filterValue"
        >
          {{ filterValue }}
        </div>
      </div> -->
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
</template>
<script>
import filterValues from "@/static/filterValues";
export default {
    data () {
        return {
    filterValues: filterValues.filterValues,
      filterActive: false,
      filteredArray: [],
    }
    },
    methods: {
    filtering(filterValue) {
      console.log(that)
      for (let i = 0; i < this.ressourcen.length; i++) {
        for(let j = 0; j < this.ressourcen[i].tags.length; j++)
        if (filterValue === this.ressourcen[i].tags[j] &&! this.filterActive) {
          this.filteredArray.push(this.ressourcen[i]);
          this.addClass('active');
        }
      }
    },
  },
   async asyncData({ $content, params, error }) {
    let ressourcen;
    try {
      ressourcen = await $content("ressourcen", params.slug).fetch();
      console.log(ressourcen)
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      ressourcen
    };
  }
}
</script>