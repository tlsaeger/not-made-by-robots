<template>
  <section class="fourth_section">
    <h2 class="section-title" id="tools">
      Tools
    </h2>
    <div class="filter">
      <div
        class="filter-element code tag"
        :class="[filterValue]"
        @click="filtering($event, 'code')"
        v-for="filterValue in filterValues.code"
        :key="filterValue"
      >
        {{ filterValue }}
      </div>
      <div
        class="filter-element level tag"
        :class="[filterValue]"
        @click="filtering($event, 'level')"
        v-for="filterValue in filterValues.level"
        :key="filterValue"
      >
        {{ filterValue }}
      </div>
      <div
        class="filter-element preis tag"
        :class="[filterValue]"
        @click="filtering($event, 'preis')"
        v-for="filterValue in filterValues.preis"
        :key="filterValue"
      >
        {{ filterValue }}
      </div>
    </div>
    <div class="text-block-wrapper text-block-wrapper-mini">
      <transition
        name="fade"
        v-for="ressource in filteredArray"
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
  props: {
    ressourcen: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filterValues: filterValues.filterValues,
      filteredArray: this.ressourcen
    };
  },
  methods: {
    //filter array based on clicked buttons
    filtering(e, group) {
      let activeValues = [];
      this.filteredArray = [];
      let groupList = document.getElementsByClassName(group);
      if (e.currentTarget.classList.contains("active")) {
        for (let i = 0; i < groupList.length; i++) {
          groupList[i].classList.remove("active");
        }
      } else {
        for (let i = 0; i < groupList.length; i++) {
          groupList[i].classList.remove("active");
          e.currentTarget.classList.add("active");
        }
      }
      const isContainedIn = (a, b) => {
        for (const v of new Set(a)) {
          if (
            !b.some(e => e === v) ||
            a.filter(e => e === v).length > b.filter(e => e === v).length
          )
            return false;
        }
        return true;
      };

      let active = document.getElementsByClassName("active");
      for (let i = 0; i < active.length; i++) {
        activeValues.push(active[i].innerText);
      }
      for (let i = 0; i < this.ressourcen.length; i++) {
        if (isContainedIn(activeValues, this.ressourcen[i].tags)) {
          this.filteredArray.push(this.ressourcen[i]);
        }
      }
    }
  }
};
</script>
<style scoped></style>
